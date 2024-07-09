import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express"
import { Users } from '../database/models/User'


export const register =  async (req: Request, res: Response) =>{
try {
    //! recuperar la inf 
    const email = req.body.email
    const password = req.body.password


    //2 validar inf
     if(!email || !password) {
        return res.json(400).json(
            {
                success: false,
                massage: "email and password are required"
            }
        )
     }


     //todo validar formato email

     if(password.length < 8 || password.length > 12){
        return res.status(400).json(
            {
                success:false,
                message:"password is not valid, 8 to 12 charachters must be needed"
            }
        )
     }
    //3 tratar la inf si hace falta 
/// todo encriptar password 
const hashedPassword = bcrypt.hashSync(password,10);

//4 guardar en bd
const newUser = await Users.create(
    {
        email: email,
        password: hashedPassword
    }

).save()



res.status(201).json(
    {
        success: false,
        message: "user registered",
        data: newUser
    }
)


} catch (error) {
    res.status (500).json(
        {
            success: false,
            messsages: "user cant be registered",
            error: error
        }
    )
    
}

}

export const login = async (req:Request , res: Response) => {
    try {
        //1. recuperar la info
        //const email = req.body.email;    se puede hacer de esta forma o la de abajo 
        //const password =req.body.password;

        const { email, password } = req.body

        //2. validar info////

        if(!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email and password are needed"
                }
            )
        }

        /// 3. comprobar si el usuario existe

       const user = await Users.findOne(
        {
            where: {email: email}
        }
    
    )

    if(!user){
        return res.status(400).json(
            {
                success: false,
                message: "email or password not valid"
            }
        )
    }
     
    ////// 4. comprobar la contraseña
   const isPasswordValid= bcrypt.compareSync(password, user.password)

   if(!isPasswordValid){
    return res.status(400).json(
        {
            success: false,
            message: "email or password not valid"
        }
    )
   }

  
   //5. creation del token
   const token = jwt.sign(
    {
     id: user.id,
     role: user.role,
     email:user.email
    },

    process.env.JWt_SECRET as string,
    {
        expiresIn:"2h"
    }
    

)



   res.status(200).json(
    {
        success: true,
        message: "user logged",
        token: token
    }
   )

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be logged",
            error: error
        })
        
    }
}
import { Request, Response } from "express";
import { Users } from "../database/models/User";
import { User1719825085793 } from "../database/migrations/1719825085793-user";

export const createUsers =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);

 
    res.json({
        success: true,
        message: 'CREATE USERS'
    })
}

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        //1. recuperar id del usuario a traves del token
        const userId = req.tokenData.id;
       
        ///2. buscamos id en bd
    const user = await Users.findOne(
            {
                where:{
                    id:userId
                }
            }
        )

        ///3 responder 
        res.json(
            {
                success: true,
                message: "user profile retrieve",
                data: user
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "profile cant be retrieved"
            }
        )
        
    }
}


  export const getAllUsers=  async (req: Request, res: Response) => {
    try {
        // 1 recuperar de la bd 
     const users = await  Users.find(
        {
            select: {
                email: true,
                is_active: true,
                created_at: true
            }
        }
     )

     res.json(
        {
            success: true,
            message: "ALL users retrieved ",
            data : users
        }
     )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "error retrieving users",
                error: error
            }
        )
    }
 

}


export const getUserFavoritesBooks = async(req: Request, res: Response) => {
    try {
 //// 1. primero recuperar el id del usuario que hace la peticion a traves del token 
 const userId = req.tokenData.id

 const userFavouriteBooks=await Users.findOne({
    select: {
        id: true,
        email:true

    },

    where: {
        id: userId
    },
    relations: {
        favourites_books: {
            book: {
                author: true
            }
        }

    }
 })

 res.json(
    {
        success: true,
        message: "se ha traido los favorites"
    }
 )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "error retrieving favourite books",
                error: error
            }
        )
        
    }
}

export const updateUsersById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `USER UPDATED with id ${req.params.id}`
    })
}

export const deleteUsersById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `USER DELETED With id: ${req.params.id}`
    })
}


export const usersProfile = (req: Request, res: Response) => {
    res.send('detalles el perfil');
}


export const usersActualiza = (req: Request, res: Response) => {
    res.send('Actualiza perfil');
}


export const usersFavourites = (req: Request, res: Response) => {
    res.send('Obtener mis favoritos');
}

export const usersFavouritesBooks = (req: Request, res: Response) => {
    res.send('Agregar mi favorito');
}

export const deleteMyFavorite = (req: Request, res: Response) => {
    res.send('Eliminar mi favorito');
    
}

export const newUser= (req :Request, res: Response) => {
    res.send ('nuevo usuario')
}

export const userLists= (req :Request , res: Response) => {
    res.send ('lista de usuarios')
}

export const userDetailsById= (req :Request , res: Response) => {
    res.json({
        success: true,
        message: `USER DETAILS With id: ${req.params.id}`
    })
}

export const actualizaUserId = (req :Request , res: Response) => {
    res.json({
        success: true,
        message: `USER UPDATE With id: ${req.params.id}`
    })
}

export const eliminaUserById = ( req : Request , res: Response) => {
    res.json({
        success: true,
        message :` USER ELIMINATE with id: ${req.params.id}`
    })
}

export const changeRoleById = ( req : Request , res: Response) => {
    res.json({
        success: true,
        message :` CHANGE ROL with id: ${req.params.id}`
    })
}
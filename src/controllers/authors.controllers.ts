import { Request, Response } from "express";
import { Author } from "../database/models/Author";

export const createAuthor = async (req: Request, res: Response) => {
 ////.1 recuperar la informacion de la req
    //console.log(req.body)
    //console.log(req.body.name) 
    //console.log(req.body.nationality)


   const name = req.body.name;
   const nationality = req.body.nationality

   ////2 validar informacion 

 try {
    if(!name){
        return res.status(400).json(
            {
                sucess: false,
                message: "name is required"
            }
        )
     }
    
     if(!nationality){
        return res.status(400).json(
            {
                success: false,
                message: "nationality is required"
            }
        )
     }
    
     ////////3 tratar informacion
    
    
    
     /// 4 atacar a la bd
       const newAuthor = await Author.create(
            {
                name: name,
                nationality: nationality
            }).save();
    
    
        ///5 responder
    
        
    
    
        
         res.json (
            {
             success: true,
             message: 'Author created successfully',
             data: newAuthor
            }
         )
     
    } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: "error created author"
        }
    )
    
 }
}

export const updateAuthorById = (req: Request, res: Response) =>{
    console.log(req.params.id);

    res.send(`author update with ${req.params.id}`)
}


export const deleteAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `AUTHOR DELETED With id: ${req.params.id}`
    })
}

export const authorslist = (req: Request, res: Response) => {
    res.send('lista autores');
}

export const authorsnewById= (req: Request, res: Response) => {
    res.send('nuevo autor');
}



export const auhtordetailById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `detalles author With id: ${req.params.id}`
       })
}

export const authoractualizaById= (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `actualiza author With id: ${req.params.id}`
       })
}

export const authordeleteById = ( req : Request, res: Response) => {
    res.json ({
        success: true,
        message : `elimina libro with id: ${req.params.id}`
    })
}



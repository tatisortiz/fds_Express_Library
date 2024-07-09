
import { Request, Response } from "express";
import { Author } from "../database/models/authors";

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


export const getAllAuthors = async (req: Request, res: Response) =>{
    try {
        ///1 recuperar la inf de la BD
        let limit= Number(req.query.limit || 5)
        const page=  Number(req.query.page || 1)

        if(limit>20){
            limit=20
        }




        const authors =  await Author.find({
        skip:(page-1)*limit,  /// 
        take:limit
      })

      //2 responder la inf de la BD
      res.json(
        {
            success: false,
            message: "all author retrieve successfully",
            data: authors
        }
      )




    } catch (error) {
        res.status(500).json(
            {
                success: false, 
                message: "cant retrieve authors",
                error: error
            }
        )
        
    }
       }

export const updateAuthorById = async (req: Request, res: Response) =>{
   try {
    /////1. recuperar la inf
   const authorIdToUpdate = req.params.id
   const body = req.body

   ///2. validar la informaccion, 
    //aqui se podria validar un ejemplo la contraseña


    //3 tratar la infor , no es necesario aqui 


    //4 actualizar base de datos , aqui se actuliazan los modelos
  const authorUpdated = await Author.update (
        {
            id: parseInt(authorIdToUpdate)
        },
        body
    )
     
    /// responder 

    res.status(200).json(
        {
            success: true,
            message: "author updated",
            data: authorUpdated
        }
    )

   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: "author cant be updated",
            error: error
        }
    )
   }
}


export const deleteAuthorById = async (req: Request, res: Response) => {
   try {
    // 1 recuperar id
   const authorIdToDelete = Number(req.params.id)
    // 2. eliminar registro de la bd

   const authorDeleted =await Author.delete(authorIdToDelete)
   
   if(!authorDeleted.affected){
    return res.status(404).json(
        {
            success: false,
            message: "Author doesnt exist"
        }
    )
   }

   /// 3. responde 
   res.status(200).json(
    {
        success: true,
        message: "author deleting author",
        data: authorDeleted
    }
)

   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: "error deleting author",
            error: error
        }
    )
    
   }
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



import { Request, Response } from "express";

export const createAuthor = (req: Request, res: Response) => {
 
    console.log(req.body)
    console.log(req.body.name) 
    console.log(req.body.nationality)
    
     res.json (
        {
         success: true,
         message: 'create author'
        }
     )
 
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



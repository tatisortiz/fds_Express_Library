import { Request, Response } from "express";
import { Book } from "../database/models/Book";

export const createBooks = async (req: Request, res: Response) => {
    // console.log(req.body);
    // console.log(req.body.title);
    // console.log(req.body.description);
    // console.log(req.body.author);

    // res.json({
    //     success: true,
    //     message: 'CREATE BOOK'
    //    })

    try {

        ///// 1. recupero la inf a guardar
        const title = req.body.title
        const description = req.body.description
        const authorId = req.body.author_id


        //2. validar la info

        if (!title || !description || !authorId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title, description and author are needed"
                }
            )
        }

        //////3. validar si el libro por isb existe , (pero este no es el caso)

        /// 4 guardar en base datos

        const newBook = await Book.create(
            {
                title: title,
                description: description,
                authorId: authorId

            }
        ).save()

        res.status(201).json(
            {
                success: true,
                messges: "book created",
                data: newBook
            }
        )

        //// 5.responder

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                messges: "book cant be created",
                error: error
            }
        )

    }


}


export const getAllBooks = async (req: Request, res: Response) => {
    try {
        ///1 recuperar los libros
        const books = await Book.find(
            {
                select: {
                    title: true,
                    description: true,
                    author:{
                        id: true,
                        name: true,
                        nationality:true
                    }
                },
                 relations:{
                    author: true
                    }
            }
            
            )

        // 2. responder la inf

        res.json(
            {
                success: true,
                message: "all book retrieve successfully",
                data: books
            }
        )



    } catch (error) {
        res.status(500).json(
            { 
                success: false,
                message: "no books found",
                error: error

            }
        )

    }
}

export const updateBookById = async (req: Request, res: Response) => {
   try {
    ///1 recuperar la inf
    const bookIdToUpdate = req.params.id
   const bodyBook = req.body
///2. validar la informaccion, 
    //aqui se podria validar un ejemplo la contraseña


    //3 tratar la infor , no es necesario aqui 


    //4 actualizar base de datos , aqui se actuliazan los modelos
    const authorUpdated = await Book.update (
        {
            id: parseInt(bookIdToUpdate)
        },
        bodyBook
    )
     
    /// responder 

    res.status(200).json(
        {
            success: true,
            message: "book updated",
            data: authorUpdated
        }
    )
    
   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: "book cant be updated",
            error: error
        }
    )
    
   }
}

export const deleteBookById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `BOOK DELETED With id: ${req.params.id}`
    })
}

export const booksListes = (req: Request, res: Response) => {
    res.send('lista libros');
}

export const booksNew = (req: Request, res: Response) => {
    res.send('nuevo libro');
}

export const BooksNewsById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `BOOK DETALLES With id: ${req.params.id}`
    })
}

export const BookActualizaId = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Actualiza libro With id: ${req.params.id}`
    })
}

export const BookEliminadoId = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `BOOK ELIMINADO With id: ${req.params.id}`
    })
}


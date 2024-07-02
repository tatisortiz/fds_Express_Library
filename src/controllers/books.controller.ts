import { Request, Response } from "express";

export const createBooks =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.author);
    
    res.json({
        success: true,
        message: 'CREATE BOOK'
       })
}

export const updateBookById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `BOOK UPDATED with id ${req.params.id}`
       })
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


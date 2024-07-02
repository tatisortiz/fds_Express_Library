import { Request, Response } from "express";

export const createLoans =  (req: Request, res: Response) => {
    console.log(req.body);
 
 
    res.json({
        success: true,
        message: 'CREATE LOANS'
    })
}

export const updateLoansById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `LOANS UPDATED with id ${req.params.id}`
    })
}

export const deleteLoansById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `LOANS DELETED With id: ${req.params.id}`
    })
}


export const loansList = (req: Request, res: Response) => {
    res.send('lista prestamos');
}

export const loansDeteilId= (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `detalles de prestamos With id: ${req.params.id}`
       })
}

export const loansprestamo = (req: Request, res: Response) => {
    res.send('prestamo del usuario autenticado');
}

export const loansprestamonews = (req: Request, res: Response) => {
    res.send('nuevo prestamo');
}


export const loansactualizaprest= (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `actualiza prestamo With id: ${req.params.id}`
       })
}

export const loanseliminprest= (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `elimina prestamo With id: ${req.params.id}`
       })
}

export const loansactualprest= (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `actualiza prestamo como devuelto With id: ${req.params.id}`
       })
}
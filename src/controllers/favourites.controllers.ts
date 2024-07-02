import { Request, Response } from "express";

export const createFavourite =  (req: Request, res: Response) => {
    console.log(req.body);
 
 
    res.json({
        success: true,
        message: 'CREATE Favourite'
    })
}

export const updateFavouriteById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `Favourite UPDATED with id ${req.params.id}`
    })
}

export const deleteFavouriteById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `FAVOURITE DELETED With id: ${req.params.id}`
    })
}
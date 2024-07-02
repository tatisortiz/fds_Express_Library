import { Request, Response } from "express";

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
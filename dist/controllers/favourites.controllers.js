"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavouriteById = exports.updateFavouriteById = exports.createFavourite = void 0;
const createFavourite = (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: 'CREATE Favourite'
    });
};
exports.createFavourite = createFavourite;
const updateFavouriteById = (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: `Favourite UPDATED with id ${req.params.id}`
    });
};
exports.updateFavouriteById = updateFavouriteById;
const deleteFavouriteById = (req, res) => {
    res.json({
        success: true,
        message: `FAVOURITE DELETED With id: ${req.params.id}`
    });
};
exports.deleteFavouriteById = deleteFavouriteById;

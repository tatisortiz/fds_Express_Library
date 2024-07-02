"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authors_controllers_1 = require("./controllers/authors.controllers");
const books_controller_1 = require("./controllers/books.controller");
const favourites_controllers_1 = require("./controllers/favourites.controllers");
const loans_controllers_1 = require("./controllers/loans.controllers");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
const PORT = process.env.port || 4000;
app.get('/healthy', (req, res) => {
    //    res.send('Server is healthy')
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});
app.listen(PORT, () => {
    console.log('Server is running.');
});
//AUTHORS
app.post('/authors', authors_controllers_1.createAuthor);
//rutas dianmicas usamos req params
app.put('/authors/:id', authors_controllers_1.updateAuthorById);
//DELETE
app.delete('/authors/:id', authors_controllers_1.deleteAuthorById);
//BOOKS
app.get('/books', (req, res) => {
    res.send('GET ALL BOOKS');
});
app.post('/books', books_controller_1.createBooks);
app.put('/books/:id', books_controller_1.updateBookById);
app.delete('/books/:id', books_controller_1.deleteBookById);
//LOANS
app.get('/loans', (req, res) => {
    res.send('GET ALL loans');
});
app.post('/loans', loans_controllers_1.createLoans);
app.put('/loans/:id', loans_controllers_1.updateLoansById);
app.delete('/loans/:id', loans_controllers_1.deleteLoansById);
// FAVOURITE 
app.get('/favourites', (req, res) => {
    res.send('GET ALL loans');
});
app.post('/favourites', favourites_controllers_1.createFavourite);
app.put('/favourites/:id', favourites_controllers_1.updateFavouriteById);
app.delete('/favourites/:id', favourites_controllers_1.deleteFavouriteById);

import 'dotenv/config';
import express from 'express';
import {  auhtordetailById, authoractualizaById, authordeleteById, authorslist,  authorsnewById, createAuthor, deleteAuthorById, getAllAuthors, updateAuthorById } from './controllers/authors.controllers';
import { BookActualizaId, BookEliminadoId, BooksNewsById, booksListes, booksNew, createBooks, deleteBookById, getAllBooks, updateBookById } from './controllers/books.controller';
import { createFavourite, deleteFavouriteById, updateFavouriteById } from './controllers/favourites.controllers';
import { createLoans, deleteLoansById, loansDeteilId, loansList, loansactualizaprest, loansactualprest, loanseliminprest, loansprestamo, loansprestamonews, updateLoansById } from './controllers/loans.controllers';
import { usersProfile, usersActualiza, usersFavourites, usersFavouritesBooks, deleteMyFavorite, newUser, userLists, getAllUsers, getUserProfile, getUserFavoritesBooks} from './controllers/users.controllers';
import { AppDataSource } from './database/db';
import { login, register } from './controllers/auth.controller';
import { auth } from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';


const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});



// // AUTHORS
 app.post('/authors',auth, createAuthor);
 app.put('/authors/:id', updateAuthorById);
 app.delete('/authors/:id', deleteAuthorById);
 app.get('/authors',  getAllAuthors);

// // BOOKS

 app.post('/books', createBooks);
 app.get ('/books',getAllBooks);
 app.put('/books/:id', auth,updateBookById);
 app.delete('/books/:id', auth, deleteBookById);


///auth////
app.post ('/register',register);
app.post('/login', login);




// // LOANS
 app.get('/loans', (req, res) => {
     res.send('GET ALL loans');
 });
 app.post('/loans', createLoans);
 app.put('/loans/:id', updateLoansById);
 app.delete('/loans/:id', deleteLoansById);

// // FAVOURITES

app.post('/favourites',auth, createFavourite);
app.put('/favourites/:id', updateFavouriteById);
app.delete('/favourites/:id', auth , deleteFavouriteById);

// // USER

 app.get('/users',auth, isAdmin, getAllUsers);
 app.get('/profile', auth, getUserProfile);
 app.get('/users/favourites',auth, getUserFavoritesBooks)


//  app.post('/users', createUsers);
//  app.put('/users/:id', updateUsersById);
//  app.delete('/users/:id', deleteUsersById);





//USERS //////////77

app.get('/api/users/profile', usersProfile);

app.put('/api/users/profile', usersActualiza);

app.get('/api/users/favorite_books', usersFavourites);

app.post('/api/users/favorite_books', usersFavouritesBooks);

app.delete('/api/users/favorite_books', deleteMyFavorite);

app.post('/api/users', newUser);

app.get('/api/users', userLists);

app.get('/api/users/:id', (req, res) => {
    res.send(`Detalles de usuario ${req.params.id}`);
});

app.put('/api/users/:id', (req, res) => {
    res.send(`Actualiza usuario ${req.params.id}`);
});

app.delete('/api/users/:id', (req, res) => {
    res.send(`Elimina usuario ${req.params.id}`);
});

app.put('/api/users/:id/role', (req, res) => {
    res.send(`Cambiar rol de usuario ${req.params.id}`);
});


////// AUTHORS////////////////////////////
app.get('/api/authors', authorslist);

app.post('/api/authors', authorsnewById);

app.get('/api/authors/id:', auhtordetailById);

app.put('/api/authors/id:', authoractualizaById );

app.delete('/api/authors/id:', authordeleteById );



///// BOOKS////////////////////////////////////////
app.get('/api/books', booksListes);

app.post('/api/books', booksNew);

app.get('/api/books/:id', BooksNewsById);

app.put('/api/books/:id', BookActualizaId);

app.delete('/api/books/:id', BookEliminadoId);


///// LOANS /////////

app.get ('/api/loans', loansList);

app.get ('/api/loans/:id',loansDeteilId)

app.get ('/api/loans/users/current', loansprestamo)

app.get  ('/api/loans/users/current/:userid', loansprestamo)

app.post ('/api/loans', loansprestamonews);

app.put  ('/api/loans/:id',loansactualizaprest);

app.delete  ('/api/loans/:id',loanseliminprest);

app.put  ('/api/loans/return/:id', loansactualprest);






AppDataSource.initialize()
.then(() => {
console.log('Database connected');
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

})
.catch(error => {
console.log(error)
})
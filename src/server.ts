import express from 'express';


const app = express();

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
    res.send('server is healthy');


})
//books
app.get ('/books',(req, res) => {
    res.send ('GET ALL BOOKS')

});

app.post ('/books',(req, res) => {
    res.send ('BOOK created')

});

app.put ('/books',(req, res) => {
    res.send ('BOOK UPDATE')

});

app.delete ('/books',(req, res) => {
    res.send ('BOOK deleted')

});

app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`)



});
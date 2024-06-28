import express from 'express';


const app = express();

//middleware

app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
    res.send('server is healthy');


})
// AUTHORS

app.post ('/authors',(req, res) => {
    //recuperar la inf de la req
    console.log(req.body)
    console.log(req.body.name) //para que solo se vea ese elemento 
    console.log(req.body.nationality);
    
     res.send ('author create')

});


//rutas dinamicas usamos req params

app.put('/authors/:id', (req, res) =>{
    console.log (req.params.id);
    res.send (`AUTHOR UPDATE with id: ${req.params.id}`)
})



app.delete('/authors/:id', (req, res) =>{
 res.send(`author deleted by id ${req.params.id}`)

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
import express from 'express';


const app = express();

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
    res.send('server is healthy');


})




app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`)



});
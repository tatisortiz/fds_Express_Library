import express from 'express';


const app = express();

app.get('/healthy', (req, res) => {
    res.send('server is healthy');


})

app.listen(4000, () => {
console.log(`server is running`);



})
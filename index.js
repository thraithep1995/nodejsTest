const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello world'})
})

app.get('/status', (req, res) => {
    res.send({message: 'Status OK'})
})

app.get('/test', (req, res) => {
    res.send({message: 'This is Test'})
})

app.listen(process.env.PORT || 3000 , () => {console.log('Node JS listening on port 3000')})
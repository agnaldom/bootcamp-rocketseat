const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Agnaldo", "email": "agnaldomarinho7@gmail.com" }

//server.get('/teste', (req, res) => {
server.get('/users/:id', (req, res) => {
    //const name = req.query.name;
    const { id } = req.params;


    return res.json({ message: `Buscando o usuário ${id}` });
})

server.listen(3000);
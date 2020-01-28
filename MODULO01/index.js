const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Agnaldo", "email": "agnaldomarinho7@gmail.com" }

const users = ['Agnaldo', 'Claudio', 'Victor'];

//server.get('/teste', (req, res) => {
server.get('/users/:index', (req, res) => {
    //const name = req.query.name;
    const { index } = req.params;

    return res.json(users[index]);
})

server.listen(3000);
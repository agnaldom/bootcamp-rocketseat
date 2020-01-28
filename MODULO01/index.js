const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Agnaldo", "email": "agnaldomarinho7@gmail.com" }

server.get('/teste', (req, res) => {
    const name = req.query.name;

    return res.json({ message: `Hello ${name}` });
})

server.listen(3000);
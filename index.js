const express = require('express')

const server = express()

//pluigin para entender json

server.use(express.json())

// Query param =?teste=1
// Route params = /users/1
// Request body = { "name": "Felipe" }

const users = ['Felipe', 'Jhosé Carlos', 'Luiz Eduardo', 'Nicolas']


server.get('/users/:index', (req, res) => {

    // const nome = req.query.nome
    const { id, index } = req.params

    return res.json(users[index])
})
server.get('/users', (req, res) => {
    return res.json(users)
})

server.post('/users', (req, res) => {
    const name = req.body.name

    users.push(name)
    
    return res.json(users)
})

server.put('/users/:index', (req, res) => {
    const index = req.params.index;
    const name = req.body.name

    users[index] = name;

    return res.json(users)
})

server.delete("/users/:index", (req, res) => {
    const { index } = req.params;
    
    users.splice(index, 1);
    
	return res.json({ message:  "Deletado com sucesso" });
});

// req sempre antes do res
// não esquecer da / no put ex: /users/:index
// delete tem que ter res.json para retornar respostas

server.listen(3001)
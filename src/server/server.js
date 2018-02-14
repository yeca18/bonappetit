const express = require('express')
const { join } = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '/public/index.html'))
})

app.get('/users/:id', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria'
  }
  res.json({ name: users[req.params.id] })
})

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name })
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})
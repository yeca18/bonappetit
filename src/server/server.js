const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, '..', '..', '/public')))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '/public/index.html'))
})

app.get('/users', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria',
  }
  res.json(users)
})

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name })
})

app.get('/brayan', (req, res) => {
  res.json({ name: 'Brayan', username: 'bingtrav' })
})

app.get('/myselfP/:name/:username', (req, res) => {
  res.json({ name: req.params.name, username: req.params.username })
})

app.get('/myselfQ', (req, res) => {
  res.json({ name: req.query.name, username: req.query.username })
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})

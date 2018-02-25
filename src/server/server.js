const express = require('express')
const { join } = require('path')

const dishes = require('../../sample-dishes')

const app = express()

app.use(express.static(join(__dirname, '..', '..', '/public')))

// Importante: las rutas del API que devuelven informacion van de primero que la que devuelve el html
app.get('/api/dishes', (req, res) => {
  res.json(dishes)
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '/public/index.html'))
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})

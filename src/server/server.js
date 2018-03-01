<<<<<<< HEAD
const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

app.get('/users/:id', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria',
  };
  res.json({ name: users[req.params.id] });
});

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name });
});

app.get('/yeca/:name', (req, res) => {
  const users = {
    name: 'Yessica',
  };
  res.json({ name: 'Mi nombre es Yessica' });
});

=======
const express = require('express')
const { join } = require('path')

const dishes = require('../../sample-dishes')

const app = express()
>>>>>>> upstream/master

app.use(express.static(join(__dirname, '..', '..', '/public')))

// Importante: las rutas del API que devuelven informacion van de primero que la que devuelve el html
app.get('/api/dishes', (req, res) => {
  res.json(dishes)
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '/public/index.html'))
})

app.listen(3005, () => {
<<<<<<< HEAD
  console.log('Server running on port 3005');
});
=======
  console.log('Server running on port 3005')
})
>>>>>>> upstream/master

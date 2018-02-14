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


app.listen(3005, () => {
  console.log('Server running on port 3005');
});

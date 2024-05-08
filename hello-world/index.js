const express = require('express');
const jugador = require('../3-jugador/jugador')
const app = express();

app.get('/', (req, res) => res.send('Hello Mundo!'));

app.get('/jugadores', (req, res) => res.status(202).send(jugador.lala()));


app.listen(3000, () => (console.log('Server running on port 3000')));

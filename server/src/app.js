const express = require('express');
const allRoutes = require('./routes/index');
const server = express();

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use('/rickandmorty', allRoutes);

server.get('/', (req, res) => {
   res.send("hola mundo")
})

module.exports = server;
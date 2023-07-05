const server = require('./app');

server.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`);
});
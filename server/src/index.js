const http = require('http');
const data = require('./utils/data');

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').pop();
        const character = data.find((ch) => ch.id === parseInt(id));
        if (character) {
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(character));
        }
        return
    }
}).listen(PORT, console.log(`http://localhost:${PORT}`));
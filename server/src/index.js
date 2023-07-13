const server = require('./app');
const { sequelize } = require('./models/db');
require('dotenv').config()
const {NODE_PORT} = process.env;

async function main(params) {
   try {
      await sequelize.sync();
      server.listen(NODE_PORT, () => {
         console.log(`http://localhost:${NODE_PORT}`);
      });
   } catch (error) {
      console.error(error);
   } 
}
main();
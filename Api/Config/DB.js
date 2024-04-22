const { Pool } = require('pg');
require('dotenv').config();


const BancoConfig = {
  user:'USUARIO POSTGRES',
  password: 'SENHA DO SEU BANCO',
  host: 'IP DO SEU BANCO',
  database: 'DATABASE',
  port: 5432,
};

const pool = new Pool(BancoConfig);

module.exports = pool;
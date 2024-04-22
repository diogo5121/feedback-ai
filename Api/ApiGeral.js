const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const InserirFeedBack = require('./Service/InsertFeedback');
const ConsultarFeedbacks = require('./Service/ConsultarFeedbacks');
const FazerIA = require('./Service/ia');



const app = express();
const port = 5050
const ipAddress = 'localhost'

app.use(cors())

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({ status: 'Aplicação funcionando!' });
});

app.post('/api/feedbacks', (req, res) => {
  const {name, comentario, rate} = req.body;
  InserirFeedBack(name, comentario, rate ,res)
});

app.post('/api/ia', (req, res) => {
  const {json} = req.body;
  FazerIA(json, res)
});

app.get('/api/feedbacks', (req, res) => {
  const {} = req.body;
  ConsultarFeedbacks(res)
});


app.listen(port, ipAddress, () => {
  console.log(`Servidor rodando em http://${ipAddress}:${port}`);
});
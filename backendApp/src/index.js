const express = require('express');
const cors = require('cors');
const ServiceBooks = require('./service/service');

const app = express();
const port = 3000;

// response data created
app.use(express.json())

const service = new ServiceBooks();

// allow connection this origin
const whiteList = ['http://localhost:8100'];
app.use(cors({origin: [whiteList]}));

// start app
app.get('/books', async (req, res) => {
  res.status(200).json(await service.getAllBooks());
});

app.get('/books/title=:title', async (req, res) => {
  const title = req.params.title;
  res.status(200).json(await service.getOneBook(title));
});

app.get('/books/delete/title=:id', async (req, res) => {
  const title = req.params.id;
  res.status(200).json(await service.deleteBook(title));
})

app.post('/books/create', async (req, res) => {
  const data = req.body;
  res.status(201).json(await service.createBook(data))
})

app.listen(port, () => {
  console.log('Im running port ' + port);
})
const express = require("express");
const {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("./modules/books/book.js");
const middleware = require("./middlewares/generator-uuid.js");

const app = express();
const bodyParser = require("body-parser");
const port = 3500;

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/book", middleware, (req, res) => {
  const result = createBook(req.body);
  res.status(200).send(result);
});

app.get("/book", (req, res) => {
  const result = getBooks();
  res.status(200).send(result);
});

app.get("/book/:id", (req, res) => {
  const result = getBook(req.params);
  res.status(200).send(result);
});

app.put("/book/:id", (req, res) => {
  const result = updateBook(req.params, req.body);
  res.status(200).send(result);
});
app.delete("/book/:id", (req, res) => {
  const result = deleteBook(req.params);
  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

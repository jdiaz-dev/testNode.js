const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const bookRoutes = require("./modules/books/books.routes.js");
const port = 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
     - id
        - title
        - description
        - createdAt
*/

const books = [];

const createBook = ({ id, title, description }) => {
  const data = { id, title, description };
  books.push(data);
  return data;
};

const getBooks = () => {
  return books;
};

const getBook = ({ id }) => {
  const res = books.find((book) => book.id === id);
  return res;
};

const updateBook = ({ id }, { title, description }) => {
  const index = books.findIndex((book) => book.id === id);
  books[index].title = title;
  books[index].description = description;
  return books[index];
};

const deleteBook = ({ id }) => {
  const index = books.findIndex((book) => book.id === id);
  const res = books.splice(index, 1);
  return res;
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};

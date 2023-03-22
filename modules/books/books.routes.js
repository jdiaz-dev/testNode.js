const { Router } = require("express");
const {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("./books.controller");
const middleware = require("../../middlewares/generator-uuid");

const router = Router();

router.post("/", middleware, (req, res) => {
    const result = createBook(req.body);
  res.status(200).send(result);
});

router.get("/", (req, res) => {
  const result = getBooks();
  res.status(200).send(result);
});

router.get("/:id", (req, res) => {
  const result = getBook(req.params.id);
  res.status(200).send(result);
});

router.put("/:id", (req, res) => {
  const result = updateBook(req.params.id, req.body);
  res.status(200).send(result);
});
router.delete("/:id", (req, res) => {
  const result = deleteBook(req.params.id);
  res.status(200).send(result);
});

module.exports = router;

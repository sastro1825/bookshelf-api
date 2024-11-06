const express = require('express');
const handler = require('../handlers/handler');

const router = express.Router();

router.post('/books', handler.addBook);
router.get('/books', handler.getAllBooks);
router.get('/books/:bookId', handler.getBookById);
router.put('/books/:bookId', handler.updateBook);
router.delete('/books/:bookId', handler.deleteBook);

module.exports = router;

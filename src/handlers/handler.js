import * as Book from '../models/book.js';

const addBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const newBook = Book.addBook({ name, year, author, summary, publisher, pageCount, readPage, reading });
  
  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: { bookId: newBook.id },
  }).code(201);
};

const getAllBooksHandler = (request, h) => {
  const books = Book.getAllBooks();
  
  return h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  }).code(200);
};

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = Book.getBookById(bookId);

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: {
      book,
    },
  }).code(200);
};

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const updatedBook = Book.updateBook(bookId, { name, year, author, summary, publisher, pageCount, readPage, reading });

  if (!updatedBook) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

const deleteBookHandler = (request, h) => {
  const { bookId } = request.params;
  const result = Book.deleteBook(bookId);

  if (!result.success) {
    return h.response({
      status: 'fail',
      message: result.message,
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: result.message,
  }).code(200);
};

export { addBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookHandler, deleteBookHandler };

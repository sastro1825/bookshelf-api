let books = [];

const addBook = ({ name, year, author, summary, publisher, pageCount, readPage, reading }) => {
  const finished = pageCount === readPage;
  const newBook = {
    id: Date.now().toString(),
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  books.push(newBook);
  return newBook;
};

const getAllBooks = () => books;

const getBookById = (id) => books.find((book) => book.id === id);

const updateBook = (id, { name, year, author, summary, publisher, pageCount, readPage, reading }) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;

  const finished = pageCount === readPage;
  books[index] = {
    ...books[index], // Mempertahankan data `insertedAt` sebelumnya
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt: new Date().toISOString(),
  };
  return books[index];
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return { success: false, message: 'Buku gagal dihapus. Id tidak ditemukan' };
  }

  books.splice(index, 1);
  return { success: true, message: 'Buku berhasil dihapus' };
};

export { addBook, getAllBooks, getBookById, updateBook, deleteBook };

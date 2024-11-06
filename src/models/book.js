let books = [];

const addBook = ({ name, year, author, summary, publisher, pageCount, readPage, reading }) => {
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
    finished: pageCount === readPage,
  };
  books.push(newBook);
  return newBook;
};

const getAllBooks = () => books;

const getBookById = (id) => books.find((book) => book.id === id);

const updateBook = (id, { name, year, author, summary, publisher, pageCount, readPage, reading }) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;

  books[index] = { id, name, year, author, summary, publisher, pageCount, readPage, reading, finished: pageCount === readPage };
  return books[index];
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};

export default { addBook, getAllBooks, getBookById, updateBook, deleteBook };

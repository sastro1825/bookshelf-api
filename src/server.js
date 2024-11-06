import Hapi from '@hapi/hapi';
import { addBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookHandler, deleteBookHandler } from './handlers/handler.js';

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route({
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  });

  server.route({
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  });

  server.route({
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  });

  server.route({
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  });

  server.route({
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();

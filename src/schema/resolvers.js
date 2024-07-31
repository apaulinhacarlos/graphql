const connection = require("../utils/dbConfig");

const resolvers = {
  Query: {
    getBooks: async () => {
      // aqui vai a implementação do código
      const [books] = await connection.execute("SELECT * FROM livros");
      return books;
    },

    getBookById: async (parent, args, contextValue, info) => {
      console.log("parent", parent, "arg", args, "contextValue", contextValue, "info", info)
      const [[book]] = await connection.execute('SELECT * FROM livros WHERE id = ?', [args.id]);
      return book;
    },

    getBookByAuthor: async (_parent, args, _contextValue, _info) => {
      const [books] = await connection.execute('SELECT * FROM livros');
      const booksByAuthor = books.filter((book) => book.autor.toLowerCase().includes(args.autor))
      return booksByAuthor
    },

    getBookByGenre: async (_parent, args, _contextValue, _info) => {
      const [books] = await connection.execute('SELECT * FROM livros');
      const booksByGenre = books.filter((book) => book.genero.toLowerCase().includes(args.genero))
      return booksByGenre
    }
  },
};

module.exports = resolvers;


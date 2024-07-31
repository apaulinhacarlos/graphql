const bookType = `#graphql

  # tipo do dado que eu quero
  type Book {
    id: Int!
    titulo: String
    genero: String
    autor: String
  }

  # Query é um tipo especial que tem as consultas, ou os métodos, ou as funções que posso realizar
  type Query {
    getBooks: [Book],
    getBookById(id: String!): Book,
    getBookByAuthor(autor: String!): [Book],
    getBookByGenre(genero: String!): [Book]
  }
`;

module.exports = bookType;
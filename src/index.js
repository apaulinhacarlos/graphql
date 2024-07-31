// Importando o ApolloServer, startStandaloneServer de dentro da lib.
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
 
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs, // definições de tipo
  resolvers // resolvedor - ele sabe como vai devolver nossos dados
});

const main = async () => {
  const { url } = await startStandaloneServer(server)
  console.log(`Ouvindo na porta ${url}`);
}

main();
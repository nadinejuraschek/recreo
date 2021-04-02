// DEPENDENCIES
import { GraphQLServer } from 'graphql-yoga';

// Type Definitions
const typeDefs = `
  type Query {
    email: String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    email() {
      return 'user@test.com'
    }
  }
};

// SERVER
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('The server is up!');
});

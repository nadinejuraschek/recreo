// DEPENDENCIES
import { GraphQLServer } from 'graphql-yoga';
import db from './db.js';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Playground from './resolvers/Playground';
import Review from './resolvers/Review';

// SERVER
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Playground,
    Review,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log('The server is up!');
});

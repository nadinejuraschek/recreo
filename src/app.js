// DEPENDENCIES
import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db.js';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Playground from './resolvers/Playground';
import Review from './resolvers/Review';

// SUBSCRIPTIONS
const pubsub = new PubSub();

// SERVER
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Playground,
    Review,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log('The server is up!');
});

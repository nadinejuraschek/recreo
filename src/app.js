// DEPENDENCIES
import { GraphQLServer } from 'graphql-yoga';

// Type Definitions
const typeDefs = `
  type Query {
    user: User!
    playground: Playground!
    review: Review!
    geometry: Geometry!
  }

  type User {
    email: String!
    id: ID!
    username: String!
  }

  type Playground {
    title: String!
    image: String!
    geometry: Geometry!
    price: Float
    description: String!
    location: String!
    author: User!
    reviews: [Review!]
  }

  type Review {
    body: String!
    rating: Float!
    author: User!
  }

  type Geometry {
    type: String!
    coordinates: [Float!]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    user() {
      return {
        email: 'user@test.com',
        id: '123456',
        username: 'user'
      }
    },
    playground() {
      return {
        title: 'Playground Name',
        image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
        geometry: {
          type: 'Point',
          coordinates: [
            -121.2930079,
            38.891565
          ]
        },
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Roseville, CA',
        author: {
          email: 'author@test.com',
          id: '123456',
          username: 'author'
        },
        reviews: [
          {
            body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
            rating: 3.8,
            author: {
              email: 'author@test.com',
              id: '123456',
              username: 'author'
            },
          }
        ]
      }
    },
    review() {
      return {
            body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
            rating: 3.8,
            author: {
              email: 'author@test.com',
              id: '123456',
              username: 'author'
            }
          }
    },
    geometry() {
      return {
        type: 'Point',
        coordinates: [
          -121.2930079,
          38.891565
        ]
      }
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

// DEPENDENCIES
import { GraphQLServer } from 'graphql-yoga';

const users = [
  {
    email: 'user@test.com',
    id: '1',
    username: 'user'
  },
  {
    email: 'newuser@test.com',
    id: '2',
    username: 'newuser'
  },
  {
    email: 'neweruser@test.com',
    id: '3',
    username: 'neweruser'
  }
];

const playgrounds = [
  {
    id: "p1",
    title: "Playground #1",
    image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    geometry: {
      type: "Point",
      coordinates: [
        -121.2930079,
        38.891565
      ]
    },
    price: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: "Roseville, CA",
    author: "2",
  },
  {
    id: "p2",
    title: "Playground #2",
    image: "https://images.unsplash.com/photo-1593103916129-87e179a70c1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    geometry: {
      type: "Point",
      coordinates: [-106.6630437, 35.2327544]
    },
    price: 0,
    description: "In tellus integer feugiat scelerisque varius. Sed id semper risus in hendrerit gravida rutrum quisque non. ",
    location: "Auburn, CA",
    author: "3",
  },
  {
    id: "p3",
    title: "Playground #3",
    image: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    geometry: {
      type: "Point",
      coordinates: [-118.1058333, 34.09611110000001]
    },
    price: 0,
    description: "Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Ac tincidunt vitae semper quis lectus nulla at volutpat.",
    location: "Rocklin, CA",
    author: "3",
  }
];

// Type Definitions
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    playgrounds(query: String): [Playground!]!
    review: Review!
    geometry: Geometry!
  }

  type User {
    id: ID!
    email: String!
    username: String!
    playgrounds: [Playground!]!
    reviews: [Review!]!
  }

  type Playground {
    id: ID!
    title: String!
    image: String!
    geometry: Geometry!
    price: Float
    description: String!
    location: String!
    author: User!
    reviews: [Review!]!
  }

  type Review {
    id: ID!
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
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter(user => {
        return user.username.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    playgrounds(parent, args, ctx, info) {
      if (!args.query) {
        return playgrounds;
      }

      return playgrounds.filter(playground => {
        return playground.title.toLowerCase().includes(args.query.toLowerCase()) || playground.location.toLowerCase().includes(args.query.toLowerCase());
      });
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

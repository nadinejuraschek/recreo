// DEPENDENCIES
import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

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
    name: "Playground #1",
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
    author: "2"
  },
  {
    id: "p2",
    name: "Playground #2",
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
    name: "Playground #3",
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

const reviews = [
  {
    id: "r1",
    body: "Pharetra sit amet aliquam id diam maecenas ultricies. Amet risus nullam eget felis eget nunc lobortis. Volutpat blandit aliquam etiam erat velit. Amet nulla facilisi morbi tempus. Semper eget duis at tellus at urna.",
    rating: 3.8,
    author: "1",
    playground: "p1"
  },
  {
    id: "r2",
    body: "Sit amet dictum sit amet justo donec enim diam. Amet justo donec enim diam. Ornare arcu odio ut sem nulla pharetra diam sit. Orci porta non pulvinar neque laoreet.",
    rating: 4.6,
    author: "1",
    playground: "p2"
  },
  {
    id: "r3",
    body: "Id volutpat lacus laoreet non curabitur gravida. In egestas erat imperdiet sed euismod. Suscipit adipiscing bibendum est ultricies integer quis.",
    rating: 2.4,
    author: "2",
    playground: "p3"
  }
];

// Type Definitions
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    playgrounds(query: String): [Playground!]!
    reviews(query: String): [Review!]!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    createPlayground(data: CreatePlaygroundInput): Playground!
    createReview(data: CreateReviewInput): Review!
  }

  input CreateUserInput {
    email: String!
    username: String!
  }

  input CreatePlaygroundInput {
    name: String!
    image: String
    price: Float
    description: String!
    location: String!
    author: ID!
  }

  input CreateReviewInput {
    body: String!
    rating: Float!
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
    name: String!
    image: String
    geometry: Geometry
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
    playground: Playground!
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
        return playground.name.toLowerCase().includes(args.query.toLowerCase()) || playground.location.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    reviews(parent, args, ctx, info) {
      if (!args.query) {
        return reviews;
      }

      return reviews.filter(review => {
        return review.body.toLowerCase().includes(args.query.toLowerCase());
      });
    }
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const userTaken = users.some(user => user.email === data.args.email || user.username === data.args.username);

      if (userTaken) {
        throw new Error('User already exists.');
      };

      const user = {
        id: uuidv4(),
        ...data.args,
      };

      users.push(user);

      return user;
    },
    createPlayground(parent, args, ctx, info) {
      const userExists = users.some(user => user.id === args.data.author);
      const playgroundExists = playgrounds.some(playground => playground.name === args.data.name);

      if (!userExists) {
        throw new Error('User not found.');
      }
      if (playgroundExists) {
        throw new Error('Playground already exists.');
      }

      const playground = {
        id: uuidv4(),
        ...args.data,
      };

      playgrounds.push(playground);

      return playground;
    },
    createReview(parent, args, ctx, info) {
      const userExists = users.some(user => user.id === args.data.author.id);
      const playgroundExists = playgrounds.some(playground => playground.id === args.data.playground.id);

      if (!userExists) {
        throw new Error('User not found.');
      }
      if (!playgroundExists) {
        throw new Error('Playground not found.');
      }

      const review = {
        id: uuidv4(),
        ...args.data,
      };

      reviews.push(review);

      return review;
    }
  },
  User: {
    playgrounds(parent, args, ctx, info) {
      return playgrounds.filter(playground => {
        return playground.author === parent.id;
      });
    },
    reviews(parent, args, ctx, info) {
      return reviews.filter(review => {
        return review.author === parent.id;
      });
    }
  },
  Playground: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    reviews(parent, args, ctx, info) {
      return reviews.filter(review => {
        return review.playground === parent.id;
      });
    }
  },
  Review: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    playground(parent, args, ctx, info) {
      return playgrounds.find(playground => {
        return playground.id === parent.playground;
      });
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

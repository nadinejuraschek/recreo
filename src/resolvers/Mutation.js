// DEPENDENCIES
import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const userTaken = db.users.some(user => user.email === data.args.email || user.username === data.args.username);

    if (userTaken) {
      throw new Error('User already exists.');
    };

    const user = {
      id: uuidv4(),
      ...data.args,
    };

    db.users.push(user);

    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex(user => user.id === args.id);

    if (userIndex === -1) {
      throw new Error('User not found.');
    }

    const deletedUsers = db.users.splice(userIndex, 1);

    db.playgrounds = db.playgrounds.filter(playground => {
      const match = playground.author === args.id;

      if (match) {
        db.reviews = db.reviews.filter(review => review.playground !== playground.id)
      }

      return !match;
    });

    db.reviews = db.reviews.filter(review => review.author !== args.id);

    return deletedUsers[0];
  },
  updateUser(parent, args, { db }, info) {
    const user = db.users.find(user => user.id === args.id);

    if (!user) {
      throw new Error('User not found.');
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some(user => user.email === data.email);

      if (emailTaken) {
        throw new Error('E-Mail already in use.');
      }

      user.email = data.email;
    }

    if (typeof data.username === 'string') {
      const usernameTaken = db.users.some(user => user.username === data.username);

      if (usernameTaken) {
        throw new Error('Username already exists.');
      }

      user.username = data.username;
    }

    return user;
  },
  createPlayground(parent, args, { db, pubsub }, info) {
    const userExists = db.users.some(user => user.id === args.data.author);
    const playgroundExists = db.playgrounds.some(playground => playground.name === args.data.name);

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

    db.playgrounds.push(playground);
    pubsub.publish('PLAYGROUND', {
      playground: {
        mutation: "CREATED",
        data: playground,
      },
    });

    return playground;
  },
  deletePlayground(parent, args, { db, pubsub }, info) {
    const playgroundIndex = db.playgrounds.findIndex(playground => playground.id === args.id);

    if (playgroundIndex === -1) {
      throw new Error('Playground not found.');
    }

    const [playground] = db.playgrounds.splice(playgroundIndex, 1);

    db.reviews = db.reviews.filter(review => review.playground !== args.id);
    pubsub.publish('PLAYGROUND', {
      playground: {
        mutation: 'DELETED',
        data: playground,
      },
    });

    return playground;
  },
  updatePlayground(parent, args, { db }, info) {
    const playground = db.playgrounds.find(playground => playground.id === args.id);

    if (!playground) {
      throw new Error('Playground not found.');
    }

    if (typeof data.name === 'string') {
      const nameTaken = db.playgrounds.some(playground => playground.name === data.name);

      if (nameTaken) {
        throw new Error('Playground already exists.');
      }

      playground.name = data.name;
    }

    if (typeof data.image === 'string') {
      playground.image = data.image;
    }

    if (typeof data.price === 'number') {
      playground.price = data.price;
    }

    if (typeof data.description === 'string') {
      playground.description = data.description;
    }

    if (typeof data.location === 'string') {
      playground.location = data.location;
    }

    pubsub.publish('PLAYGROUND', {
      playground: {
        mutation: 'UPDATED',
        data: playground,
      },
    });

    return playground;
  },
  createReview(parent, args, { db, pubsub }, info) {
    const userExists = db.users.some(user => user.id === args.data.author);
    const playgroundExists = db.playgrounds.some(playground => playground.id === args.data.playground);

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

    db.reviews.push(review);
    pubsub.publish(`REVIEW FOR ${args.data.playground}`, {
      review: {
        mutation: 'CREATED',
        data: review,
      }
    });

    return review;
  },
  deleteReview(parent, args, { db, pubsub }, info) {
    const reviewIndex = db.reviews.findIndex(review => review.id === args.id);

    if (reviewIndex === -1) {
      throw new Error('Review not found.');
    }

    const [review] = db.reviews.splice(reviewIndex, 1);
    pubsub.publish(`REVIEW FOR ${args.data.playground}`, {
      review: {
        mutation: 'DELETED',
        data: review,
      }
    });

    return review;
  },
  updateReview(parent, args, { db, pubsub }, info) {
    const review = db.reviews.find(review => review.id === args.id);

    if (!review) {
      throw new Error('Review not found.');
    }

    if (typeof data.body === 'string') {
      review.body = data.body;
    }

    if (typeof data.rating === 'number') {
      review.rating = data.rating;
    }

    pubsub.publish(`REVIEW FOR ${args.data.playground}`, {
      review: {
        mutation: 'UPDATED',
        data: review,
      }
    });

    return review;
  },
};

export default Mutation;

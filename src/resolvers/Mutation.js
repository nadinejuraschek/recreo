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
  createPlayground(parent, args, { db }, info) {
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

    return playground;
  },
  deletePlayground(parent, args, { db }, info) {
    const playgroundIndex = db.playgrounds.findIndex(playground => playground.id === args.id);

    if (playgroundIndex === -1) {
      throw new Error('Playground not found.');
    }

    const deletedPlaygrounds = db.playgrounds.splice(playgroundIndex, 1);

    db.reviews = db.reviews.filter(review => review.playground !== args.id);

    return deletedPlaygrounds[0];
  },
  createReview(parent, args, { db }, info) {
    const userExists = db.users.some(user => user.id === args.data.author.id);
    const playgroundExists = db.playgrounds.some(playground => playground.id === args.data.playground.id);

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

    return review;
  },
  deleteReview(parent, args, { db }, info) {
    const reviewIndex = db.reviews.findIndex(review => review.id === args.id);

    if (reviewIndex === -1) {
      throw new Error('Review not found.');
    }

    const deletedReviews = db.reviews.splice(reviewIndex, 1);

    return deletedReviews[0];
  }
};

export default Mutation;

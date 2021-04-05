const Subscription = {
  playground: {
    subscribe(parent, { authorId }, { db, pubsub }, info) {
      const userExists = db.users.find(user => user.id === authorId);

      if (!userExists) {
        throw new Error('User not found.');
      }

      return pubsub.asyncIterator(`PLAYGROUND BY ${authorId}`);
    }
  },
  review: {
    subscribe(parent, { playgroundId }, { db, pubsub }, info) {
      const playgroundExists = db.playgrounds.find(playground => playground.id === playgroundId);

      if (!playgroundExists) {
        throw new Error('Playground not found.');
      }

      return pubsub.asyncIterator(`REVIEW FOR ${playgroundId}`);
    }
  }
}

export default Subscription;

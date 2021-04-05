const Subscription = {
  playground: {
    subscribe(parent, args, { db, pubsub }, info) {
      return pubsub.asyncIterator('PLAYGROUND');
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

const Subscription = {
  review: {
    subscribe(parent, { playgroundId }, { db, pubsub }, info) {
      const playgroundExists = db.playgrounds.find(playground => playground.id === playgroundId);

      if (!playgroundExists) {
        throw new Error('Playground not found.');
      }

      return pubsub.asyncIterator(`REVIEW #${playgroundId}`);
    }
  }
}

export default Subscription;

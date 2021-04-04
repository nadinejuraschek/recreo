const User = {
  playgrounds(parent, args, { db }, info) {
    return db.playgrounds.filter(playground => {
      return playground.author === parent.id;
    });
  },
  reviews(parent, args, { db }, info) {
    return db.reviews.filter(review => {
      return review.author === parent.id;
    });
  }
};

export default User;

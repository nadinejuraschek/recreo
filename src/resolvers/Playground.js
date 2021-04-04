const Playground = {
  author(parent, args, { db }, info) {
    return db.users.find(user => {
      return user.id === parent.author;
    });
  },
  reviews(parent, args, { db }, info) {
    return db.reviews.filter(review => {
      return review.playground === parent.id;
    });
  }
};

export default Playground;

const Review = {
  author(parent, args, { db }, info) {
    return db.users.find(user => {
      return user.id === parent.author;
    });
  },
  playground(parent, args, { db }, info) {
    return db.playgrounds.find(playground => {
      return playground.id === parent.playground;
    });
  }
};

export default Review;

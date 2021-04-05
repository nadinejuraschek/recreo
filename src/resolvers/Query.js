const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter(user => {
      return user.username.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  playgrounds(parent, args, { db }, info) {
    if (!args.query) {
      return db.playgrounds;
    }

    return db.playgrounds.filter(playground => {
      return playground.name.toLowerCase().includes(args.query.toLowerCase()) || playground.location.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  reviews(parent, args, { db }, info) {
    if (!args.query) {
      return db.reviews;
    }

    return db.reviews.filter(review => {
      return review.body.toLowerCase().includes(args.query.toLowerCase());
    });
  }
};

export default Query;

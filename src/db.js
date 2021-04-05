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

const db = { users, playgrounds, reviews };

export default db;

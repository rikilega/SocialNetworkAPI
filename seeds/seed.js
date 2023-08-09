const mongoose = require('mongoose');
const User = require('./models/User');
const Thought = require('./models/Thought');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: 'john_does',
    email: 'johns@example.com',
  },
  {
    username: 'john_does1',
    email: 'john1@example.com',
  },
  {
    username: 'john_doe2',
    email: 'john2@example.com',
  },
  {
    username: 'john_doe3',
    email: 'john3@example.com',
  },
  {
    username: 'john_doe4',
    email: 'john4@example.com',
  },
  {
    username: 'john_doe5',
    email: 'john5@example.com',
  }
];

const thoughtSeed = [
    {
        thoughtText: 'This is a thought about social networking.',
        username: 'john_doe',
        reactions: [
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'This is a reaction to the thought.',
            username: 'john_doe3',
            createdAt: new Date(),
          },
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'Another reaction to the thought.',
            username: 'john_doe2',
            createdAt: new Date(),
          }
        ],
        createdAt: new Date(),
    },
    {
        thoughtText: 'This is a thought about social networking.',
        username: 'john_doe4',
        reactions: [
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'This is a reaction to the thought.',
            username: 'john_doe3',
            createdAt: new Date(),
          },
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'Another reaction to the thought.',
            username: 'john_doe2',
            createdAt: new Date(),
          }
        ],
        createdAt: new Date(),
    },
    {
        thoughtText: 'This is a thought about social networking.',
        username: 'john_doe5',
        reactions: [
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'This is a reaction to the thought.',
            username: 'jane_doe',
            createdAt: new Date(),
          },
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: 'Another reaction to the thought.',
            username: 'john_doe2',
            createdAt: new Date(),
          }
        ],
        createdAt: new Date(),
    },

];

User.deleteMany({})
  .then(() => User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' user records inserted!');
    return Thought.deleteMany({});
  })
  .then(() => Thought.collection.insertMany(thoughtSeed))
  .then((data) => {
    console.log(data.result.n + ' thought records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

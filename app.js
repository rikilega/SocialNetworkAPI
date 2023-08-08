const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.get('/', (req, res) => {
  res.send('Social Network API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

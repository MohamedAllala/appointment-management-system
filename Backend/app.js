const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/appointment-manager');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api/v1', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

import express from 'express';
import path from 'path';

import stations from './routes/stations';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/poi_app')
  .then(() => console.log('connected to the db'))
  .catch(err => console.log(err));

const app = express();

app.use('/stations', stations);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => console.log('Running on localhost:3000...'));

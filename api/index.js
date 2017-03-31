import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Routes
import stations from './routes/stations';

const app = express();

app.use(morgan('dev'));

app.use('/stations', stations);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/poi_app')
  .then(() => {
    app.listen(3333, () => {
      console.log('API Server is listening on port 3333....');
    });
  })
  .catch(err => console.log(err));
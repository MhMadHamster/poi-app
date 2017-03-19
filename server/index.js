import express from 'express';
import path from 'path';

const app = express();

app.get('/*', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => console.log('Running on localhost:3000...'));

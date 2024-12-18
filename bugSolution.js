const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
  try {
    const result = await doSomethingAsync();
    res.send(result);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return { message: 'Success' };
}
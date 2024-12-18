const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  doSomethingAsync().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing
    console.error(error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return { message: 'Success' };
}
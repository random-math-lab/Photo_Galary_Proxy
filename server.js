const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static( './lib/' ) );

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './') + 'client/index.html');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
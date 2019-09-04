const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static( './client/' ));

//respond with the html file.
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/lib/index.html'))
// });

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './') + 'client/index.html');
});

// app.get('/api/photo/:id', (req, res) => {
//   axios.get(`http://localhost:3002/api/photo/:id`)
//   .then((data) => {
//     res.status(200).send(data.data)
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).send(err);
//   });
// });


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
const express = require('express');

const cors = require('cors'); 

const bodyParser = require('body-parser');

const port = 3000; 



const app = express(); 

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);

app.listen(port, () => console.log(`server running at port ${port}`));

app.use('/users', require('./api/routes/users'));
app.use('/notes', require('./api/routes/notes'));

app.get('/', (req, res) => {
  console.log('Welcome, you are accessing the API')
  res.status(200).json({msg: 'Welcome, you are accessing the API'})
} )

module.exports = app;
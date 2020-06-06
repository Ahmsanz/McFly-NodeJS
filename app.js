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
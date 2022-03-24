
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
console.log(`Server listening on port ${port}!`)
})
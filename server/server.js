const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000 

const app = express()

app.get('/peeps', (req, res) => {
  res.send('Get peeps')
})

app.listen(port, () => console.log(`Server started on port ${port}`))





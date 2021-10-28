require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send(`
    <h1>Web 47 rocks!</h1>
  `)
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
// first start
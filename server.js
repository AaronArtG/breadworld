const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//midleware
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)

//ROUTES

app.get('/',(req, res) => {
    res.send('welcome to an awesome app about bread')

})
// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })

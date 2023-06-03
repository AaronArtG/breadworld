const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//midleware
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//ROUTES

app.get('/',(req, res) => {
    res.send('welcome to an awesome app about bread')

})
// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })

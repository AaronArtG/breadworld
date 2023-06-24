const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// CONFIGURATION
require('dotenv').config()

app.get('/', (req,res) =>{
    res.send('Welcome to an Awesome Bread App')
})


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use(methodOverride('_method'))

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

//BAKERS
const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

const PORT = process.env.PORT || 3003
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to : ', process.env.MONGO_URI)}
    )
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

app.listen(process.env.PORT)

// const express = require('express')
// const app = express()
// const methodOverride = require('method-override')
// const mongoose =require('mongoose')

// //configuration:
// require('dotenv').config()
// const PORT = process.env.PORT
// console.log(PORT)

// //routes:
// app.get('/', (req, res) => {
//     res.send('Welcome to the World of Bread!')
// })

// mongoose.connect(process.env.MONGO_URI, 
//     {useNewUrlParser: true, useUnifiedTopology: true},()=>{
//         console.log('Connected to MongoDB:', process.env.MONGO_URI)
// })

  
// // Breads/middleware:
// app.set('views', __dirname + '/views')
// app.use(methodOverride('_method'))
// app.use(express.static('public'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())


// // bread
// const breadsController = require('./controllers/breads_controller.js')
// app.use('/breads', breadsController)

// // bakers
// const bakersController = require('./controllers/bakers_controller.js')
// app.use('/bakers', bakersController)


// // 404 Page
// app.get('*', (req, res) => {
//     res.send('404')
//   })
  


// //Adding Comment Checking Git

// app.listen(PORT, ()=> {
//     console.log('listening on port: ', PORT)
// })
// // https://digitalskills.instructure.com/courses/9255/pages/code-along-be-3-server-side-views-and-rendering-with-jsx?module_item_id=1307340#
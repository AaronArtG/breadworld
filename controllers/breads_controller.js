const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread
    })
//   res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })

// CREATE
breads.post('/', express.urlencoded({ extended: true }),(req, res) => {
  // console.log(req.body)
  if(!req.body.image){
    req.body.image = 
    'https://plus.unsplash.com/premium_photo-1674939148553-9ca55be9b037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.push(req.body)
  res.redirect("/breads")
})



module.exports = breads


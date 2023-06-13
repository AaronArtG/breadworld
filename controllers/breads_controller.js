const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  Bread.find().then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
        })
   })
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('edit', {
      bread: foundBread
    })
 })
})

// SHOW
breads.get('/:id', (req, res) => {
 
   Bread.findById(req.params.id)
   .then(foundBread => {
     res.render('show', {
      bread: foundBread
        })
   }).catch(err => {
     res.send('<h1>This is not the page you should be on</h1>')
   })
    })


// CREATE
breads.post('/', express.urlencoded({ extended: true }),(req, res) => {
  // console.log(req.body)
  if(!req.body.image){
    req.body.image = undefined
    
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.create(req.body)
  res.redirect("/breads")
})


// DELETE
breads.delete('/:id', (req, res) => {
 Bread.findByIdAndDelete(req.params.id)
 .then(deletedBread => {
   res.status(303).redirect('/breads')
 })
})

// UPDATE
breads.put('/:id', 
express.urlencoded({ extended: true }),
 (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
.then(updatedBread => {
  console.log(updatedBread)
  res.redirect(`/breads/${req.params.id}`)
})
})



module.exports = breads


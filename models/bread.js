// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://plus.unsplash.com/premium_photo-1674939148553-9ca55be9b037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'  },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

//helper methods
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by 
  ${this.baker.name}, who joined our team on 
  ${this.baker.startDate.getFullYear()}`
}

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread


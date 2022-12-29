const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  imageUrl: String,
  quantity: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['electronics', 'clothing', 'furniture', 'other']
  }
})

module.exports = mongoose.model('Product', productSchema)
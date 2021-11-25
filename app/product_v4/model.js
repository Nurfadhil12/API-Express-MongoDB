const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  // Model attributes are defined here
  name: {
    type: String,
    required: [true,'field nama harus ada'],
    minlength: 3,
    maxlength: 50
    // allowNull defaults to true
  },
  price: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
    // allowNull defaults to true
  },
  image_url: {
    type: String,
    // allowNull defaults to true
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
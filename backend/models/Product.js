// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, default: '-' },
  company: { type: String, required: true },
  price: { type: Number, required: true },
  reviews: { type: Number, default: 0 },
  description: { type: String },
  images: [{ type: String }],  // Array of image URLs
  category: { type: String, required: true },     // e.g., Fashion, Electronics
  subcategory: { type: String, required: true },  // e.g., Men, Mobiles
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

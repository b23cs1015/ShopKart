const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async(req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if(!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
  } catch(err) {
    res.status(500).json({ message: 'Server error' })
  }
})


// Add a new product
router.post('/', async (req, res) => {
  try {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
} catch (err) {
  res.status(400).json({ message: 'Error saving product' })
}
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  const products = await Product.getAll();
  res.render('products', { products });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.getById(id);
  res.render('product', { product });
});

router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  await Product.create(name, description, price, imageUrl);
  res.redirect('/products');
});

module.exports = router;
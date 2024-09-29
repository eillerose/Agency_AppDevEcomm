const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/cart', (req, res) => {
  res.render('cart');
});

router.get('/checkout', (req, res) => {
  res.render('checkout');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/home', async (req, res) => {
    if (req.session.userId) {
      res.render('home');
    } else {
      res.redirect('/users');
    }
  });

module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  const users = await User.getAll();
  res.render('users', { users });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.getById(id);
  res.render('user', { user });
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  await User.create(name, email, password);
  res.redirect('/users');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getByEmail(email);
  if (user && user.password === password) {
    req.session.userId = user.id;
    res.redirect('/users');
  } else {
    res.render('users', { error: 'Invalid email or password' });
  }
});

module.exports = router;
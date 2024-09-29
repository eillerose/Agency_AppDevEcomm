const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce'
});

// View engine setup
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(9000, ()=>{
    console.log('initialized to http://localhost:9000/');
});
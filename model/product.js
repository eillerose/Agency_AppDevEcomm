const db = require('./db');

class Product {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM products');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(name, description, price, imageUrl) {
    await db.execute('INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)', [name, description, price, imageUrl]);
  }
}

module.exports = Product;
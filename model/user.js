const db = require('./db');

class User {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(name, email, password) {
    await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
  }
}

module.exports = User;
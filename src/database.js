'use strict';

const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor() {
        this.db = new sqlite3.Database(':memory:');
    }

    initialize() {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, streak INTEGER)`);
                resolve();
            });
        });
    }

    addUser(name, streak) {
        return new Promise((resolve, reject) => {
            const stmt = this.db.prepare(`INSERT INTO users (name, streak) VALUES (?, ?)`);
            stmt.run(name, streak, function(err) {
                if (err) reject(err);
                resolve(this.lastID);
            });
            stmt.finalize();
        });
    }

    getUserById(id) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
                if (err) reject(err);
                resolve(row);
            });
        });
    }

    close() {
        this.db.close();
    }
}

module.exports = Database;

const db = require('pg');
const Promise = require('bluebird');
const DATABASE_URL = require('../config/config');

db.defaults.ssl = true;
// db.defaults.poolSize = 10;

function AsyncClient(client) {
  this.client = client;
  this.query = this.query.bind(this);
  this.end = this.end.bind(this);
}

AsyncClient.prototype.query = function query(sql, ...args) {
  return new Promise((resolve, reject) => {
    if (args.length) {
      this.client.query(sql, args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      this.client.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};

AsyncClient.prototype.end = function end() {
  this.client.end();
};

db.connect = (connect => callback => new Promise((resolve, reject) => {
  connect.call(db, DATABASE_URL, (err, client, done) => {
    if (err) {
      if (client) {
        done(client);
      }
      reject(err);
    } else {
      callback(new AsyncClient(client)).then(() => {
        done();
        resolve();
      }).catch(error => {
        done(client);
        reject(error);
      });
    }
  });
}))(db.connect);

module.exports = db;

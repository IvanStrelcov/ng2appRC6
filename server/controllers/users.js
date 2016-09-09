'use strict';

const async = require('asyncawait/async');
const await = require('asyncawait/await');
const db = require('../core/dbPromise');

class Users {
  static getUsers(req, res, next) {
    if(req.query.name) {
      Users.getSomeUsers(req, res, next);
    } else {
      db.connect(async( ({query}) => {
        const result = await(query('SELECT * FROM users'));
        res.json(result.rows);
      })).catch(next);
    }
  }
  static getSomeUsers(req, res, next) {
    const queryString = `SELECT * FROM USERS WHERE LOWER(users.user_name) SIMILAR TO LOWER('%${req.query.name}%')`;
    db.connect(async( ({query}) => {
        const result = await(query(queryString));
        res.json(result.rows);
      })).catch(next);
  }
  static getUser(req, res, next){
    const queryString = `SELECT * FROM USERS as u WHERE u.user_id = ${req.params.id}`;
    db.connect(async( ({query}) => {
      const result = await(query(queryString));
      res.json(result.rows);
    })).catch(next);
  }
  static editUser(req, res, next) {
    db.connect(async( ({query}) => {
      const queryString = `INSERT INTO users(image, company_position, user_name, phone, company_adress, company) VALUES('${req.body.image}', '${req.body.company_position}', '${req.body.user_name}', ${req.body.phone}, '${req.body.company_adress}', '${req.body.company}')`;
      const result = await(query(queryString));
      res.json(result.rows);
    })).catch(next);
  }
  static deleteUser(req, res, next) {
    db.connect(async(({query}) => {
      const queryString = `DELETE FROM USERS WHERE user_id = ${req.params.id}`;
      const result = await(query(queryString));
      res.json(result.rows);
    })).catch(next);
  }
}

module.exports = Users;

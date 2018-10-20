var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */

app.get('/user', (req, res) => {

  // console.log(User.findAll())
  User.findAll()
    .then((data) => {
      const users = []
      for (let i = 0; i < data.length; i++) {
        users.push(data[i].username)
        console.log(data[i].username)
      }
      res.send(users)
    })
})

module.exports = {
  app: app,
  User: User
};

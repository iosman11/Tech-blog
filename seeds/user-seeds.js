const { User } = require('../models');

const userData = [
    {
      username: 'Idil',
      password: 'password'
    },
    {
      username: 'harry',
      password: 'password2'
    },
    {
      username: 'Amy',
      password: 'password3'
    }
  ]

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;
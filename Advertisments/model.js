const Sequelize = require('sequelize')
const db = require('../db')

const Ads = db.define(
  'Ads',
  {
    title: Sequelize.STRING,
    picture: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    email: Sequelize.STRING,
    phone: Sequelize.INTEGER,
  }, {
    timeStamps: false
  }
)

module.exports = Ads
const Sequelize = require('sequelize')
const db = require('../db')

const Adds = db.define(
  'advertisments', {
    title: {type: Sequelize.STRING },
    description: {type: Sequelize.STRING },
    picture: {type: Sequelize.STRING },
    price: {type: Sequelize.FLOAT},
    email: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING},
    phone: {type: Sequelize.INTEGER},
  })
  
  module.exports = Adds
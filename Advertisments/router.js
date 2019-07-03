const { Router} = require('express')
const Adds = require('./model')

const router = new Router()

router.get(
  '/adds/', (req, res, next) => {
    Adds
    .findAll()
    .then(adds => {
      res
      .status(200)
      .send(adds)
    })
    .catch(err => 
      res.send(next(err))
      )
  }
)


module.exports = router

router.get(
  '/adds/:id',
  (req, res, next) => {
    const id = req.params.id

    Adds
      .findByPk(id)
      .then(add =>
        res
          .status(200)
          .send(add)
      )
      .catch(err =>
        res.send(next(err))
      )
  }
)
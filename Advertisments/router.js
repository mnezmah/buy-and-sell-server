const { Router } = require('express')
const Ads = require('./model')

const router = new Router()

router.get(
  '/ads/', (req, res, next) => {
    Ads
      .findAll()
      .then(ads => {
        res
          .status(200)
          .send(ads)
      })
      .catch(err =>
        res.send(next(err))
      )
  }
)


router.get(
  '/ads/:id',
  (req, res, next) => {
    const id = req.params.id

    Ads
      .findByPk(id)
      .then(ad =>
        res
          .status(200)
          .send(ad)
      )
      .catch(err =>
        res.send(next(err))
      )
  }
)

router.post('/ads', (req, res, next) => {
  Ads
    .create(req.body)
    .then(newAd => {
      res
        .status(201)
        .send(newAd)
    }).catch(next)
})


router.put('/ads/:id', (req, res, next) => {
  const id = req.params.id

  Ads
  .findByPk(id)
  .then(ad => {
    ad
    .update(req.body)
    .then(updatedAd => 
      res
      .status(202)
      .send(updatedAd)
      ).catch(next)
  })
})

module.exports = router
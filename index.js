const express = require('express')
const AdsRouter = require('./Advertisments/router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express() //this is an API server

const jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)
app.use(AdsRouter)

const port = process.env.PORT || 4200
app.listen(port, () => console.log(`listening on port ${port}`))
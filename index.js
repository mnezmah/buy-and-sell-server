const express = require('express')
const AddsRouter = require('./Advertisments/router')
const cors = require('cors')

const app = express() //this is an API server

app.use(cors())
app.use(AddsRouter)

const port = process.env.PORT || 4200
app.listen(port, () => console.log(`listening on port ${port}`))
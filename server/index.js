/* eslint-disable no-console */
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const app = express()

// MONGODB_CONNECTION
// const db = 'mongodb://127.0.0.1:27017/stunning-shanghai'
const dbSrv = "mongodb+srv://classicUser:classicPassword@stunning-shanghai-cluster-qvbit.mongodb.net/test?retryWrites=true&w=majority"
const srvOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Stunning_shanghai"
}

mongoose
  .connect(
    dbSrv,
    srvOptions
  )
  .then(() => console.log('Connected to mongoDB Atlas cluster on ' + srvOptions.dbName))
  .catch((error) => console.log(error) )

const config = require('../nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// ALLOW BODY PARSING
app.use(express.json())

// Debugging
app.use(morgan('dev'))

// const apiRoutes = require('./routes/api-routes')
// app.use('/api', apiRoutes)

// IMPORT ROUTES
const postRoutes = require('./routes/post')
const experienceRoutes = require('./routes/experience')

//  USE ROUTES
app.use('/api/posts', postRoutes)
app.use('/api/experiences', experienceRoutes)

// NUXT MAGIC
const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(port, host)
console.log('Server is listening on ' + host + ':' + port)

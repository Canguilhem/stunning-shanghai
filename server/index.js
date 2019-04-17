/* eslint-disable no-console */
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const app = express()

// MONGODB_CONNECTION
const db = 'mongodb://127.0.0.1:27017/stunning-shanghai'

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to ' + db))
  .catch(() => console.log('Failed to connected to ' + db))

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

//  USE ROUTES
app.use('/api/posts', postRoutes)

// Handling routes errors
// app.use((req, res, next) => {
//   const error = new Error('Endpoint not found')
//   error.status = 404
//   next(error)
// })

// app.use((error, req, res, next) => {
//   res.status(error.status || 500)
//   res.send({
//     error: { message: error.message, status: error.status }
//   })
// })

// NUXT MAGIC
const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(port, host)
console.log('Server is listening on ' + host + ':' + port)

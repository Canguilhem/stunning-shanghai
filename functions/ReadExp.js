const mongoose = require('mongoose')
const db = require('./server')
const { Experience, validate } = require('./ExpModel')
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const experiences = await Experience.find(),
          response = {
            msg: "Experiences successfully found",
            data: experiences
          }  
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}
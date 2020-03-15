const mongoose = require('mongoose')
const db = require('./server')
const { Experience } = require('./ExpModel')
const { Formation } = require('./FormModel')
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const experiences = await Experience.find().sort('-from'),
    formations = await Formation.find().sort('-from'),
          response = {
            msg: "Experiences successfully found",
            experiences,
            formations
          }  
          console.log("found something")
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
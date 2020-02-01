// import mongoose from 'mongoose'
// import db from './server'
// import Post from './PostModel'

const mongoose = require('mongoose')
const db = require('./server')
const { Post, validate } = require('./PostModel')


exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    // Parse the ID
    const data = JSON.parse(JSON.parse(event.body)),
          id = data.id,
          post = data.post,
          response = {
            msg: "Product successfully updated",
            data: post
          }
    
    // Use Product.Model and id to update 
    await Post.findOneAndUpdate({_id: id}, post)
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('product.update', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}
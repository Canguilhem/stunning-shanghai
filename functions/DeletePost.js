// import mongoose from 'mongoose'
// import db from './server'
// import Post from './PostModel'

const mongoose = require('mongoose')
const db = require('./server')
const Post = require('./PostModel')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Parse the ID
    const id = JSON.parse(event.body),
          response = {
            msg: "Product successfully deleted"
          }
    
    // Use Product.Model to delete 
    await Post.findOneAndDelete({ _id: id })
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('product.delete', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}
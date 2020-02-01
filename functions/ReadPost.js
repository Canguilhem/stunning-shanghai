import mongoose from 'mongoose'
import db from './server'
import Post from './PostModel'
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const posts = await Post.find(),
          response = {
            msg: "Posts successfully found",
            data: posts
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
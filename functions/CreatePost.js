import mongoose from 'mongoose'
import db from './server'
import Post from './PostModel'

exports.handler = async(event, context) => {
    context.callbackWaitsForEmptyLoop = false
    try {
        const data = JSON.parse(event.body),
            title = data.title,
            thumbnail = data.thumbnail,
            content = data.content,
            photoDescription = data.photoDescription,
            tags = data.tags,
            post = {
               title,
               thumbnail,
               content,
               photoDescription,
               tags 
            },
            response = {
                msg: "Post succesfully created",
                data: post
            }
        await Post.create(post)
        return {
            statusCode: 201,
            body: JSON.stringify(response)
        }
    } catch (error) {
      console.log('post.create',error)
      return {
        statusCode: 500,
        body: JSON.stringify({msg:error.message})
      }  
    }
}
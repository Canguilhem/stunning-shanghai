const Joi = require('joi')
const mongoose = require('mongoose')

// Define Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  thumbnail: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 15
  },
  photoDescription: {
    type: String,
    required: true,
    minlength: 15
  },
  tags: {
    type: [String],
    enum: ['food', 'city', 'shopping', 'technology']
  }
})

// Compile Schema to class Model
const Post = mongoose.model('Post', postSchema)

function validatePost(post) {
  const schema = {
    title: Joi.string()
      .min(3)
      .max(50)
      .required(),
    thumbnail: Joi.string().required(),
    content: Joi.string()
      .min(15)
      .required(),
    photoDescription: Joi.string()
      .min(15)
      .required(),
    tags: Joi.array().allow(['food', 'city', 'shopping', 'technology'])
  }
  return Joi.validate(post, schema)
}

exports.Post = Post
exports.validate = validatePost

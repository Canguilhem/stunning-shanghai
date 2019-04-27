/* eslint-disable no-console */
const express = require('express')
const { Post, validate } = require('../models/postSchema')
const router = express.Router()

// GET
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort('name')
    res.send(posts)
  } catch (err) {
    console.log(err.meassage)
  }
})

// GET LookUp>404
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post)
      return res.status(404).send(`Post with id: ${req.params.id} not found`)
    res.send(post)
  } catch (error) {
    console.log(error.meassage)
  }
})

// POST Validate_Input>400 -> Construct Object -> Post -> return posted object
router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.message)

  let post = new Post({
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    content: req.body.content,
    photoDescription: req.body.photoDescription,
    tags: req.body.tags
  })
  post = await post.save()
  res.status(201).send(post)
})

// PUT LookUp>404 -> Validate>400 -> Update -> Return updated object
router.put('/:id', async (req, res) => {
  try {
    // Validate Req.body
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error)
    // UPDATE FIRST METHOD:
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        content: req.body.content,
        photoDescription: req.body.photoDescription,
        tags: req.body.tags
      },
      { new: true, useFindAndModify: false }
    )
    if (!post)
      return res.status(404).send(`Post with id: ${req.params.id} not found`)
    res.send(post)
  } catch (error) {
    console.log(error.message)
  }
})

// Delete LookUp>404 -> Delete -> Return deleted object
router.delete('/:id', async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id, {
    useFindAndModify: false
  })
  if (!post)
    return res.status(404).send(`Post with id: ${req.params.id} not found`)
  res.send(post)
})

module.exports = router

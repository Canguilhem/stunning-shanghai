const express = require('express')
const { Experience, validate } = require('../models/experienceSchema')
const router = express.Router()

// GET
router.get('/', async (req, res) => {
    try {
      const posts = await Experience.find().sort('-from')
      res.send(posts)
    } catch (err) {
      console.log(err.message)
    }
})

// POST Validate_Input>400 -> Construct Object -> Post -> return posted object
router.post('/', async (req, res) => {
    try {
      const { error } = validate(req.body)
      if (error) return res.status(400).send(error.message)
      let experience = new Experience({
        isInternship: req.body.isInternship,
        position: req.body.position,
        from: req.body.from,
        to: req.body.to,
        description: req.body.description,
        duration: req.body.duration,
        hostOrganism: req.body.hostOrganism,
        place: req.body.place,
        activities: req.body.activities,
        link: req.body.link
      })
      experience = await experience.save()
      res.status(201).send(experience)
    } catch (error) {
      console.log(error)
    }
})

// PUT LookUp>404 -> Validate>400 -> Update -> Return updated object
router.put('/:id', async (req, res) => {
    try {
      // Validate Req.body
      const { error } = validate(req.body)
      if (error) return res.status(400).send(error)
      // UPDATE FIRST METHOD:
      const experience = await Experience.findByIdAndUpdate(
        req.params.id,
        {
            isInternship: req.body.isInternship,
            position: req.body.position,
            from: req.body.from,
            to: req.body.to,
            duration: req.body.duration,
            hostOrganism: req.body.hostOrganism,
            place: req.body.place,
            activities: req.body.activities,
            description: req.body.description,
            link: req.body.link
        },
        { new: true, useFindAndModify: false }
      )
      if (!experience)
        return res.status(404).send(`Experience with id: ${req.params.id} not found`)
      res.send(experience)
    } catch (error) {
      console.log(error.message)
    }
  })

  // Delete LookUp>404 -> Delete -> Return deleted object
router.delete('/:id', async (req, res) => {
    const experience = await Experience.findByIdAndRemove(req.params.id, {
      useFindAndModify: false
    })
    if (!experience)
      return res.status(404).send(`Experience with id: ${req.params.id} not found`)
    res.send({
      msg:'Experience deleted',
      data:experience
    })
})
  
module.exports = router

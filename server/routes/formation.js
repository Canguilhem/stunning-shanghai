const express = require('express')
const { Formation, validate } = require('../models/formationSchema')
const router = express.Router()

// GET
router.get('/', async (req, res) => {
    try {
      const formation = await Formation.find().sort('-from')
      res.send(formation)
    } catch (err) {
      console.log(err.message)
    }
})

// POST Validate_Input>400 -> Construct Object -> Post -> return posted object
router.post('/', async (req, res) => {
    try {
      const { error } = validate(req.body)
      if (error) return res.status(400).send(error.message)
      let formation = new Formation({
        institution: req.body.institution,
        degree: req.body.degree,
        fom: req.body.from,
        to: req.body.to,
        courseList: req.body.courseList,
      })
      formation = await formation.save()
      res.status(201).send(formation)
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
      const formation = await Formation.findByIdAndUpdate(
        req.params.id,
        {
            institution: req.body.institution,
            degree: req.body.degree,
            fom: req.body.from,
            to: req.body.to,
            courseList: req.body.courseList,
        },
        { new: true, useFindAndModify: false }
      )
      if (!formation)
        return res.status(404).send(`Formation with id: ${req.params.id} not found`)
      res.send(formation)
    } catch (error) {
      console.log(error.message)
    }
  })

  // Delete LookUp>404 -> Delete -> Return deleted object
router.delete('/:id', async (req, res) => {
    const formation = await Formation.findByIdAndRemove(req.params.id, {
      useFindAndModify: false
    })
    if (!formation)
      return res.status(404).send(`Formation with id: ${req.params.id} not found`)
    res.send({
      msg:'Formation deleted',
      data:formation
    })
})
  
module.exports = router

const Joi = require('joi')
const mongoose = require('mongoose')

const formationSchema = new mongoose.Schema({
    institution: { type: String },
    degree: { type: String },
    fom: { type: Date },
    to: { type: Date },
    courseList: { type: Array }
})
const Formation = mongoose.model('Formation', formationSchema)

function validateFormation(formation) {
    const schema = {
        institution: Joi.string().min(5).required(),
        degree: Joi.string().min(5).required(),
        from: Joi.date(),
        to: Joi.date(),
        courseList: Joi.array()
    }
    return Joi.validate(formation, schema)
  }
  
  exports.Formation = Formation
  exports.validate = validateFormation
  
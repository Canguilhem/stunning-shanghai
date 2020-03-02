const Joi = require('joi')
const mongoose = require('mongoose')

const formationSchema = new mongoose.Schema({
    institution: { type: String },
    courseList: { type: String },
    duration: { type: String },
    startDate: { type: Date },
    degree: { type: String },
    place: { type: String },
    endDate: { type: Date },
    // description: { type: String },
})
const Formation = mongoose.model('Formation', formationSchema)

function validateFormation(formation) {
    const schema = {
        degree: Joi.string().min(5).required(),
        plcae: Joi.string().min(5).required(),
        duration: Joi.string().min(5).required(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        institution: Joi.string().min(5).required(),
        description: Joi.string().min(5).required(),
        courseList: Joi.string().min(5).required()
    }
    return Joi.validate(formation, schema)
  }
  
  exports.Formation = Formation
  exports.validate = validateFormation
  
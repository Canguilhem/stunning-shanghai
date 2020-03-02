const Joi = require('joi')
const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    position: { type: String },
    isInternship: { type: Boolean },
    from: { type: Date },
    to: { type: Date },
    duration: { type: Number },
    hostOrganism: { type: String },
    place: { type: String },
    description: { type: String },
    activities: { type: [String] },
    link:{ type: String }
})
const Experience = mongoose.model('Experience', experienceSchema)

function validateExperience(experience) {
    const schema = {
        position: Joi.string().min(5).required(),
        isInternship: Joi.boolean().required(),
        duration: Joi.number().required(),
        from: Joi.date(),
        to: Joi.date(),
        hostOrganism: Joi.string().min(5).required(),
        place: Joi.string().min(5).required(),
        description: Joi.string().min(5).required(),
        activities: Joi.array().required(),
        link: Joi.string().min(5).required(),
    }
    return Joi.validate(experience, schema)
  }
  
  exports.Experience = Experience
  exports.validate = validateExperience
  
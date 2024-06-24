const Joi = require('joi');

const taskSchema = Joi.object({
  id: Joi.number(),
  title: Joi.string().required().messages({
    'string.empty': 'Title is required'
  }),
  description: Joi.string().allow(null),
  completed: Joi.boolean()
});

module.exports = taskSchema;

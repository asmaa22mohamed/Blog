const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.body = !isEmpty(data.body) ? data.body : '';

  if (!Validator.isLength(data.title, { min: 4, max: 20 })) {
    errors.title = 'Title of Post must be between 4 and 20 characters';
  }

  if (!Validator.isLength(data.body, { min: 10, max: 300 })) {
    errors.body = 'Body Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }
  if (Validator.isEmpty(data.title)) {
    errors.text = 'Body field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

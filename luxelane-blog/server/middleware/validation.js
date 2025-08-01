// validation.js - Input validation middleware using express-validator

const { body, param, validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors.array().map(err => ({
        field: err.path,
        message: err.msg,
        value: err.value
      }))
    });
  }
  next();
};

// Validation rules for creating a post
const validateCreatePost = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot be more than 100 characters'),
  
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required'),
  
  body('excerpt')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Excerpt cannot be more than 200 characters'),
  
  body('category')
    .notEmpty()
    .withMessage('Category is required')
    .isMongoId()
    .withMessage('Invalid category ID'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .isString()
    .withMessage('Each tag must be a string'),
  
  body('featuredImage')
    .optional()
    .isURL()
    .withMessage('Featured image must be a valid URL'),
  
  handleValidationErrors
];

// Validation rules for updating a post
const validateUpdatePost = [
  param('id')
    .isMongoId()
    .withMessage('Invalid post ID'),
  
  body('title')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Title cannot be empty')
    .isLength({ max: 100 })
    .withMessage('Title cannot be more than 100 characters'),
  
  body('content')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Content cannot be empty'),
  
  body('excerpt')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Excerpt cannot be more than 200 characters'),
  
  body('category')
    .optional()
    .isMongoId()
    .withMessage('Invalid category ID'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .isString()
    .withMessage('Each tag must be a string'),
  
  body('featuredImage')
    .optional()
    .isURL()
    .withMessage('Featured image must be a valid URL'),
  
  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be a boolean'),
  
  handleValidationErrors
];

// Validation rules for post ID parameter
const validatePostId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid post ID'),
  
  handleValidationErrors
];

// Validation rules for creating a category
const validateCreateCategory = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Category name is required')
    .isLength({ max: 50 })
    .withMessage('Category name cannot be more than 50 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Description cannot be more than 200 characters'),
  
  body('color')
    .optional()
    .matches(/^#[0-9A-F]{6}$/i)
    .withMessage('Color must be a valid hex color code'),
  
  body('icon')
    .optional()
    .isString()
    .withMessage('Icon must be a string'),
  
  handleValidationErrors
];

// Validation rules for category ID parameter
const validateCategoryId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid category ID'),
  
  handleValidationErrors
];

// Validation rules for adding a comment
const validateAddComment = [
  param('id')
    .isMongoId()
    .withMessage('Invalid post ID'),
  
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Comment content is required')
    .isLength({ max: 1000 })
    .withMessage('Comment cannot be more than 1000 characters'),
  
  handleValidationErrors
];

module.exports = {
  validateCreatePost,
  validateUpdatePost,
  validatePostId,
  validateCreateCategory,
  validateCategoryId,
  validateAddComment,
  handleValidationErrors
}; 
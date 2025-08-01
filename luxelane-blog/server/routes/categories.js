// categories.js - Routes for blog categories

const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { validateCreateCategory, validateCategoryId } = require('../middleware/validation');
const { ApiError } = require('../middleware/errorHandler');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    
    res.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
    });
  }
});

// Get a single category by ID or slug
router.get('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    
    // Check if it's a valid ObjectId
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(idOrSlug);
    
    let category;
    if (isObjectId) {
      category = await Category.findById(idOrSlug);
    } else {
      category = await Category.findOne({ slug: idOrSlug });
    }
    
    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found',
      });
    }
    
    res.json({
      success: true,
      category,
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category',
    });
  }
});

// Create a new category
router.post('/', validateCreateCategory, async (req, res, next) => {
  try {
    const { name, description, color, icon } = req.body;
    
    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      throw new ApiError('Category with this name already exists', 400);
    }
    
    const category = new Category({
      name,
      description,
      color,
      icon,
    });
    
    await category.save();
    
    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 
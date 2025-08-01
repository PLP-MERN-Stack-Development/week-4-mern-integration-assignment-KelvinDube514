// posts.js - Routes for blog posts

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Category = require('../models/Category');
const User = require('../models/User');
const { auth, authorize } = require('../middleware/auth');
const { 
  validateCreatePost, 
  validateUpdatePost, 
  validatePostId, 
  validateAddComment 
} = require('../middleware/validation');
const { ApiError } = require('../middleware/errorHandler');

// Get all posts with pagination, search, and filtering
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      search, 
      author, 
      tags,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query = { isPublished: true };
    
    // Category filter
    if (category) {
      query.category = category;
    }
    
    // Author filter
    if (author) {
      const authorUser = await User.findOne({ username: author });
      if (authorUser) {
        query.author = authorUser._id;
      }
    }
    
    // Tags filter
    if (tags) {
      const tagArray = tags.split(',').map(tag => tag.trim());
      query.tags = { $in: tagArray };
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    // Sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    // Get posts with populated author and category
    const posts = await Post.find(query)
      .populate('author', 'firstName lastName username avatar')
      .populate('category', 'name color icon')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));
    
    // Get total count for pagination
    const total = await Post.countDocuments(query);
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      success: true,
      posts,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalPosts: total,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      filters: {
        search,
        category,
        author,
        tags,
        sortBy,
        sortOrder
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch posts',
    });
  }
});

// Get a single post by ID or slug
router.get('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    
    // Check if it's a valid ObjectId
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(idOrSlug);
    
    let post;
    if (isObjectId) {
      post = await Post.findById(idOrSlug)
        .populate('author', 'firstName lastName username avatar bio')
        .populate('category', 'name color icon description')
        .populate('comments.user', 'firstName lastName username avatar');
    } else {
      post = await Post.findOne({ slug: idOrSlug })
        .populate('author', 'firstName lastName username avatar bio')
        .populate('category', 'name color icon description')
        .populate('comments.user', 'firstName lastName username avatar');
    }
    
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
      });
    }
    
    // Increment view count
    await post.incrementViewCount();
    
    res.json({
      success: true,
      post,
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch post',
    });
  }
});

// Search posts
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Search query is required',
      });
    }
    
    const posts = await Post.find({
      isPublished: true,
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } },
        { excerpt: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q, 'i')] } },
      ],
    })
      .populate('author', 'firstName lastName username avatar')
      .populate('category', 'name color icon')
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({
      success: true,
      posts,
      query: q,
    });
  } catch (error) {
    console.error('Error searching posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search posts',
    });
  }
});

// Create a new post (protected route)
router.post('/', auth, authorize('author', 'admin'), validateCreatePost, async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, featuredImage } = req.body;
    
    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      throw new ApiError('Category not found', 400);
    }
    
    // Create post with authenticated user as author
    const post = new Post({
      title,
      content,
      excerpt,
      category,
      tags: tags || [],
      featuredImage,
      author: req.user._id,
      isPublished: true,
    });
    
    await post.save();
    
    // Populate author and category
    await post.populate('author', 'firstName lastName username avatar');
    await post.populate('category', 'name color icon');
    
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
});

// Update an existing post (protected route)
router.put('/:id', auth, validateUpdatePost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // Check if post exists
    const post = await Post.findById(id);
    if (!post) {
      throw new ApiError('Post not found', 404);
    }
    
    // If category is being updated, check if it exists
    if (updateData.category) {
      const categoryExists = await Category.findById(updateData.category);
      if (!categoryExists) {
        throw new ApiError('Category not found', 400);
      }
    }
    
    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    )
      .populate('author', 'firstName lastName username avatar')
      .populate('category', 'name color icon');
    
    res.json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a blog post (protected route)
router.delete('/:id', auth, authorize('author', 'admin'), validatePostId, async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Check if post exists
    const post = await Post.findById(id);
    if (!post) {
      throw new ApiError('Post not found', 404);
    }
    
    // Delete the post
    await Post.findByIdAndDelete(id);
    
    res.json({
      success: true,
      message: 'Post deleted successfully',
    });
  } catch (error) {
    next(error);
  }
});

// Add comment to a post (protected route)
router.post('/:id/comments', auth, validateAddComment, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    
    const post = await Post.findById(id);
    if (!post) {
      throw new ApiError('Post not found', 404);
    }
    
    // For now, using a default user - in real app, get from auth middleware
    const defaultUser = await User.findOne();
    
    await post.addComment(defaultUser._id, content);
    
    // Populate the new comment
    await post.populate('comments.user', 'firstName lastName username avatar');
    
    res.json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 
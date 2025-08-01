// schemas.js - Data schemas and type definitions for the blog application

// Post schema
export const POST_SCHEMA = {
  _id: String,
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200
  },
  content: {
    type: String,
    required: true,
    minLength: 10
  },
  excerpt: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  slug: {
    type: String,
    required: false
  },
  readTime: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
};

// Category schema
export const CATEGORY_SCHEMA = {
  _id: String,
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  description: {
    type: String,
    required: false,
    maxLength: 200
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  color: {
    type: String,
    default: '#6366f1'
  },
  postCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
};

// User schema
export const USER_SCHEMA = {
  _id: String,
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  avatar: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    maxLength: 500
  },
  role: {
    type: String,
    enum: ['user', 'author', 'admin'],
    default: 'user'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  posts: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
};

// Comment schema
export const COMMENT_SCHEMA = {
  _id: String,
  postId: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000
  },
  parentId: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    default: 0
  },
  replies: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
};

// API Response schemas
export const API_RESPONSE_SCHEMA = {
  success: Boolean,
  message: String,
  data: Object,
  error: String,
  pagination: {
    page: Number,
    limit: Number,
    total: Number,
    totalPages: Number
  }
};

// Form data schemas
export const CREATE_POST_FORM_SCHEMA = {
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200
  },
  content: {
    type: String,
    required: true,
    minLength: 10
  },
  excerpt: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500
  },
  category: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: false
  },
  tags: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
};

export const LOGIN_FORM_SCHEMA = {
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }
};

export const REGISTER_FORM_SCHEMA = {
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  confirmPassword: {
    type: String,
    required: true
  }
};

// Validation functions
export const validateSchema = (data, schema) => {
  const errors = {};

  Object.keys(schema).forEach(field => {
    const fieldSchema = schema[field];
    const value = data[field];

    // Required validation
    if (fieldSchema.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field} is required`;
      return;
    }

    // Skip other validations if field is empty and not required
    if (!value || value.toString().trim() === '') {
      return;
    }

    // Type validation
    if (fieldSchema.type && typeof value !== fieldSchema.type) {
      errors[field] = `${field} must be a ${fieldSchema.type}`;
    }

    // Min length validation
    if (fieldSchema.minLength && value.length < fieldSchema.minLength) {
      errors[field] = `${field} must be at least ${fieldSchema.minLength} characters`;
    }

    // Max length validation
    if (fieldSchema.maxLength && value.length > fieldSchema.maxLength) {
      errors[field] = `${field} must be no more than ${fieldSchema.maxLength} characters`;
    }

    // Enum validation
    if (fieldSchema.enum && !fieldSchema.enum.includes(value)) {
      errors[field] = `${field} must be one of: ${fieldSchema.enum.join(', ')}`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 
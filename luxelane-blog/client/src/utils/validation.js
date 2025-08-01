import { useState } from 'react';

// validation.js - Form validation utilities for the blog application

// Validation rules
export const VALIDATION_RULES = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 200,
    pattern: /^[a-zA-Z0-9\s\-_.,!?()]+$/
  },
  content: {
    required: true,
    minLength: 10,
    maxLength: 10000
  },
  excerpt: {
    required: true,
    minLength: 10,
    maxLength: 500
  },
  category: {
    required: true
  },
  featuredImage: {
    pattern: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
    required: false
  },
  tags: {
    maxLength: 200,
    pattern: /^[a-zA-Z0-9\s,]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    required: true,
    minLength: 6,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/
  }
};

// Validation error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must be no more than ${max} characters`,
  pattern: 'Invalid format',
  email: 'Please enter a valid email address',
  password: 'Password must contain at least 6 characters with uppercase, lowercase, and number',
  url: 'Please enter a valid URL',
  tags: 'Tags can only contain letters, numbers, spaces, and commas'
};

// Validate a single field
export const validateField = (fieldName, value, rules = VALIDATION_RULES[fieldName]) => {
  if (!rules) return null;

  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    return ERROR_MESSAGES.required;
  }

  // Skip other validations if field is empty and not required
  if (!value || value.trim() === '') {
    return null;
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    return ERROR_MESSAGES.minLength(rules.minLength);
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return ERROR_MESSAGES.maxLength(rules.maxLength);
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return ERROR_MESSAGES.pattern;
  }

  // Special validations
  switch (fieldName) {
    case 'email':
      if (!VALIDATION_RULES.email.pattern.test(value)) {
        return ERROR_MESSAGES.email;
      }
      break;
    case 'password':
      if (!VALIDATION_RULES.password.pattern.test(value)) {
        return ERROR_MESSAGES.password;
      }
      break;
    case 'featuredImage':
      if (value && !VALIDATION_RULES.featuredImage.pattern.test(value)) {
        return ERROR_MESSAGES.url;
      }
      break;
    case 'tags':
      if (value && !VALIDATION_RULES.tags.pattern.test(value)) {
        return ERROR_MESSAGES.tags;
      }
      break;
  }

  return null;
};

// Validate entire form
export const validateForm = (formData, fieldsToValidate = null) => {
  const errors = {};
  const fields = fieldsToValidate || Object.keys(formData);

  fields.forEach(fieldName => {
    const error = validateField(fieldName, formData[fieldName]);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Real-time validation hook
export const useFormValidation = (initialData = {}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    // Validate field on blur
    const error = validateField(fieldName, formData[fieldName]);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error || ''
    }));
  };

  const validateAll = () => {
    const validation = validateForm(formData);
    setErrors(validation.errors);
    return validation.isValid;
  };

  const resetForm = (newData = {}) => {
    setFormData(newData);
    setErrors({});
    setTouched({});
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    resetForm,
    setFormData
  };
};

// Custom validation for specific use cases
export const validatePostData = (postData) => {
  const requiredFields = ['title', 'content', 'excerpt', 'category'];
  const validation = validateForm(postData, requiredFields);
  
  // Additional post-specific validations
  if (postData.tags) {
    const tags = postData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    if (tags.length > 10) {
      validation.errors.tags = 'Maximum 10 tags allowed';
      validation.isValid = false;
    }
  }

  return validation;
};

export const validateUserData = (userData) => {
  const requiredFields = ['name', 'email', 'password'];
  return validateForm(userData, requiredFields);
}; 
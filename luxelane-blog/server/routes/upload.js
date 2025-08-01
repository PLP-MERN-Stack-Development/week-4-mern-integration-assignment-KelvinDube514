// upload.js - Routes for image uploads

const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { upload, handleUploadError } = require('../middleware/upload');

// Upload single image
router.post('/image', auth, upload.single('image'), handleUploadError, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image file provided'
      });
    }

    res.json({
      success: true,
      imageUrl: req.file.path,
      publicId: req.file.filename,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to upload image'
    });
  }
});

// Delete image from Cloudinary
router.delete('/image/:publicId', auth, async (req, res) => {
  try {
    const { publicId } = req.params;
    const { cloudinary } = require('../middleware/upload');
    
    const result = await cloudinary.uploader.destroy(publicId);
    
    if (result.result === 'ok') {
      res.json({
        success: true,
        message: 'Image deleted successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'Failed to delete image'
      });
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete image'
    });
  }
});

module.exports = router; 
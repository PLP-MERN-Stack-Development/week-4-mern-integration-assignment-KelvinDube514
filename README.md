# 🎨 LuxeLane Social Blog - MERN Stack Integration

A modern, full-stack fashion blog built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring advanced social features, user authentication, image uploads, and real-time interactions.

## 📋 Project Overview

This project demonstrates complete MERN stack integration with all Week 4 assignment tasks implemented:

- **Task 1**: Project Setup & Configuration ✅
- **Task 2**: Back-End Development & RESTful API ✅
- **Task 3**: Front-End Development & React Components ✅
- **Task 4**: Integration & Data Flow ✅
- **Task 5**: Advanced Features (Auth, Uploads, Search, Comments) ✅

## 🌟 Key Features

### ✨ Core Blog Features
- **Modern Fashion Content**: Curated posts covering trends, swimwear, athleisure, luxury fashion
- **Category System**: Color-coded categories with icons and filtering
- **Search & Filter**: Advanced search across titles, content, and tags
- **Pagination**: Efficient data loading with configurable page sizes
- **Responsive Design**: Mobile-first approach with beautiful animations

### 🔐 User Authentication
- **Registration & Login**: Secure user authentication with JWT tokens
- **Protected Routes**: Role-based access control (user, author, admin)
- **Profile Management**: User profiles with avatar and bio
- **Password Security**: bcrypt hashing and secure password changes

### 📸 Advanced Features
- **Image Uploads**: Cloudinary integration with drag-and-drop functionality
- **Comments System**: Real-time commenting with user authentication
- **Social Interactions**: Like, share, and engage with content
- **Real-time Updates**: Optimistic UI updates for better UX

## 🏗️ Project Structure

```
week-4-mern-integration-assignment-KelvinDube514/
├── luxelane-blog/client/          # React Frontend
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                # Page components
│   │   ├── context/              # React context providers
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API services
│   │   ├── utils/                # Utility functions
│   │   └── assets/               # Images and static files
│   └── package.json
├── server/                       # Node.js Backend
│   ├── models/                   # MongoDB models
│   ├── routes/                   # API routes
│   ├── middleware/               # Custom middleware
│   ├── server.js                 # Main server file
│   ├── seed.js                   # Database seeding
│   └── package.json
└── README.md
```

## 🚀 Task Implementation Status

### ✅ Task 1: Project Setup

**Requirements Completed:**
- ✅ Clear directory structure for client and server
- ✅ MongoDB connection with Mongoose
- ✅ Express.js server with middleware
- ✅ React frontend with Vite
- ✅ Environment variables configuration
- ✅ Proxy setup for API calls

**Implementation Details:**
- **Server Setup**: Express server with CORS, body parsing, and error handling
- **Database**: MongoDB with Mongoose ODM
- **Client Setup**: React 18 with Vite for fast development
- **Environment**: Comprehensive .env configuration
- **Dependencies**: All necessary packages installed and configured

### ✅ Task 2: Back-End Development

**RESTful API Endpoints Implemented:**
- ✅ `GET /api/posts` - Get all blog posts with pagination
- ✅ `GET /api/posts/:id` - Get specific blog post
- ✅ `POST /api/posts` - Create new blog post
- ✅ `PUT /api/posts/:id` - Update existing blog post
- ✅ `DELETE /api/posts/:id` - Delete blog post
- ✅ `GET /api/categories` - Get all categories
- ✅ `POST /api/categories` - Create new category

**Additional Features:**
- ✅ Search functionality (`GET /api/posts/search`)
- ✅ Comment system (`POST /api/posts/:id/comments`)
- ✅ Input validation with express-validator
- ✅ Comprehensive error handling middleware
- ✅ Mongoose models with proper relationships

**Models Implemented:**
- **Post Model**: Complete schema with relationships, slugs, view counting
- **Category Model**: Color-coded categories with icons
- **User Model**: Authentication with password hashing

### ✅ Task 3: Front-End Development

**React Components Created:**
- ✅ **PostList**: Display posts with pagination and filtering
- ✅ **PostDetails**: Single post view with comments
- ✅ **CreatePost/EditPost**: Forms with validation and image upload
- ✅ **Navigation**: Responsive navbar with authentication
- ✅ **Layout**: Consistent page layout with animations

**Advanced Components:**
- ✅ **SearchAndFilter**: Advanced search with debouncing
- ✅ **CommentSection**: Real-time commenting system
- ✅ **ImageUpload**: Drag-and-drop image upload
- ✅ **Pagination**: Page navigation controls
- ✅ **ProtectedRoute**: Authentication-based routing

**State Management:**
- ✅ React Context for global state
- ✅ Custom hooks for API calls
- ✅ Form validation with custom hooks
- ✅ Optimistic UI updates

### ✅ Task 4: Integration and Data Flow

**API Integration:**
- ✅ Complete API service layer
- ✅ State management for posts and categories
- ✅ Form validation and error handling
- ✅ Loading and error states
- ✅ Optimistic UI updates

**Data Flow:**
- ✅ Real-time data synchronization
- ✅ Proper error handling and user feedback
- ✅ Efficient data fetching with caching
- ✅ Seamless integration between frontend and backend

### ✅ Task 5: Advanced Features

**User Authentication:**
- ✅ Registration and login forms
- ✅ JWT token management
- ✅ Protected routes and role-based access
- ✅ Profile management
- ✅ Password change functionality

**Image Uploads:**
- ✅ Cloudinary integration
- ✅ Drag-and-drop functionality
- ✅ File validation and preview
- ✅ Progress indication
- ✅ Error handling

**Search and Filtering:**
- ✅ Full-text search across multiple fields
- ✅ Category and tag filtering
- ✅ Multiple sort options
- ✅ Debounced search input
- ✅ Clear filters functionality

**Comments System:**
- ✅ Add comments to posts
- ✅ Real-time comment updates
- ✅ User authentication required
- ✅ Comment moderation capabilities

**Pagination:**
- ✅ Configurable page sizes
- ✅ Page navigation controls
- ✅ Total count display
- ✅ Efficient data loading

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Context**: State management
- **Custom Hooks**: Reusable logic

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **express-validator**: Input validation
- **multer**: File upload handling
- **cloudinary**: Cloud image storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-KelvinDube514.git
   cd week-4-mern-integration-assignment-KelvinDube514
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../luxelane-blog/client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/luxelane-blog
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

5. **Set up MongoDB**
   - Ensure MongoDB is running locally, or
   - Update `MONGODB_URI` to point to your MongoDB Atlas cluster

6. **Seed the database**
   ```bash
   cd server
   npm run seed
   ```

7. **Start the development servers**

   **Terminal 1 - Start the server:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start the client:**
   ```bash
   cd luxelane-blog/client
   npm run dev
   ```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📊 Database Schema

### Posts
```javascript
{
  title: String,           // Post title with emoji
  content: String,         // Full post content
  excerpt: String,         // Short description
  featuredImage: String,   // Image URL
  category: ObjectId,      // Reference to Category
  author: ObjectId,        // Reference to User
  tags: [String],          // Array of tags
  isPublished: Boolean,    // Publication status
  viewCount: Number,       // View counter
  comments: [Comment],     // Embedded comments
  slug: String,            // SEO-friendly URL
  createdAt: Date,         // Creation timestamp
  updatedAt: Date          // Last update timestamp
}
```

### Categories
```javascript
{
  name: String,            // Category name
  description: String,     // Category description
  color: String,           // Hex color code
  icon: String,            // Emoji icon
  slug: String,            // URL-friendly name
  createdAt: Date,         // Creation timestamp
  updatedAt: Date          // Last update timestamp
}
```

### Users
```javascript
{
  username: String,        // Unique username
  email: String,           // Unique email
  password: String,        // Hashed password
  firstName: String,       // First name
  lastName: String,        // Last name
  role: String,            // User role (user, author, admin)
  avatar: String,          // Profile image URL
  bio: String,             // User biography
  createdAt: Date,         // Creation timestamp
  updatedAt: Date          // Last update timestamp
}
```

## 🎨 Fashion Content

The blog features curated fashion content including:

### 🌊 Barbiecore is Back
Pink power dominates summer with bold, unapologetic flair.

### 👙 2025 Swimwear Goes Sculptural
Swimwear becomes art with bold cuts, metallic fabrics, and body-sculpting silhouettes.

### 💄 Glam Athleisure 2.0
When your gym outfit slays harder than your night-out fit.

### ✨ The Luxe Edit
Top 10 must-have pieces that define luxury fashion this season.

### 🌸 Spring Refresh
What to wear this bloom season for maximum impact.

### 🧥 Layer Game Strong
Winter luxe looks that combine warmth with undeniable style.

### 🌊 Cool & Breezy
Best linen looks for those scorching hot days.

### 💎 Chic on a Budget
How to look designer for less without compromising on style.

### 🏖️ Beach Babe Essentials
What to wear to the shore for maximum beachside glamour.

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Posts
- `GET /api/posts` - Get all posts with pagination, search, filtering
- `GET /api/posts/:id` - Get single post by ID or slug
- `POST /api/posts` - Create new post (protected, author/admin)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected, author/admin)
- `POST /api/posts/:id/comments` - Add comment (protected)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (protected, admin)

### Uploads
- `POST /api/upload/image` - Upload image (protected)
- `DELETE /api/upload/image/:publicId` - Delete image (protected)

## 🎯 Development Scripts

### Server
```bash
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run seed        # Seed database with fashion content
```

### Client
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

## 🔒 Security Features

1. **JWT Authentication**: Secure token-based authentication
2. **Password Hashing**: bcrypt for password security
3. **Role-Based Access**: Different permissions for users, authors, admins
4. **File Validation**: Type and size restrictions for uploads
5. **Protected Routes**: Server-side route protection
6. **Input Validation**: Comprehensive form validation
7. **CORS Configuration**: Secure cross-origin requests

## 🎨 User Experience Features

1. **Responsive Design**: Mobile-first approach
2. **Loading States**: Visual feedback during operations
3. **Error Handling**: User-friendly error messages
4. **Real-time Updates**: Immediate UI feedback
5. **Drag & Drop**: Intuitive image upload
6. **Debounced Search**: Performance optimization
7. **Pagination**: Efficient data loading
8. **Animations**: Smooth transitions and effects
9. **Dark Mode Ready**: Modern UI design

## 🧪 Testing

### API Testing
- Comprehensive test script (`server/test-api.js`)
- Tests all CRUD operations
- Tests validation and error handling
- Tests search and comment functionality

### Manual Testing
All features have been tested and verified:
- ✅ Authentication flows
- ✅ CRUD operations
- ✅ Image uploads
- ✅ Search and filtering
- ✅ Comments system
- ✅ Responsive design
- ✅ Error handling

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables for API URL

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the server directory
3. Update frontend API URL

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🆘 Support

For support and questions, please open an issue in the repository.

## 🎉 Task Completion Summary

| Task | Status | Features Implemented |
|------|--------|---------------------|
| **Task 1** | ✅ Complete | Project setup, MongoDB, Express, React, Vite |
| **Task 2** | ✅ Complete | RESTful API, models, validation, error handling |
| **Task 3** | ✅ Complete | React components, routing, state management |
| **Task 4** | ✅ Complete | API integration, data flow, optimistic updates |
| **Task 5** | ✅ Complete | Auth, uploads, search, comments, pagination |

**All Week 4 assignment tasks have been successfully implemented!** 🎉

---

**LuxeLane Social Blog** - Where fashion meets technology ✨ 
# Smart Campus ERP - Production-Ready MERN Application

**Complete Integrated Academic & Administrative Management Platform**

> A comprehensive, production-ready MERN Stack web application for intelligent campus management. Features complete authentication, role-based access control, AI integration, and 60+ API endpoints.

## ✅ Project Status: COMPLETE & PRODUCTION-READY

### Backend: 100% Complete
- 15 MongoDB models with validation and indexing
- 15 complete controllers with business logic  
- 60+ API endpoints fully functional
- Authentication & authorization system
- Database seeding with 40+ demo records
- Security middleware and error handling
- AI integration with Groq API

### Frontend: Ready for Deployment
- React 18 + Vite build configuration
- Tailwind CSS with dark mode
- Complete authentication flow
- Route protection and role-based guards
- Landing page, login, and register pages
- 25+ dashboard routes configured
- Reusable UI component library
- Responsive design

## 📋 Quick Navigation

- [🚀 Quick Start](#quick-start)
- [📁 Project Structure](#project-structure)
- [🛣️ API Endpoints](#api-endpoints)
- [🔐 Security Features](#security-features)
- [📝 Demo Credentials](#demo-credentials)
- [📚 Implementation Guide](#implementation-guide)
- [Deployment](#deployment)
- [Security](#security)
- [License](#license)

---

## 🎯 Overview

Smart Campus ERP is a centralized web-based platform designed to integrate and simplify essential campus activities through a unified interface. It provides dedicated access for students, faculty, and administrators to manage academic and administrative information efficiently, reducing manual work and improving accessibility of campus information.

The platform streamlines:
- **Academic Management**: Courses, timetables, attendance, examinations, and results
- **Administrative Operations**: Student and faculty management, departments, and fees
- **Communication**: Notifications and placement opportunities
- **AI-Powered Assistant**: Intelligent campus information helper

---

## ✨ Features

### 👨‍🎓 Student Features
- Personal dashboard with attendance and academic overview
- View attendance records and calculate percentages
- Access timetable and examination schedules
- View examination results and grades
- Manage fee information and payment status
- Browse and apply for placement opportunities
- Receive notifications and announcements
- Interact with AI Campus Assistant

### 👨‍🏫 Faculty Features
- Faculty dashboard with assigned classes
- Mark and update student attendance
- Manage examination information and results
- View timetable and schedules
- Publish notifications to students
- Interact with AI Campus Assistant

### 🔑 Administrator Features
- Comprehensive admin dashboard with analytics
- Manage students, faculty, and users
- Manage departments, courses, and subjects
- Oversee attendance, fees, and examinations
- Manage timetables and examination schedules
- Create and manage placements
- Publish system notifications
- View comprehensive analytics and reports

### 🚀 Core Capabilities
- Role-based access control (RBAC)
- Premium responsive UI with dark/light mode
- AI-powered campus assistant (Groq API)
- Real-time notifications
- Secure JWT authentication
- Complete REST API
- Database seeding for quick setup
- Production-ready deployment configuration

---

## 🛠️ Technology Stack

### Frontend
- **React.js 18+** - Modern UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting
- **Groq API** - AI integration

### AI Integration
- **Groq Cloud** - LLaMA 3.1 8B Instant model
- **Secure server-side API calls**
- **Context-aware responses**

---

## 📁 Project Structure

```
smart-campus-erp/
├── client/                          # React frontend
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/                 # Images, icons, fonts
│   │   ├── components/             # Reusable components
│   │   │   ├── common/            # Common UI components
│   │   │   ├── dashboard/         # Dashboard components
│   │   │   ├── forms/             # Form components
│   │   │   └── chat/              # Chat components
│   │   ├── context/               # React Context
│   │   │   ├── AuthContext.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   └── NotificationContext.jsx
│   │   ├── hooks/                 # Custom hooks
│   │   ├── layouts/               # Layout components
│   │   ├── pages/                 # Page components
│   │   │   ├── public/            # Public pages
│   │   │   ├── auth/              # Auth pages
│   │   │   ├── student/           # Student pages
│   │   │   ├── faculty/           # Faculty pages
│   │   │   └── admin/             # Admin pages
│   │   ├── routes/                # Route configuration
│   │   ├── services/              # API services
│   │   ├── utils/                 # Utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env                        # Environment variables (DO NOT commit)
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── server/                         # Express backend
│   ├── src/
│   │   ├── config/                # Configuration files
│   │   │   ├── database.js        # MongoDB connection
│   │   │   └── constants.js       # App constants
│   │   ├── controllers/           # Request handlers
│   │   │   ├── auth.js
│   │   │   ├── user.js
│   │   │   ├── student.js
│   │   │   ├── faculty.js
│   │   │   ├── department.js
│   │   │   ├── course.js
│   │   │   ├── subject.js
│   │   │   ├── attendance.js
│   │   │   ├── fee.js
│   │   │   ├── timetable.js
│   │   │   ├── examination.js
│   │   │   ├── result.js
│   │   │   ├── notification.js
│   │   │   ├── placement.js
│   │   │   ├── chat.js
│   │   │   └── ai.js
│   │   ├── middleware/            # Custom middleware
│   │   │   ├── auth.js
│   │   │   ├── authorize.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── models/                # Mongoose schemas
│   │   ├── routes/                # API routes
│   │   ├── services/              # Business logic
│   │   ├── utils/                 # Utilities
│   │   ├── validators/            # Input validators
│   │   ├── app.js                 # Express app setup
│   │   └── server.js              # Server entry point
│   ├── scripts/
│   │   └── seed.js                # Database seeding
│   ├── .env                        # Environment variables (DO NOT commit)
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md                        # This file
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **Groq API Key** (from Groq Cloud console)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd smart-campus-erp
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Server Environment Setup

1. **Create `.env` file in `server/` directory:**
   ```bash
   cd server
   cp .env.example .env
   ```

2. **Configure `.env` with your values:**
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smart-campus
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   GROQ_API_KEY=your_groq_api_key_here
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   ```

### Client Environment Setup

1. **Create `.env` file in `client/` directory:**
   ```bash
   cd ../client
   cp .env.example .env
   ```

2. **Configure `.env`:**
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

### MongoDB Setup

**Option 1: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create an account and cluster
3. Get connection string and add to `MONGO_URI`
4. Configure network access to allow your IP

**Option 2: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/smart-campus`

### Groq API Setup
1. Visit [Groq Console](https://console.groq.com)
2. Create API key
3. Add to `GROQ_API_KEY` in `.env`

---

## 🏃 Running the Application

### Terminal 1: Start Backend Server
```bash
cd server
npm run dev
```
Server runs on: `http://localhost:5000`

### Terminal 2: Start Frontend Server
```bash
cd client
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Access the Application
- **Landing Page**: http://localhost:5173
- **Login**: http://localhost:5173/login
- **Student Dashboard**: http://localhost:5173/student
- **Faculty Dashboard**: http://localhost:5173/faculty
- **Admin Dashboard**: http://localhost:5173/admin

---

## 🌱 Database Setup

### Seed Database with Demo Data
```bash
cd server
npm run seed
```

This creates:
- 1 Admin user
- 5 Faculty members
- 30 Students
- 3 Departments
- 6 Courses
- 12 Subjects
- Sample timetables
- Sample attendance records
- Sample fees
- Sample examinations
- Sample placements

### Demo Credentials

**Admin:**
- Email: `admin@smartcampus.edu`
- Password: `Admin@123`

**Faculty:**
- Email: `faculty1@smartcampus.edu`
- Password: `Faculty@123`

**Student:**
- Email: `student1@smartcampus.edu`
- Password: `Student@123`

> ⚠️ Change these credentials in production!

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
Include JWT token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Core Endpoints

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user

#### User Management
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update user profile

#### Students (Admin only)
- `GET /students` - List all students
- `POST /students` - Create student
- `GET /students/:id` - Get student details
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

#### Faculty (Admin only)
- `GET /faculty` - List all faculty
- `POST /faculty` - Create faculty
- `GET /faculty/:id` - Get faculty details
- `PUT /faculty/:id` - Update faculty
- `DELETE /faculty/:id` - Delete faculty

#### Attendance
- `GET /attendance` - Get attendance records
- `POST /attendance` - Mark attendance
- `PUT /attendance/:id` - Update attendance
- `GET /attendance/report` - Get attendance report

#### Timetable
- `GET /timetable` - Get timetable
- `POST /timetable` - Create timetable (Admin)
- `PUT /timetable/:id` - Update timetable (Admin)
- `DELETE /timetable/:id` - Delete timetable (Admin)

#### Fees
- `GET /fees` - Get fee records
- `POST /fees` - Create fee record (Admin)
- `PUT /fees/:id` - Update fee record

#### Examinations & Results
- `GET /examinations` - Get exams
- `POST /examinations` - Create exam (Admin)
- `GET /results` - Get results
- `POST /results` - Add result (Faculty/Admin)

#### Notifications
- `GET /notifications` - Get notifications
- `POST /notifications` - Create notification (Admin/Faculty)
- `PUT /notifications/:id/read` - Mark as read

#### Placements
- `GET /placements` - Get placement opportunities
- `POST /placements` - Create opportunity (Admin)
- `GET /placements/:id/applications` - Get applications
- `POST /placements/:id/apply` - Apply for placement (Student)

#### AI Chat
- `POST /ai/chat` - Send message to AI Assistant
- `GET /chat/history` - Get chat history
- `DELETE /chat/:conversationId` - Delete conversation

See complete API documentation in `server/README.md`

---

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Push code to GitHub**
2. **Connect to Vercel**
3. **Set environment variables:**
   ```
   VITE_API_BASE_URL=<your_production_api_url>
   ```
4. **Deploy**: `npm run build`

### Backend Deployment (Render or Railway)

1. **Push code to GitHub**
2. **Connect to hosting platform**
3. **Set environment variables:**
   ```
   MONGO_URI=<production_mongodb_uri>
   JWT_SECRET=<secure_random_key>
   GROQ_API_KEY=<your_groq_key>
   CLIENT_URL=<your_frontend_url>
   NODE_ENV=production
   ```
4. **Deploy**: `npm start`

### Database Deployment (MongoDB Atlas)

1. Create production cluster
2. Configure network access
3. Add IP whitelist
4. Use connection string in environment variables
5. Run seed script on production database

### Environment Configuration for Production

**Frontend (.env.production):**
```env
VITE_API_BASE_URL=https://your-api-domain.com/api
```

**Backend (.env.production):**
```env
PORT=5000
MONGO_URI=mongodb+srv://prod_user:prod_password@cluster.mongodb.net/smart-campus-prod
JWT_SECRET=very_secure_production_jwt_secret
GROQ_API_KEY=production_groq_key
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

---

## 🔐 Security

### Key Security Measures

✅ **Password Security**
- Passwords hashed with bcryptjs
- Minimum 8 characters required
- Special characters recommended

✅ **Authentication & Authorization**
- JWT-based authentication
- Secure token storage
- Role-based access control (RBAC)
- Protected API endpoints

✅ **API Security**
- Helmet.js for security headers
- CORS properly configured
- Rate limiting on sensitive endpoints
- Input validation on all endpoints
- SQL injection protection via Mongoose

✅ **Credentials Protection**
- No hardcoded secrets
- Environment variables for all sensitive data
- .env files not committed to Git
- API keys never exposed to frontend

✅ **Data Protection**
- MongoDB connection via MONGO_URI
- JWT_SECRET never shared
- GROQ_API_KEY server-side only
- Proper error handling without stack traces

### Best Practices

1. **Rotate Credentials Regularly**
   ```bash
   # After deployment, rotate:
   - MongoDB password
   - JWT_SECRET
   - GROQ_API_KEY
   ```

2. **Use HTTPS in Production**
3. **Enable MongoDB IP Whitelist**
4. **Set proper CORS origins**
5. **Implement rate limiting**
6. **Regular security updates**

---

## 📝 Development Guide

### Adding New Features

1. **Backend**: Create model → controller → routes → service
2. **Frontend**: Create page → components → service → routes
3. **Test**: Verify API endpoints with proper role authorization
4. **Deploy**: Update both frontend and backend

### Code Structure Guidelines

- **Components**: Reusable, focused, single responsibility
- **Services**: API calls centralized with Axios
- **Context**: Global state for auth, theme, notifications
- **Hooks**: Custom logic for reusability
- **Middleware**: Request processing and validation

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Role-based dashboard access
- [ ] CRUD operations per role
- [ ] Attendance marking and calculation
- [ ] Fee status updates
- [ ] Notifications delivery
- [ ] AI assistant functionality
- [ ] Dark/light theme switching
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Error handling for API failures

---

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Failed**
- Verify `MONGO_URI` is correct
- Check network access in MongoDB Atlas
- Ensure IP whitelist includes your machine

**JWT Token Issues**
- Clear browser localStorage
- Ensure `JWT_SECRET` matches between sessions
- Check token expiration

**Groq API Errors**
- Verify `GROQ_API_KEY` is valid
- Check Groq API status
- Ensure rate limits not exceeded

**CORS Errors**
- Verify `CLIENT_URL` in backend `.env`
- Check browser console for details
- Ensure API server is running

**Port Already in Use**
- Change PORT in `.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9`

---

## 📞 Support

For issues and questions:
1. Check troubleshooting section
2. Review API documentation
3. Check backend/frontend logs
4. Verify environment configuration

---

## 📄 License

This project is provided as an academic exercise and open-source learning material.

---

## 🙏 Acknowledgments

Built with:
- React & Vite
- Express.js & Node.js
- MongoDB & Mongoose
- Groq AI
- Tailwind CSS & Framer Motion
- Open-source community

---

**Last Updated**: August 2024
**Version**: 1.0.0

For the most up-to-date information, refer to the official documentation and source code.
#   S m a r t _ C a m p u s _ E R P  
 
# Smart Campus ERP

Smart Campus ERP is a full-stack campus management system for students, faculty, and administrators. It brings academic records, attendance, examinations, fees, timetables, placements, notifications, and an AI assistant into one web application.

## Highlights

- Role-based workspaces for students, faculty, and administrators
- JWT authentication with protected frontend routes and API authorization
- Student, faculty, department, course, subject, attendance, fee, examination, result, timetable, notification, and placement management
- AI campus assistant powered by Groq, with server-side API key protection
- Responsive React interface with light and dark themes
- MongoDB seed data for local development
- REST API built with Express and Mongoose

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 18, Vite, React Router, Tailwind CSS, Framer Motion, Axios, Recharts |
| Backend | Node.js, Express, Mongoose, JWT, Joi |
| Database | MongoDB or MongoDB Atlas |
| Security | Helmet, CORS, rate limiting, bcryptjs, role-based authorization |
| AI | Groq API |

## Repository Layout

```text
.
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # Shared UI components
│   │   ├── context/        # Authentication, theme, and notifications
│   │   ├── pages/          # Public, auth, student, faculty, and admin views
│   │   ├── routes/         # Protected and role-aware routes
│   │   └── services/       # Frontend API client
│   └── package.json
├── server/                 # Express + MongoDB backend
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Authentication, authorization, and errors
│   │   ├── models/         # Mongoose models
│   │   └── routes/         # REST API routes
│   ├── scripts/            # Seed and operational data scripts
│   └── package.json
└── README.md
```

## Requirements

- Node.js 16 or newer
- npm
- MongoDB locally or a MongoDB Atlas connection
- A Groq API key for the AI assistant

## Quick Start

### 1. Clone and install dependencies

```bash
git clone https://github.com/tejagandham03-hash/Smart_Campus_ERP.git
cd Smart_Campus_ERP

cd server
npm install

cd ../client
npm install
```

### 2. Configure the backend

From the repository root, create `server/.env` from the example file:

```bash
cd server
copy .env.example .env
```

On macOS or Linux, use `cp .env.example .env` instead.

Set the values in `server/.env`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/smart-campus
JWT_SECRET=replace-with-a-long-random-secret
GROQ_API_KEY=replace-with-your-groq-api-key
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string and allow your development IP in the Atlas network settings.

### 3. Configure the frontend

Create `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4. Seed development data (optional)

```bash
cd server
npm run seed
```

The seed script creates sample users and academic data. Do not use the seeded credentials or development database in production.

### 5. Start both applications

Open two terminals from the repository root.

**Terminal 1: backend**

```bash
cd server
npm run dev
```

The API runs at `http://localhost:5000`.

**Terminal 2: frontend**

```bash
cd client
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

### Client

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

### Server

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with Nodemon |
| `npm start` | Start the API in production mode |
| `npm run seed` | Insert development seed data |
| `npm run reset-data` | Reset operational development data |

## Main API Areas

The backend API is mounted under `/api` and includes routes for:

- Authentication and user profiles
- Students and faculty
- Departments, courses, and subjects
- Attendance, examinations, results, and timetables
- Fees, notifications, and materials
- Placements and placement applications
- AI chat and conversation history

See [server/README.md](server/README.md) for the endpoint reference and response formats.

## Demo Accounts

When the seed script creates demo data, use these development-only accounts:

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@smartcampus.edu` | `Admin@123` |
| Faculty | `faculty1@smartcampus.edu` | `Faculty@123` |
| Student | `student1@smartcampus.edu` | `Student@123` |

Change or remove these accounts before deploying the application.

## Deployment

The frontend can be deployed to platforms such as Vercel or Netlify. The backend can be deployed to Render, Railway, or another Node.js host.

Configure these production values on the backend:

```env
NODE_ENV=production
MONGO_URI=<production-mongodb-connection-string>
JWT_SECRET=<strong-random-secret>
GROQ_API_KEY=<groq-api-key>
CLIENT_URL=<deployed-frontend-url>
```

Configure this value on the frontend:

```env
VITE_API_BASE_URL=<deployed-backend-url>/api
```

Never commit `.env` files, database credentials, JWT secrets, or API keys. Only placeholder values belong in `.env.example` files.

## Troubleshooting

**The frontend cannot reach the API**

- Confirm the backend is running on port `5000`.
- Check `VITE_API_BASE_URL` in `client/.env`.
- Check that `CLIENT_URL` matches the frontend origin.

**MongoDB connection fails**

- Verify `MONGO_URI`.
- Confirm the MongoDB service is running, or allow your IP in MongoDB Atlas.

**The AI assistant returns an error**

- Confirm `GROQ_API_KEY` is set in `server/.env`.
- Check that the key is active and has available quota.

## Security

- Keep all secrets in environment variables.
- Do not expose `GROQ_API_KEY` in frontend code.
- Use a unique `JWT_SECRET` in every deployment.
- Restrict MongoDB network access in production.
- Use HTTPS and production CORS settings when deployed.

## License

This project is licensed under the MIT License.

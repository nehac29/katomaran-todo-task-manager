# 🧠 Backend - Todo Task Management API

This is the backend service for the **Todo Task Management Web Application**, built for the Katomaran Full Stack Hackathon. It manages user authentication, task operations, sharing functionality, and (optionally) real-time updates.

---

##Tech Stack

- Node.js + Express
- MongoDB with Mongoose
- JWT Authentication
- Google OAuth 2.0
- Socket.IO (for real-time)
- dotenv, cors, nodemon

---

## Folder Structure

backend/
├── config/
│ ├── db.js
│ └── oauth.js
├── controllers/
│ ├── auth.controller.js
│ └── task.controller.js
├── middleware/
│ ├── auth.middleware.js
│ └── errorHandler.js
├── models/
│ ├── user.model.js
│ └── task.model.js
├── routes/
│ ├── auth.routes.js
│ └── task.routes.js
├── utils/
│ ├── jwt.js
│ └── socket.js
├── src/
│ └── index.js
├── .env.example
├── package.json
└── README.md

---

## Features

- Google OAuth 2.0 login
- JWT-based session handling
- CRUD operations for tasks
- Share tasks with other users by email
- Pagination and sorting support
- Real-time task updates using Socket.IO (optional)
- Rate limiting, validation, and error handling

---

## API Authentication

All routes except `/api/auth/oauth` require a valid JWT token in the header:


---

## API Endpoints

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/oauth`       | OAuth login               |
| GET    | `/api/auth/me`          | Get current user profile  |
| POST   | `/api/tasks`            | Create a task             |
| GET    | `/api/tasks`            | Get tasks (owned/shared)  |
| PUT    | `/api/tasks/:id`        | Update task               |
| DELETE | `/api/tasks/:id`        | Delete task               |
| POST   | `/api/tasks/:id/share`  | Share task by email       |

---

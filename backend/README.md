# 🧠 Backend - Todo Task Management API

This is the backend service for the **Todo Task Management Web Application**, built for the Katomaran Full Stack Hackathon. It handles OAuth-based login, task CRUD operations, task sharing, and real-time updates.

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Google OAuth 2.0
- Socket.IO (for real-time task updates)
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
- JWT-based session management
- CRUD operations for tasks
- Task sharing via email
- Pagination, filtering (by due date, status, priority)
- Real-time updates with WebSockets (optional)
- Middleware for authentication and error handling

---

## API Authentication

All task routes require a Bearer JWT token in the header:


---

## Features

- Google OAuth 2.0 login
- JWT-based session management
- CRUD operations for tasks
- Task sharing via email
- Pagination, filtering (by due date, status, priority)
- Real-time updates with WebSockets (optional)
- Middleware for authentication and error handling

---

## API Authentication

All task routes require a Bearer JWT token in the header:


---

## 🌐 API Endpoints

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/oauth`       | Login with Google OAuth   |
| GET    | `/api/auth/me`          | Get current user profile  |
| POST   | `/api/tasks`            | Create a task             |
| GET    | `/api/tasks`            | Get all tasks (owned/shared) |
| PUT    | `/api/tasks/:id`        | Update a task             |
| DELETE | `/api/tasks/:id`        | Delete a task             |
| POST   | `/api/tasks/:id/share`  | Share task with another user |

---


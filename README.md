# BeetleX Backend

Backend implementation for the BeetleX Hackathon Management Platform.

## Overview

This project is a backend system for managing hackathons and technical events. It supports user authentication, event management, team formation, project submissions, announcements, judging, and leaderboard generation.

---

## Tech Stack

* Node.js
* TypeScript
* Express.js
* PostgreSQL
* Prisma ORM
* Docker
* JWT Authentication
* Jest
* Supertest

---

## Features

### Authentication

* Register User
* Login User
* Get Current User

### Events

* Create Event
* Get Events
* Update Event
* Delete Event

### Registrations

* Register for Event
* View Registration
* Cancel Registration

### Teams

* Create Team
* Join Team
* Get Team Details

### Projects

* Create Project
* Update Project
* Submit Project
* View Project

### Announcements

* Create Announcement
* View Announcements

### Judging

* Create Score
* Update Score
* View Scores

### Leaderboard

* Generate Event Leaderboard
* Rank Projects Based on Scores

---

## Architecture

The application follows a layered architecture to keep responsibilities separated and maintain the codebase easily.

### Routes Layer

Defines API endpoints and maps requests to controllers.

### Controllers Layer

Handles HTTP requests and responses.

### Services Layer

Contains business logic and database operations.

### Middleware Layer

Provides reusable functionality such as JWT authentication.

### Database Layer

Prisma ORM is used to communicate with PostgreSQL.

### Infrastructure Layer

Docker is used to containerize the application and database.

---

## Project Structure

```text
src
├── controllers
├── services
├── routes
├── middleware
├── lib
├── generated
└── server.ts

tests
├── app.test.ts
├── health.test.ts
├── routes.test.ts
└── basic.test.ts

prisma
├── schema.prisma
└── migrations
```

---

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
cd BeetleX_Backend
```

---

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/beetlex"
JWT_SECRET=your_secret_key
```

---

## Running with Docker

The entire application can be started using Docker.

```bash
docker-compose up --build
```

This command will:

* Start PostgreSQL
* Start the Backend API
* Run Prisma migrations automatically
* Expose the API on port 3000

---

## Running Locally

Install dependencies:

```bash
npm install
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

---

## Testing

The project includes automated tests using Jest and Supertest.

Run tests:

```bash
npm test
```

Current test coverage includes:

* Application health checks
* Route validation
* API endpoint behavior
* Basic functionality verification

Total Tests: 16 Passing

---

## API Modules

* Authentication
* Events
* Registrations
* Teams
* Projects
* Announcements
* Scores
* Leaderboard

---

## Tradeoffs and Design Decisions

### Simplicity vs Scalability

The project prioritizes readability and maintainability while keeping the architecture scalable for future growth.

### JWT Authentication

JWT was chosen because it is stateless and easy to scale across multiple backend instances. A tradeoff is that token revocation is more difficult compared to session-based authentication.

### Prisma ORM

Prisma provides strong type safety and faster development speed. The tradeoff is slightly reduced control over highly optimized database queries.

### Leaderboard Calculation

Leaderboard rankings are calculated dynamically from project scores. This simplifies implementation but may require caching or pre-computation for very large events.

### Dockerized Infrastructure

Docker simplifies deployment and onboarding for developers by providing a consistent environment across systems.

---

## Future Improvements

* Redis Caching
* Role-Based Access Control (RBAC)
* Real-Time Leaderboards using WebSockets
* File Upload Support
* Email Notifications
* Pagination and Filtering
* Audit Logging
* Rate Limiting

---

## Author

Harsh Dagar

Backend Developer Assignment Submission for BeetleX.

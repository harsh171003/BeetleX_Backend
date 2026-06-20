# BeetleX Backend

Backend implementation for the BeetleX Hackathon Management Platform.

## Tech Stack

* Node.js
* TypeScript
* Express.js
* PostgreSQL
* Prisma ORM
* Docker
* JWT Authentication

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

* Event Leaderboard
* Ranking Based on Scores

---

## Project Structure

```text
src
├── controllers
├── services
├── routes
├── middleware
├── lib
└── generated
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd BeetleX_Backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/beetlex
JWT_SECRET=your_secret
```

### Start Database

```bash
docker compose up -d
```

### Run Migrations

```bash
npx prisma migrate dev
```

### Start Server

```bash
npm run dev
```

---

## API Modules

* Auth
* Events
* Registrations
* Teams
* Projects
* Announcements
* Scores
* Leaderboard

---

## Future Improvements

* Redis Caching
* Role Based Authorization
* WebSocket Leaderboards
* File Upload Support
* Email Notifications
* Pagination and Filtering

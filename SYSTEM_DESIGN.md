# BeetleX Backend - System Design

## 1. How would you scale the platform to support 100,000+ users?

Current implementation uses Node.js, Express, PostgreSQL and Prisma.

To scale:

* Deploy multiple backend instances behind a load balancer.
* Use Redis for caching frequently accessed data such as events and leaderboards.
* Add database indexes on frequently queried fields.
* Use read replicas for PostgreSQL.
* Move long-running tasks to background workers.

Tradeoff:
Additional infrastructure complexity but significantly better performance and availability.

---

## 2. How would you implement a real-time leaderboard?

Current implementation calculates leaderboard data from scores stored in PostgreSQL.

For real-time updates:

* Use WebSockets or Server-Sent Events (SSE).
* Update leaderboard whenever judges submit scores.
* Cache leaderboard results in Redis.
* Broadcast updates to connected clients.

Tradeoff:
More infrastructure requirements but near real-time user experience.

---

## 3. How would you prevent duplicate registrations?

The system uses database-level constraints.

Measures:

* Unique constraint on registration records.
* Validate existing registrations before creating new ones.
* Use transactions for concurrent requests.

Tradeoff:
Slightly higher validation overhead but guarantees data integrity.

---

## 4. How would you secure the APIs?

Security measures:

* JWT authentication.
* Password hashing using bcrypt.
* Environment variables for secrets.
* Request validation.
* Role-based access control for organizers, judges and participants.
* HTTPS in production.

Tradeoff:
Additional implementation effort but improved security.

---

## 5. How would you handle large announcement volumes?

Approach:

* Store announcements in PostgreSQL.
* Add indexes on eventId and publishedAt.
* Paginate announcement responses.
* Cache recent announcements.
* Use background workers for notifications.

Tradeoff:
Additional storage and caching infrastructure but significantly improved scalability.

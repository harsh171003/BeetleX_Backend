import express from "express";
import authRoutes from "./routes/auth.routes";
import eventRoutes from "./routes/event.routes";
import teamRoutes from "./routes/team.routes";
import projectRoutes from "./routes/project.routes";
import announcementRoutes from "./routes/announcement.routes";
import scoreRoutes from "./routes/score.routes";
import leaderboardRoutes from "./routes/leaderboard.routes";

console.log("announcementRoutes =", announcementRoutes);

const app = express();

app.use(express.json());

app.use(
  "/leaderboard",
  leaderboardRoutes
);
app.use("/judge", scoreRoutes);
app.use("/announcements", announcementRoutes);
app.use("/projects", projectRoutes);
app.use("/auth", authRoutes);
app.use("/teams", teamRoutes);
console.log("Loading Event Routes...");
app.use("/events", eventRoutes);

app.get("/", (req, res) => {
  res.send("BeetleX Backend Running");
});

const PORT = 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
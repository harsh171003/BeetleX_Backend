import request from "supertest";
import app from "../src/server";
import { describe, test, expect } from "@jest/globals";

describe("Route Checks", () => {
  test("GET unknown route returns 404", async () => {
    const res = await request(app).get("/unknown");
    expect(res.status).toBe(404);
  });

  test("GET auth route exists", async () => {
    const res = await request(app).get("/auth");
    expect(res.status).toBeGreaterThanOrEqual(400);
  });

  test("GET events route exists", async () => {
    const res = await request(app).get("/events");
    expect(res.status).not.toBe(500);
  });

  test("GET teams route exists", async () => {
    const res = await request(app).get("/teams");
    expect(res.status).not.toBe(500);
  });

  test("GET projects route exists", async () => {
    const res = await request(app).get("/projects");
    expect(res.status).not.toBe(500);
  });
});
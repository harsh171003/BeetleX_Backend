import request from "supertest";
import app from "../src/server";
import { describe, test, expect } from "@jest/globals";

describe("Health Checks", () => {
  test("GET / returns 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  test("GET / contains BeetleX", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("BeetleX");
  });

  test("GET / response is string", async () => {
    const res = await request(app).get("/");
    expect(typeof res.text).toBe("string");
  });

  test("GET / response not empty", async () => {
    const res = await request(app).get("/");
    expect(res.text.length).toBeGreaterThan(0);
  });

  test("GET / content type exists", async () => {
    const res = await request(app).get("/");
    expect(res.headers["content-type"]).toContain("text");
  });
});
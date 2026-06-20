import request from "supertest";
import app from "../src/server";

import { describe, test, expect } from "@jest/globals";

describe("Application", () => {
  test("GET / should return backend running message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toContain(
      "BeetleX Backend Running"
    );
  });
});
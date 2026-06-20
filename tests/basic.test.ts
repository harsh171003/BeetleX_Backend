import { describe, test, expect } from "@jest/globals";

describe("Basic Tests", () => {
  test("1 equals 1", () => {
    expect(1).toBe(1);
  });

  test("true is true", () => {
    expect(true).toBe(true);
  });

  test("array contains value", () => {
    expect([1, 2, 3]).toContain(2);
  });

  test("string match", () => {
    expect("BeetleX").toContain("Beetle");
  });

  test("object property", () => {
    expect({ name: "Harsh" }).toHaveProperty("name");
  });
});
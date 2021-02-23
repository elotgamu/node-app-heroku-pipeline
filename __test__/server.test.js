const { expect } = require("@jest/globals");
const supertest = require("supertest");
const app = require("../src/app");

const request = supertest(app);

describe("Sanity checks", () => {
  test("Testing the health endpoint", async (done) => {
    const response = await request.get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.message).toBe("OK");
    done();
  });
});

describe("Testing the api message", () => {
  test("/ endpoint return the api message", async (done) => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Welcome to the api");
    done();
  });
});

/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Argentina",
};

describe("Country routes", () => {
  before(() =>
    conn
      .sync({ force: true })
      .then(() => {
        conn.authenticate();
        console.log("Conection successful");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      })
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  
});

const request = require("supertest");
const app = require("../app");

describe("Todo API Testing", () => {
  let dataId;
  describe("POST /api/todo", () => {
    it("POST insert todo data", (done) => {
      const data = {
        title: "Data Testing",
      };
      request(app)
        .post("/api/todo")
        .send(data)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.data.title).toEqual("Data Testing");
          dataId = res.body.data.id;
          return done();
        });
    });
  });

  describe("GET BY ID /api/todo/:id", () => {
    it("GET todo data by id", (done) => {
      request(app)
        .get(`/api/todo/${dataId}`)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.data.title).toEqual("Data Testing");
          return done();
        });
    });

    it("GET todo data by id not found", (done) => {
      request(app)
        .get(`/api/todo/9999`)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.message).toEqual("Data Not Found");
          return done();
        });
    });
  });

  describe("GET /api/todo", () => {
    it("GET all todo data", (done) => {
      request(app)
        .get(`/api/todo`)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.status).toEqual(200);
          return done();
        });
    });
  });

  describe("PUT /api/todo/:id", () => {
    it("UPDATE todo data and respon 201", (done) => {
      const data = {
        title: "Data Testing Update",
        updatedAt: "2024-03-21T14:40:59.997Z",
      };
      request(app)
        .put(`/api/todo/${dataId}`)
        .send(data)
        .end(function (err, res) {
          if (err) return done(err);
          console.log(res);
          expect(res.body.message).toEqual("successfully updated data");
          return done();
        });
    });

    it("UPDATE todo data not found", (done) => {
      const data = {
        title: "Data Testing Update",
        updatedAt: "2024-03-21T14:40:59.997Z",
      };
      request(app)
        .put(`/api/todo/9999`)
        .send(data)
        .end(function (err, res) {
          if (err) return done(err);
          console.log(res);
          expect(res.body.message).toEqual("Todo not found");
          return done();
        });
    });
  });

  describe("DELETE BY ID /api/todo/:id", () => {
    it("DELETE todo data by id", (done) => {
      request(app)
        .delete(`/api/todo/${dataId}`)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.status).toEqual(200);
          return done();
        });
    });

    it("DELETE todo data by id not found", (done) => {
      request(app)
        .delete(`/api/todo/9999`)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.message).toEqual("Todo not found");
          return done();
        });
    });
  });
});

const request = require('supertest');
const app = require("../server/index")

describe("GET /getData", function () {
    it("Return the book details", async function () {
        const response = request(app).get('/getData');
        request(app)
            .get('/getData')
            .expect('Content-Type', /json/)
            .expect(200)
        console.log(response.url);
    });
});
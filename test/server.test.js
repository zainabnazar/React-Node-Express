const request = require('supertest');
const app = require("../server/index")



describe('GET /getData', () => {

    it('Successful call to /getData', () => {
        return request(app)
            .get('/getData')
            .expect(200)
    });

    it("Return the book details as json", async function () {
        return request(app)
            .get('/getData')
            .expect('Content-Type', /json/)
    });

});
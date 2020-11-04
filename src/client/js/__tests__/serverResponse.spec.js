require("regenerator-runtime/runtime");
const app = require('../../../server/server');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the response endpoint', async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('/response')
   expect(response.status).toBe(200)
  expect(response.body.leonidas).toBe('THIS IS SPARTA!')
  done()
})
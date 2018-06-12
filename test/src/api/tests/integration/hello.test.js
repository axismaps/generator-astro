/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../../../index');

const sandbox = sinon.createSandbox();


describe('goodbye', () => {
  let body;

  beforeEach(async () => {
    body = {};
  });

  afterEach(() => sandbox.restore());

  describe('POST /api/v1/goodbye', () => {
    it('should goodbye', () => {
      return request(app)
        .post('/api/v1/goodbye')
        .send(body)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.have.a.property('message');
          expect(res.body.message).equal('OK');
        });
    });
  });
});
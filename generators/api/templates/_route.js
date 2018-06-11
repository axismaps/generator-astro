const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/<%= name %>.controller');

const {
  setup,
} = require('../../validations/<%= name %>.validation');

const router = express.Router();

/**
 * @api {post} api/v1/setup Setup
 * @apiDescription Setup something
 * @apiVersion 1.0.0
 * @apiName Setup
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String}          code      TBTTicket ID
 *
 * @apiSuccess (Created 200) {String}  message             Response message
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/<%= name %>')
  .post(validate(setup), controller.<%= name %>);

module.exports = router;

/*!
 * verbose-dashboard
 * Copyright(c) 2017 Neil Barton, Matt Ward
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

const express = require('express');

/**
 * Module exports.
 * @public
 */

module.exports = verboseDashboard;
module.exports.middleware = verboseDashboardMiddleWare;

/**
 * Sets up the Verbose CMS API routes using options passed in an object
 *
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function verboseDashboard(options) {

    const api = express.Router();
    api.use(verboseDashboardMiddleWare);
    api.get('/', (req, res) => {
        res.end('admin dashboard')
    });

    return api;

}

/**
 * Middleware ran for each API call
 *
 * @return {Function}
 * @public
 * @param req
 * @param res
 * @param next
 */

function verboseDashboardMiddleWare(req, res, next) {

    // Return middleware

    if (req.verbose && req.verbose.api) {
        return next();
    }

    if (!req.verbose) {
        req.verbose = {};
    }

    console.log('hitting verboseDashboardMiddleWare');

    req.verbose.api = true;
    next();

}
'use strict';

/**
 * dynamic-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dynamic-test.dynamic-test');

'use strict';

/**
 * dynamic-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dynamic-test.dynamic-test');

'use strict';

/**
 * dynamic-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-test.dynamic-test');

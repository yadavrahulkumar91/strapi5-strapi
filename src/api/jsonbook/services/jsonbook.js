'use strict';

/**
 * jsonbook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jsonbook.jsonbook');

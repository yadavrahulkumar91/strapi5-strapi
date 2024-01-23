'use strict';

/**
 * json service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::json.json');

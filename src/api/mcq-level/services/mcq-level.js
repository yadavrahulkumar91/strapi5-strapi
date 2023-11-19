'use strict';

/**
 * mcq-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mcq-level.mcq-level');

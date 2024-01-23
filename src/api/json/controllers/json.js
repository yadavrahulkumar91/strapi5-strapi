'use strict';

/**
 * json controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::json.json');

'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('json')
      .service('myService')
      .getWelcomeMessage();
  },
});

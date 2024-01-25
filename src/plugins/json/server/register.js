'use strict';

module.exports = ({ strapi }) => {
  // register phase

  strapi.customFields.register({
    name: "json",
    plugin: "json",
    type: "text",
    inputSize: {
      // optional
      default: 12,
      isResizable: true,
    },
  });
};

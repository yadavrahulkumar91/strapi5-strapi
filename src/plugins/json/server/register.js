'use strict';

module.exports = ({ strapi }) => {
  // register phase

  strapi.customFields.register({
    name: "json",
    plugin: "json",
    type: "json",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};

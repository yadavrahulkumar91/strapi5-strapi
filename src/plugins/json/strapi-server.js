'use strict';

// module.exports = require('./server');


module.exports = {
    register({ strapi }) {
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
    },
};
'use strict';

// module.exports = require('./server');


module.exports = {
    register({ strapi }) {
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
    },
};
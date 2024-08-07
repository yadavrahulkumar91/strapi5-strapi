module.exports = [
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:1337', 'https://proud-snowflake-92486.pktriot.net', 'https://backend.rahulkumaryadav.com.np', "https://author.rahulkumaryadav.com.np","http://author.rahulkumaryadav.com.np","http://ec2-13-50-246-144.eu-north-1.compute.amazonaws.com:1337","http://13.50.246.144:1337"],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },


  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "storage.googleapis.com",
            "dl.airtable.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "storage.googleapis.com",
            "dl.airtable.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];




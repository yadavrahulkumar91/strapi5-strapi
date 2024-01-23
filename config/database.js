const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', '');

  const connections = {
    // mysql: {
    //   connection: {
    //     connectionString: env('DATABASE_URL'),
    //     host: env('DATABASE_HOST', 'localhost'),
    //     port: env.int('DATABASE_PORT', 3306),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     ssl: env.bool('DATABASE_SSL', false) && {
    //       key: env('DATABASE_SSL_KEY', undefined),
    //       cert: env('DATABASE_SSL_CERT', undefined),
    //       ca: env('DATABASE_SSL_CA', undefined),
    //       capath: env('DATABASE_SSL_CAPATH', undefined),
    //       cipher: env('DATABASE_SSL_CIPHER', undefined),
    //       rejectUnauthorized: env.bool(
    //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
    //         true
    //       ),
    //     },
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
    // mysql2: {
    //   connection: {
    //     host: env('DATABASE_HOST', 'localhost'),
    //     port: env.int('DATABASE_PORT', 3306),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     ssl: env.bool('DATABASE_SSL', false) && {
    //       key: env('DATABASE_SSL_KEY', undefined),
    //       cert: env('DATABASE_SSL_CERT', undefined),
    //       ca: env('DATABASE_SSL_CA', undefined),
    //       capath: env('DATABASE_SSL_CAPATH', undefined),
    //       cipher: env('DATABASE_SSL_CIPHER', undefined),
    //       rejectUnauthorized: env.bool(
    //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
    //         true
    //       ),
    //     },
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: {
          rejectUnauthorized: true,
          ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUAlRbPOWUDJrUH6gmb2aFKzZNqDcwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZDZiNTZhZjctMGQ4OS00ZmNlLWE2YzAtNWI3ZWZkMzFj
NWRmIFByb2plY3QgQ0EwHhcNMjQwMTE2MDY0NTIyWhcNMzQwMTEzMDY0NTIyWjA6
MTgwNgYDVQQDDC9kNmI1NmFmNy0wZDg5LTRmY2UtYTZjMC01YjdlZmQzMWM1ZGYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKH6wEEi
P7Wnor4JqECdV4nfLOG3PqPFqv4YW4rO5eUQgWKME/yiobl++g+LjJplz1fF+F0T
rcZACHUL3hMTMJOaFZxo17sUTEPnbL5PJ3JPVZGg3drBqdSer0Ndi+t/Goj/TSwX
Lvm0A3bmaRKCmAuhxajaZmbXPP+S4LLdYu27BvK7kUVf7ijXNiQBaIDMoSua+WTO
PAyytRzC1kcsZVG/29RjLNJ/Il8lGSoUafGReLDisM/tjrjINRynF86sgJ7d7Q/1
JFG3/aKfRCSWi6ZzYkL2i7lQ8zN0LEBIHN3ISD0oVJfnuHGPrLPU5zsZ1fFJlFfV
s2YUjZtJmlGvIGHcbF2vgaihilwJ2etHWNr7+1hz/3z2Z1/HjRo9K/WSzqne/wMy
GZ25RjRlGxBn+qVsAM+ylWSrFDoVSYff8BgpK4hnf5d4iN4SSdfrvWWlQDAx14jJ
NI9PViiWEnXQVorhlRmhLZ29vcX69i2A06v8ahJfYJn2pszYmTHpzDUCHwIDAQAB
oz8wPTAdBgNVHQ4EFgQUHUQEgFCcIJCo/nKUnOwrt12lRaIwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAISKDDFx6rQ/MbFs
92xO2PA+SJzgNkkE+nkT5AfIoNY45KijUVgfuo8Ju8TvB/9/2KyAYC0eOlOUnz7j
7Ux+R6XFKzdWt977bV4I0uWexsgFWvj3qENfSC0EZEDbpodf6rNi4sAqoKJyvUp4
VjxZGHdfF5e5BEd15YwJIipyrF3nhbd5rqEsLsUpWL8ABNyZULlqKaDiyHKH4Lrp
KUsg0X9P8aa3QyMPr2paIU15blwkkU40LWgCts0x7t+jDdWUNk+FJkdfJb+GESwv
Xh7No8/eObLij7kBcQyVYwJbSSE9K9rk+TZeZaSTnP39SwKSARc0Su5Ffw6EqUj0
QF5HqPS39UvHC45gc8iHI9+wrNXR72Qzx9d9sE7QfMMw4xgZaW+M+cfgHwxiA6Y2
0VkXjeukwCtZcJeAp+tT69KxifZeFWrFZ4/eaPy7YVaJzHPCU/ChDZAB3hZ6G0nE
BLCOqelSpnekzr6jpskCE4qGuo5tC/IhB0qxaAB1XzxNhmlSDg==
-----END CERTIFICATE-----`,
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 3), max: env.int('DATABASE_POOL_MAX', 100) },
      // createTimeoutMillis: 3000,
      // acquireTimeoutMillis: 30000,
      // idleTimeoutMillis: 30000,
      // reapIntervalMillis: 1000,
      // createRetryIntervalMillis: 100,
      // propagateCreateError: false,
    },
    // postgres: {
    //   connection: {
    //     connectionString: env('DATABASE_URL'),
    //     host: env('DATABASE_HOST', 'localhost'),
    //     port: env.int('DATABASE_PORT', 5432),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     ssl: env.bool('DATABASE_SSL', false) && {
    //       key: env('DATABASE_SSL_KEY', undefined),
    //       cert: env('DATABASE_SSL_CERT', undefined),
    //       ca: env('DATABASE_SSL_CA', undefined),
    //       capath: env('DATABASE_SSL_CAPATH', undefined),
    //       cipher: env('DATABASE_SSL_CIPHER', undefined),
    //       rejectUnauthorized: env.bool(
    //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
    //         false
    //       ),
    //     },
    //     schema: env('DATABASE_SCHEMA', 'public'),
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
    // sqlite: {
    //   connection: {
    //     filename: path.join(
    //       __dirname,
    //       '..',
    //       env('DATABASE_FILENAME', '.tmp/data.db')
    //     ),
    //   },
    //   useNullAsDefault: true,
    // },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', '');

  const connections = {
    
    postgres: {
      connection: {
        // connectionString: env('DATABASE_URL'),
        connectionString: '',
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
//           ca: `-----BEGIN CERTIFICATE-----
// MIIEBjCCAu6gAwIBAgIJAMc0ZzaSUK51MA0GCSqGSIb3DQEBCwUAMIGPMQswCQYD
// VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi
// MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h
// em9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkw
// ODIyMTcwODUwWhcNMjQwODIyMTcwODUwWjCBjzELMAkGA1UEBhMCVVMxEDAOBgNV
// BAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoMGUFtYXpv
// biBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxIDAeBgNV
// BAMMF0FtYXpvbiBSRFMgUm9vdCAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEFAAOC
// AQ8AMIIBCgKCAQEArXnF/E6/Qh+ku3hQTSKPMhQQlCpoWvnIthzX6MK3p5a0eXKZ
// oWIjYcNNG6UwJjp4fUXl6glp53Jobn+tWNX88dNH2n8DVbppSwScVE2LpuL+94vY
// 0EYE/XxN7svKea8YvlrqkUBKyxLxTjh+U/KrGOaHxz9v0l6ZNlDbuaZw3qIWdD/I
// 6aNbGeRUVtpM6P+bWIoxVl/caQylQS6CEYUk+CpVyJSkopwJlzXT07tMoDL5WgX9
// O08KVgDNz9qP/IGtAcRduRcNioH3E9v981QO1zt/Gpb2f8NqAjUUCUZzOnij6mx9
// McZ+9cWX88CRzR0vQODWuZscgI08NvM69Fn2SQIDAQABo2MwYTAOBgNVHQ8BAf8E
// BAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUc19g2LzLA5j0Kxc0LjZa
// pmD/vB8wHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJKoZIhvcN
// AQELBQADggEBAHAG7WTmyjzPRIM85rVj+fWHsLIvqpw6DObIjMWokpliCeMINZFV
// ynfgBKsf1ExwbvJNzYFXW6dihnguDG9VMPpi2up/ctQTN8tm9nDKOy08uNZoofMc
// NUZxKCEkVKZv+IL4oHoeayt8egtv3ujJM6V14AstMQ6SwvwvA93EP/Ug2e4WAXHu
// cbI1NAbUgVDqp+DRdfvZkgYKryjTWd/0+1fS8X1bBZVWzl7eirNVnHbSH2ZDpNuY
// 0SBd8dj5F6ld3t58ydZbrTHze7JJOd8ijySAp4/kiu9UfZWuTPABzDa/DSdz9Dk/
// zPW4CXXvhLmE02TA9/HeCw3KEHIwicNuEfw=
// -----END CERTIFICATE-----`,
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      // acquireConnectionTimeout: 1000000,
      pool: { min: env.int('DATABASE_POOL_MIN', 3), max: env.int('DATABASE_POOL_MAX', 20) },
      
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

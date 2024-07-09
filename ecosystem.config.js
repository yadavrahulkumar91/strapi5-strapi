module.exports = {
  apps: [
    {
      name: 'GameChanger Academy', // Your project name
      cwd: '/home/ubuntu/strapi5-strapi', // Path to your project
      // script: 'npm', // For this example we're using npm, could also be yarn
      script: 'yarn', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
      },
    },
  ],
};

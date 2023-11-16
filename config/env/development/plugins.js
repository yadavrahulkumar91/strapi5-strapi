module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'localhost',
                port: 1337,
                ignoreTLS: true,
            },
        },
    },
});
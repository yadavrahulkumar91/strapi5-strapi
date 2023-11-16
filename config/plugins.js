module.exports = ({ env }) => ({
    // ...

    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.gmail.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('077bme028.rahul@pcampus.edu.np'),  // Your Gmail email address
                    pass: env('Haririta@2'),  // Your Gmail password or an application-specific password
                },
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: '077bme028.rahul@pcampus.edu.np',  // Replace with your Gmail email address
                defaultReplyTo: '077bme028.rahul@pcampus.edu.np',  // Replace with your Gmail email address
            },
        },
    },
    // ...
});
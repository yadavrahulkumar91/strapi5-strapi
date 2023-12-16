module.exports = ({ env }) => ({
    // ...

    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                // host: "sandbox.smtp.mailtrap.io",
                // port: 2525,
                // auth: {
                //     user: "e1236a7c4a39f9",
                //     pass: "874d6ceef5a8b0"
                // }

                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: "077bme028.rahul@pcampus.edu.np",
                    pass: "Haririta@2"
                }

                // host: 'smtp.ethereal.email',
                // port: 587,
                // auth: {
                //     user: 'gail.mcdermott98@ethereal.email',
                //     pass: 'ZRj3HDwzS33nJ8Gpta'
                // }
                
                
//                   host: "live.smtp.mailtrap.io",
//   port: 587,
//   auth: {
//     user: "api",
//     pass: "91fbc7d1f83ea64868ae5d32cac52dc8"
//   }
            
            },
            settings: {
                defaultFrom: 'noreply@rahul.com',  // Replace with your Gmail email address
                defaultReplyTo: 'noreply@rahul.com',  // Replace with your Gmail email address
            },
        },
    },
    // ...
});
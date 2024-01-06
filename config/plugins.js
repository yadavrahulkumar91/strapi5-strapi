module.exports = ({ env }) => ({
    // ...

    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: "077bme028.rahul@pcampus.edu.np",
                    pass: "Haririta@2"
                }            
            },
            settings: {
                defaultFrom: 'noreply@rahul.com',  // Replace with your Gmail email address
                defaultReplyTo: 'noreply@rahul.com',  // Replace with your Gmail email address
            },
        },
    },


    upload: {
        config: {
            provider: "strapi-provider-firebase-storage",
            providerOptions: {
                serviceAccount: require("./gamechanger-drive-91-d27c1e195052.json"),
                // Custom bucket name
                bucket: env(
                    "STORAGE_BUCKET_URL",
                    "my-bucket-name.appspot.com"
                ),
                sortInStorage: true, // true | false
                debug: false, // true | false
            },
        },
    },
    
});
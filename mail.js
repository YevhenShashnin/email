const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'smtp.gmail.com',
    secure: false, // use SSL
    auth:{
        user: 'genyatest5@gmail.com',
        pass: 'ytrewq321'
    },
    tls: {
        rejectUnauthorized: false
    }
});

// const htmlFilePath = 'email-verification.html';
const htmlFilePath = 'index.html';

fs.readFile(htmlFilePath, 'utf8', function (err, data) {
    if (err) return console.error(err);

    const mailOptions ={
        from: 'Test <genyatest5@gmail.com>',
        to: 'Tester <genyadstph@gmail.com>',
        // to: 'Tester <testing.serhii@gmail.com>',
        subject: 'Test email',
        html: data,
        attachments: [
            // {
            //     filename: 'email-logo.png',
            //     path: __dirname + '/images/email-logo.png',
            //     cid: 'logo'
            // },
            // {
            //     filename: 'email-background.png',
            //     path: __dirname + '/images/email-background.png',
            //     cid: 'background'
            // },
            // {
            //     filename: 'open-lock-white.png',
            //     path: __dirname + '/images/open-lock-white.png',
            //     cid: 'open-lock'
            // },
            // {
            //     filename: 'tick-icon-white.png',
            //     path: __dirname + '/images/tick-icon-white.png',
            //     cid: 'tick-icon'
            // }
        ]
    };

    transporter.sendMail(mailOptions , function(err, data){
        if (err) return console.log('Unable to send mail', err);
        console.log('Email sent successfully');
    });
});

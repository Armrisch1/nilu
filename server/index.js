const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000; // You can change the port if needed

// Middleware to parse JSON bodies
app.use(express.json());
// Enable CORS for a specific origin
const corsOptions = {
    origin: 'https://nilu27.com'
};
app.use(cors(corsOptions));

// Endpoint to send emails
app.post('/send', (req, res) => {

    const {name = null, email = null, subject = null, message = null } = req.body;

    if (!name || !email || !subject || !message){
        return res.send('Please fill in all fields');
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        html: true,
        auth: {
            user: 'admin@nilu27.com',
            pass: 'smrw bfik fsft pgmt'
        }
    });

    // Email message options
    let mailOptions = {
        from: 'admin@nilu27.com',
        to:"armrisch@gmail.com",
        subject:subject,
        text: `
            <strong>Name:</strong> ${name} <br>
            <strong>Email:</strong> ${email} <br><br>
            ${message}
        `
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Message sent: %s', info.messageId);
            res.send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
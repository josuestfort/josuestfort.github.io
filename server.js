const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Configure transporter for sending emails
    const transporter = nodemailer.createTransport({
        service: "gmail", // Or your email provider (e.g., Outlook, Yahoo)
        auth: {
            user: "josuestfort@gmail.com", // Replace with your email
            pass: "Jorijori35#", // Replace with your email password or app password
        },
    });

    try {
        // Send email to your chosen address
        await transporter.sendMail({
            from: `"Website Contact Form" <josuestfort@gmail.com>`,
            to: "josuestfort@gmail.com", // Replace with your email
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        // Send automatic reply to the user
        await transporter.sendMail({
            from: `"Your Website" <josuestfort@gmail.com>`,
            to: email,
            subject: "Thank You for Contacting Us!",
            text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nYour Website Team`,
        });

        res.status(200).send("Emails sent successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending emails.");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

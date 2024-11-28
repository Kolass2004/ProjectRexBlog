const nodemailer = require("nodemailer");

const sendErrorEmail = async (errorMessage) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "your_email@gmail.com",
                pass: "your_email_password",
            },
        });

        const mailOptions = {
            from: "your_email@gmail.com",
            to: "your_email@gmail.com",
            subject: "Project Blog Rex - Error Notification",
            text: `An error occurred in the automation process:\n\n${errorMessage}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Error email sent successfully.");
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};

module.exports = sendErrorEmail;

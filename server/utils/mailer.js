const nodeMailer = require("nodemailer");
require("dotenv").config();

exports.mailer = async (receivers, data) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify((err, success) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("server is ready to send email");
          resolve(success);
        }
      });
    });

    const options = {
      from: {
        name: "Facebook Clone",
        address: process.env.GMAIL,
      },
      to: receivers.join(","),
      replyTo: process.env.GMAIL,
      subject: data.subject,
      html: data.html,
      attachments: data.attachments,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

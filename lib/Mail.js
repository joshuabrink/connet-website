"use strict";
const nodemailer = require("nodemailer");

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

var transporter = nodemailer.createTransport({
  service: "Zoho",
  host: this.service,
  pool: true,
  port: 587,
  // secure: true, // upgrade later with STARTTLS
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
});

class Mail {
  constructor() {
    this.transporter = transporter;
  }

  static createConnection() {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is verified");
      }
    });
  }

  static sendMessage(subject, text, email) {
    var message = {
      from: EMAIL_USERNAME,
      to: email,
      subject: subject,
      text: text,
    };

    transporter.sendMail(message, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

module.exports = Mail;

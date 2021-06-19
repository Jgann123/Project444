const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { Router } = require('express');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, //ssl
    auth: {
        user: 'jeremy@softsquare.tech',
        pass: 'JGANN2234!'
    }
  });

  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  Router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message

  var mail = {
    from: name,
    to: "jeremy@softsquare.tech",
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
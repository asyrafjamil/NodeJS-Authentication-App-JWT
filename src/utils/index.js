const Datauri = require('datauri');
const path = require('path');
var nodemailer = require('nodemailer');

const cloudinary = require('../config/cloudinary');
const sgMail = require('@sendgrid/mail');
const mg = require("mailgun-js");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'asyrafjamil7@gmail.com',
      pass: '<enter password>'
    }
  });
  
  var mailOptions = {
    from: 'asyrafjamil7@gmail.com',
    to: 'asyrafjamil7@gmail.com',
    subject: 'Sending Email using Node.js',
    html: `That was easy!`
  };

// sgMail.setApiKey('SG-SJDLFksjdflkJSDlksjdflkjsdlkjSDFL2ia4_k98ZfUBFK0WcviC-f3q5m');

function uploader(req) {
    return new Promise((resolve, reject) => {
        const dUri = new Datauri();
        let image = dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

        cloudinary.uploader.upload(image.content, (err, url) => {
            if (err) return reject(err);
            return resolve(url);
        })
    });
}



function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function(err, response){
        if(err){
          // could just reject(err) instead
          reject('there was an error: ', err);
        } else {
          console.log('here is the resposne:', response);
          resolve('recovery email sent');
        }
      });
    });
  }

module.exports = { uploader, sendEmail };


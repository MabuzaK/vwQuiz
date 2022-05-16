"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");

const {Survey,User } = require("../models");

const home = async(req, res) => {
    res.render('index', { layout: "./layouts/layout", title: "Survey" })
}
const srv = async(req, res) => {
    res.render('survey', { layout: "./layouts/layout", title: "Survey" })
}

const suc = async(req, res) => {
    res.render('successPage', { layout: "./layouts/layout", title: "Survey" })
}


const add_answers = async(req, res) => {
    console.log(req.body)
    const {name,email,answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13} = req.body

    await Survey.create({
       name:name,
       email:email,
       answer1:answer1,
       answer2:answer2,
       answer3:answer3,
       answer4:answer4,
       answer5:answer5,
       answer6:answer6,
       answer7:answer7,
       answer8:answer8,
       answer9:answer9,
       answer10:answer10,
       answer11:answer11,
       answer12:answer12,
       answer13:answer13

    }).then((survey) => {
        console.log(survey)
    
        main()
        
          res.render('successPage', { layout: "./layouts/layout", title: "Success" })
    })
        async function main() {
          let testAccount = await nodemailer.createTestAccount();

          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
            },
          });

          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Kulani Mabuza" <mrmabuzakk@gmail.com>',
            to: "Pearls@sellsmarter.co.za",
            subject: "VW Questionnaire", 
            text: "Hi, Please check the database, there is a new Questionnaire submission.",
         html: "<h1>Hi,</h1><p>Please check the database, there is a new questionnaire submission.</p>",
          });

          console.log("Message sent: %s", info.messageId);

          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }

        main().catch(console.error);

    }

const add_user = async(req, res) => {
    const {name} = req.body

    await User.create({
       name:name,
   
    }).then((user) => {
        console.log(user)
       username: user.name,
          res.render('survey', { layout: "./layouts/layout", title: "Success" })
    })
}

module.exports = {
    home,
    add_answers,
    srv,
    add_user,
    suc
}
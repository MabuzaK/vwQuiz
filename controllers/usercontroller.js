"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");

const {Questionnaire,User } = require("../models");

const home = async(req, res) => {
    res.render('index', { layout: "./layouts/layout", title: "Questionnaire" })
}
const question = async(req, res) => {
    res.render('Questionnaire', { layout: "./layouts/layout", title: "Questionnaire" })
}

const suc = async(req, res) => {
    res.render('successPage', { layout: "./layouts/layout", title: "Questionnaire" })
}


const add_answers = async(req, res) => {
    console.log(req.body)
    const {
        name,email,answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,
        answer15,answer16,answer17,answer18,answer19,answer20,answer21,answer22,answer23,answer24,answer25,answer26,answer27,answer28,answer29,
        answer30,answer31,answer32,answer33,answer34,answer35,answer36,answer37,answer38,answer39,answer40,answer41,answer42,answer43,answer44,
        answer45,answer46,answer47,answer48,answer49,answer50,answer51,answer52,answer53,answer54,answer55,answer56,answer57,answer58,answer59,
        answer60,answer61,answer62,answer63,answer64,answer65,answer66,answer67,answer68,answer69,answer70,answer71,answer72,answer73,answer74,
        answer75,answer76,answer77,answer78,answer79,answer80,answer81,answer82,answer83,answer84
    } = req.body

    await Questionnaire.create({
    name: name,
    email: email,
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
    answer4: answer4,
    answer5: answer5,
    answer6: answer6,
    answer7: answer7,
    answer8: answer8,
    answer9: answer9,
    answer10: answer10,
    answer11: answer11,
    answer12: answer12,
    answer13: answer13,
    answer14: answer14,
    answer15: answer15,
    answer16: answer16,
    answer17: answer17,
    answer18: answer18,
    answer19: answer19,
    answer20: answer20,
    answer21: answer21,
    answer22: answer22,
    answer23: answer23,
    answer24: answer24,
    answer25: answer25,
    answer26: answer26,
    answer27: answer27,
    answer28: answer28,
    answer29: answer29,
    answer30: answer30,
    answer31: answer31,
    answer32: answer32,
    answer33: answer33,
    answer34: answer34,
    answer35: answer35,
    answer36: answer36,
    answer37: answer37,
    answer38: answer38,
    answer39: answer39,
    answer40: answer40,
    answer41: answer41,
    answer42: answer42,
    answer43: answer43,
    answer44: answer44,
    answer45: answer45,
    answer46: answer46,
    answer47: answer47,
    answer48: answer48,
    answer49: answer49,
    answer50: answer50,
    answer51: answer51,
    answer52: answer52,
    answer53: answer53,
    answer54: answer54,
    answer55: answer55,
    answer56: answer56,
    answer57: answer57,
    answer58: answer58,
    answer59: answer59,
    answer60: answer60,
    answer61: answer61,
    answer62: answer62,
    answer63: answer63,
    answer64: answer64,
    answer65: answer65,
    answer66: answer66,
    answer67: answer67,
    answer68: answer68,
    answer69: answer69,
    answer70: answer70,
    answer71: answer71,
    answer72: answer72,
    answer73: answer73,
    answer74: answer74,
    answer75: answer75,
    answer76: answer76,
    answer77: answer77,
    answer78: answer78,
    answer79: answer79,
    answer80: answer80,
    answer81: answer81,
    answer82: answer82,
    answer83: answer83,
    answer84: answer84

    }).then((Questionnaire) => {
        console.log(Questionnaire)
    
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
          res.render('Questionnaire', { layout: "./layouts/layout", title: "Success" })
    })
}

module.exports = {
    home,
    add_answers,
    question,
    add_user,
    suc
}
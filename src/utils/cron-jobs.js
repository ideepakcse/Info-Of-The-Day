const cron = require('node-cron');
const ejs = require('ejs');

const {GMAIL_EMAIL,MAIL_TO,SUBJECT}= require('../configs/server-config');

const { FactService } = require('../services');
const factService = new FactService();

const { UserService } = require('../services');
const userService = new UserService();

const mail={
    mailFrom : GMAIL_EMAIL,
    subject : SUBJECT
}


var ind = 0;

function scheduleCrons() {
    cron.schedule('0 6 * * *', async () => { //cron for every morning 06:00 AM
        const facts = await factService.getAll();
        const currFact = facts[ind];
        console.log(currFact);
        const content = currFact.content;
        const users = await userService.getAll();
        users.map(async function(user){
            const person = user.name;
            const mailTO = user.email;
            const data = await ejs.renderFile(__dirname +"/template.ejs", { content, person });
            await factService.sendEmail(mail.mailFrom,mailTO,mail.subject,data);
        });
        ind++;
    });
}

module.exports = scheduleCrons;
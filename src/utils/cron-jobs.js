const cron = require('node-cron');

const {GMAIL_EMAIL,MAIL_TO,SUBJECT}= require('../configs/server-config');

const { FactService } = require('../services');
const factService = new FactService();

const mail={
    mailFrom : GMAIL_EMAIL,
    mailTO : MAIL_TO,
    subject : SUBJECT
}

var ind = 0;

function scheduleCrons() {
    cron.schedule('*/1 * * * *', async () => {
        const facts = await factService.getAll();
        const currFact = facts[ind];
        console.log(currFact);
        await factService.sendEmail(mail.mailFrom,mail.mailTO,mail.subject,currFact.content);
        ind++;
    });
}

module.exports = scheduleCrons;
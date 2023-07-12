const {FactRepository} = require('../repositories');

const { Mailer } = require('../configs');

class FactService {

    constructor() {
        this.factRepository = new FactRepository();
    }

    async create(data)
    {
        try {
            const fact = await this.factRepository.create(data);
            return fact;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id)
    {
        try {
            const fact = await this.factRepository.get(id);
            return fact;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll()
    {
        try {
            const facts = await this.factRepository.getAll();
            return facts;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async sendEmail(mailFrom, mailTo, subject, data) {
        try {
            const response = await Mailer.sendMail({
                from: mailFrom,
                to: mailTo,
                subject: subject,
                html: data
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = FactService;
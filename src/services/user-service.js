const {UserRepository} = require('../repositories');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data)
    {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id)
    {
        try {
            const user = await this.userRepository.get(id);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll()
    {
        try {
            const users = await this.userRepository.getAll();
            return users;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id)
    {
        try {
            const user = await this.userRepository.destroy(id);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    

}

module.exports = UserService;
const {UserService}=require('../services');
const userService = new UserService();

async function createUser(req ,res) {
    try{
        const response = await userService.create({
            email: req.body.email,
            name: req.body.name
        });
        return res.status(201).json({
            success:true,
            message:'sucessfully created a user',
            data: response,
            error:{}
        });
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong while creating user',
            data:{},
            error:error
        });
    }
}

module.exports = {
    createUser
}
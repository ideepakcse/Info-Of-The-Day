const {FactService}=require('../services');
const factService = new FactService();

async function createFact(req ,res) {
    try{
        const response = await factService.create({
            content: req.body.content,
        });
        return res.status(201).json({
            success:true,
            message:'sucessfully created a fact',
            data: response,
            error:{}
        });
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong while creating fact',
            data:{},
            error:error
        });
    }
}

module.exports = {
    createFact
}
const CrudRepository=require('./crud-repository');

const { Fact }=require('../models');

class FactRepository extends CrudRepository{
    constructor(){
        super(Fact);
    }
}

module.exports=FactRepository;
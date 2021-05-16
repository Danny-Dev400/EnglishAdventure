const models = require('../models/index');

exports.listar = async (req, res, next) => {
    try {
        const user = await models.videos.findAll();
         if(user){
             res.status(200).json(user);
         }else{
             res.status(404).send({message:'There is not user in the system'});
         }
     } catch (error) {
         res.status(500).send({message: 'Error!!'});
         next(error);
    }
};
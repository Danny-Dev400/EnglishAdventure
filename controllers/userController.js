const models = require('../models/index');
const bcrypt = require('bcryptjs')

exports.login = async(req, res, next) =>{
    try{
        const user = await models.Usuario.findOne({ where: {email:req.body.email} })
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(passwordIsValid){
                res.status(200).send({
                    auth: true,
                    user: user
                });
            }else{
                res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!", user:user });  
            }
        }else{
            res.status(404).send({ auth: false, accessToken: null, reason: "Invalid User!" }); 
        }
    }catch(e){
        res.status(500).send({
            error: 'No se pudo realizar al peticion'
        })
        next(e);
    }
};

exports.listar = async (req, res, next) => {
    try {
        const user = await models.Usuario.findAll();
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

exports.register = async (req, res, next) => {
    try {
        const user = await models.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            res.status(409).send({
                message: 'Este email ya esta registrado, intenta con otro diferente'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.Usuario.create(req.body);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
}; 

exports.update = async (req, res, next) => {
    try {
        const user = await models.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            const user = await models.Usuario.update(req.body,
            {
            where: {
                email: req.body.email
            }            
        });
            res.status(200).json(user);
        }else{
            req.status(404).send({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
}
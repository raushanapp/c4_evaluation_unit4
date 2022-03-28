
const User = require("../model/user.model")

const register = async (req,res) =>{

    try{
        let  user = await User.findOne({email:req.body.email});

        if (user) return res.status(500).send("user already exists please choose a another eamil ");

        user = await User.create(req.body)

        return res.status(200).send({user:user})

    }catch (err){
       return res.status(400).send({err:err.message});
    }
};

const login = async (req,res) =>{

    try{
        let  user = await User.findOne({email:req.body.email});

        if (!user) return res.status(500).send("wrong email and password ");

        return res.status(200).send({user:user})

    }catch (err){
       return res.status(400).send({err:err.message});
    }
}


module.exports = {
    register,
    login,
}
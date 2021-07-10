const {createUser}=require('../services/user.service');

let userController={};

userController.createNewUser=async(req,res)=>{
            
    try{

        const{firstName,lastName,email}=req.body;
        const user={
            firstName,
            lastName,
            email
        }

        const newUser = await createUser(user);
        console.log(newUser);

        res.json({
            code:201,
            msg:"Usuario Creado Exitosamente"
        })

    }catch(err){

        console.log(err);

        res.json({
            code:500,
            msg:"Ha ocurrido un error : "+err
        })
    }
}


module.exports=userController;
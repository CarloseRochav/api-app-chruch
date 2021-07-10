const {User} =require('../../db/models');

let userService ={}

userService.createUser= async (object)=>{

   try{    

    console.log(User);

    const result=await User.create(object);
    return result;


   }catch(err){
      return err;   
    }

}

module.exports=userService;
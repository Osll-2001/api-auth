import UserService from "../services/user.service.js"

const UserController={
    getAll:async(req,res)=>{
        try{
            const users=await UserService.getAll()
            return res.status(200).send(users)
        }catch(e){
            return res.status(400).send({status:400,message:e.message})
        }
    }
}

export default UserController
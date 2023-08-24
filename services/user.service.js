import User from "../models/user.model.js"

const UserService={
    getAll: async ()=>{
        try{
            const users=await User.find()
            return users
        }catch(e){
            throw Error("Error: ",e.message)
        }
    }
}

export default UserService
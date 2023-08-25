import User from "../models/user.model.js"

const UserService={
    getByEmail: async(email)=>{
        try{
            const user=await User.findOne({email})
            console.log(user)
            return user
        }catch(e){
            throw Error("Error: ",e.message)
        }
    },
    register:async(email,hashed,salt)=>{
        try{
            const newUser=await User.create({email,password:hashed,salt})
            return newUser
        }catch(e){
            throw Error("Error: ",e.message)
        }
    }
}

export default UserService
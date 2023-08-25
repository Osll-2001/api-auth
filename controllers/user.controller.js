
import UserService from "../services/user.service.js"
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"

const signToken=_id=> Jwt.sign({_id},"mi-secreto")

const UserController={
    register: async(req,res)=>{
        const {body}=req
        try{
            const isUser=await UserService.getByEmail(body.email)
            if(isUser){
                return res.status(200).send({message:"Email en uso"})
            }
            const salt= await bcrypt.genSalt()
            const hashed=await bcrypt.hash(body.password,salt)
            const user=await UserService.register(body.email,hashed,salt)
            const signed= signToken(user._id)
            return res.status(200).send(signed)
        }catch(e){
            return res.status(400).send({message:e.message})
        }
    }
}

export default UserController
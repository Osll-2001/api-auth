import Express from "express"
import UserController from '../controllers/user.controller.js'
const UserRouter=Express.Router()

UserRouter.post('/register',UserController.register)

export default UserRouter
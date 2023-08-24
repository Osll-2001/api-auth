import Express from "express"
import UserController from '../controllers/user.controller.js'
const UserRouter=Express.Router()

UserRouter.get('/',UserController.getAll)

export default UserRouter
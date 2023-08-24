import UserRouter from "./user.route.js"

const routerApi=(app)=>{
    app.use('/users',UserRouter)    
}

export default routerApi
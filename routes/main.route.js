import UserRouter from "./user.route.js"

const routerApi=(app)=>{
    app.use('/',UserRouter)    
}

export default routerApi
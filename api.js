import Express from "express"
import mongoose from "mongoose"
import routerApi from "./routes/main.route.js"
const port=3500
const app=Express()

mongoose.connect('mongodb+srv://osll:osll2001@cluster0.79prd.mongodb.net/api_auth?retryWrites=true&w=majority')


app.use(Express.json())

routerApi(app)

app.listen(port,()=>{
    console.log("RUNNING IN PORT",port)
})
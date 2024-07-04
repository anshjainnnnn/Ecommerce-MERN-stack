const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://anshjain454:jXE7b0dDkVkNb3zZ@cluster0.mxzzple.mongodb.net/love?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
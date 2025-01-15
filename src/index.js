const express  = require("express")
const app = express();
const apiRoutes = require('./routs')

const {ServerConfig } = require("./config")

 app.use('/api', apiRoutes)


app.listen(ServerConfig.PORT,()=>{
    console.log(`server is Runnign on the port ${ServerConfig.PORT}`);
  
})
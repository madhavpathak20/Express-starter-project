const express= require('express');
const serverConfig = require('./config/serverConfig');
const app = express();
//procee.env to access environment variables
app.listen(serverConfig.PORT,()=>{
    console.log(`server started at Port ${serverConfig.PORT}..`);
    console.log(process.env.PORT);
})

const express= require('express');
const serverConfig = require('./config/dbConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:'true'}));

//procee.env to access environment variables
app.listen(serverConfig.PORT || 5500,async()=>{
    await connectDB();
    console.log(`server started at Port ${serverConfig.PORT || 5500}..`);
    // console.log(process.env.PORT);
})

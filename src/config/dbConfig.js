const mongoose=require('mongoose');

const serverConfig=require('./serverConfig');

//the below function helps us to connect us to a mongodb server
async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL, { 
            
        });
        console.log('Successfully connected to the mongodb server...');
    }catch(error){
        console.log('Not able to connect to the mongo DB server');
        console.log(error);
    }
}

module.exports=connectDB;
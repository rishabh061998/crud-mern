import mongoose from "mongoose"


const Connection=async(username,password)=>{

    const URL=`mongodb://${username}:${password}@ac-ummwejy-shard-00-00.cc5452b.mongodb.net:27017,ac-ummwejy-shard-00-01.cc5452b.mongodb.net:27017,ac-ummwejy-shard-00-02.cc5452b.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-518wjf-shard-0&authSource=admin&retryWrites=true&w=majority`
   try{
   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
   console.log("database connected successfully")
   }
   catch(error){
    console.log("Error while connecting with the database",error)
   }
}

export default Connection;

//useUnifiedTopology:mongodb uses internally server discovery and montoring engine, it says that dont use old depreicated one, use the new one
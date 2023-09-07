// import your node server here
import app from './api/server.js';
import mongoose from 'mongoose';
import dotenv from "dotenv"

const PORT = 9000;

dotenv.config();

// START YOUR SERVER HERE

app.listen(PORT, ()=> console.log(`server is runnig on port ${PORT}`))


// mongoose.connect(process.env.MONGO_URL, (err)=>{
//     if(err){
//         console.log(`something went wrong ${err}` )
//     }else{
//         console.log("mongodb connected");
//     }
// // });
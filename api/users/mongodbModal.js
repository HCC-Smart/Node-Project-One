import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    //
    // id:{
    //     type: Number,
    //     required: true
    // },
    name:{
        type: String,
        required: true
    },
    bio:{
        type:String,
        required:true
    },
  
},{timestamps:true});

const UserModal = mongoose.model("User", UserSchema );

export default UserModal;
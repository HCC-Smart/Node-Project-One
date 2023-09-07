// Initialize express app
import express from "express"
// import UserModal from "./users/mongodbModal.js";
import { find, findById, insert, remove, update } from "./users/model.js";

const app = express();

app.use(express.json());




// GET ALL USERS
app.get('/api/users' , async(req,res)=>{
    try {
        const Allusers = await find();
        res.json({"status": true, "All users": Allusers})
    } catch (err) {
        res.json({"status": false, "Message": err})

    }
})

// GET USER BY ID

app.get('/api/users/:id' , async(req,res)=>{
    try {
        const usersById = await findById(req.params.id);
        res.json({"status": true, "users by id": usersById})
    } catch (err) {
        res.json({"status": false, "Message": err})

    }
})
// CREATE A NEW USER
app.post('/api/users/create' , async(req,res)=>{
    try {
        const AddUser = await insert(req.body);
        res.json({"status": true, "successfully added": AddUser})
    } catch (err) {
        res.json({"status": false, "Message": err})

    }
})
// UPDATE A USER
app.post('/api/users/update/:id' , async(req,res)=>{
    try {
        const updateUser = await update(req.params.id, req.body);
        res.json({"status": true, "succesfully updated": updateUser})
    } catch (err) {
        res.json({"status": false, "Message": err})

    }
})
// DELETE A USER
app.delete('/api/users/delete' , async(req,res)=>{
    try {
        const deleteUser = await remove();
        res.json({"status": true, "deleted": deleteUser})
    } catch (err) {
        res.json({"status": false, "Message": err})

    }
})
// export default app
export default app;



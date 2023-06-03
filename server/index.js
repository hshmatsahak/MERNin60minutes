const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://hshmatsahak:O91RcyEy9gSxtroz@cluster0.augwb6s.mongodb.net/Mern60minDatabase?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
    try{
        result = await UserModel.find({});
        res.json(result);
    } catch(error){
        res.json(error);
    }
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
   console.log("Server is Running");
});





const express=require('express');
// const comm=require('../modeles/comment');
var router=express.Router();


const mongoose = require("mongoose");
// const HttpError = require("../Models/http-error");
const Comment = require('../modeles/vm');




 var uri = "mongodb://zakaria:ok@clusterzakaria-shard-00-00.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-01.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-02.dmmf8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-w7q5sl-shard-0&authSource=admin&retryWrites=true&w=majority";



mongoose.connect(uri).then(() => {
    console.log('connected successfuly');
}).catch((err) => {
    console.log("connection failed");
});

const getVm=async (req,resp,next)=>{
    let result = await Comment.find().exec();
    const vms=result.filter((c => {
        // I use == instead of === because they have != types , and I dont want to do a cast
        // console.log("comments : " + filmId + typeof filmId + typeof c.filmId);
        return 1 == 1;
    }));
    //resp.send(result);
    if (!vms || vms.length === 0) {
        return resp.json({ vm: "vms does not Exist" });
       
    }
    resp.json({ vms });
    //console.log({result});
    
};
const postVm=async (req,resp,next)=>{
    const {nom,ip,se,etat} =req.body;
    console.log(nom);
    console.log(etat);
    const createdComment=new Comment({
       nom,
       ip,
       se,
       etat
    }
)
    
const result=await createdComment.save()
console.log("ok");
resp.send({result});
    

    
    
};

exports.getVm=getVm;
exports.postVm=postVm;


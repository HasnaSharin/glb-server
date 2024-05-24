const mongoose = require('mongoose')
const Model = require('../models/glbmodel')

exports.uploadModel = async(req,res)=>{
    const newModel = new Model({
        name:req.body.name,
        fileUrl:req.file.filename
    })
    console.log(newModel);
    try{
       await newModel.save()
       return res.status(200).json({message:"Model uploaded"})


    }catch(err){
        return res.status(500).json({message:"Internal server error"},err)
       console.log(err);
    }
}

exports.getModels =async(req,res)=>{
    try{
        const allModels = await Model.find()
        return res.status(200).json(allModels)

    }catch(err){
       return res.status(500).json({message:"error occured"},err)
    }
}
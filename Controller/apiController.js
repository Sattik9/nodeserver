const apiModel=require('../Model/UserModel');

//For Creating Users
const create=async(req,res)=>{
    try{
        newUser=new apiModel({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city
        })
        const result=await newUser.save();
        return res.status(200).json({
            success:true,
            message:"Created Successfully!",
            data:result
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error"
        })
    }
}

//For Viewing Users
const read=async(req,res)=>{
    try{
        newUser=await apiModel.find();
    
       return res.status(200).json({
            success:true,
            message:"Fetched Successfully!",
            data:newUser
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error"
        })
    }
}

//For Updating Users
const update=async(req,res)=>{
    try{
        newUser=await apiModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
        return res.status(200).json({
            success:true,
            message:"Updated Successfully!",
            data:newUser
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error"
        })
    }
}

//For Deleting particular user
const deletion=async(req,res)=>{
    try{
        newUser=await apiModel.findByIdAndDelete(req.params.id);
    
        return res.status(200).json({
            success:true,
            message:"Deleted Successfully!",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error"
        })
    }
}

//For the deletion of All Users
const deleteMany=async(req,res)=>{
    try{
        newUser=await apiModel.deleteMany({});
    
        return res.status(200).json({
            success:true,
            message:"all the datas deleted Successfully!",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error"
        })
    }
}

module.exports={create,read,update,deletion,deleteMany}
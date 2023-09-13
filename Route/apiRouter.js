const express=require('express');
const Route=express.Router();
const ApiController=require("../Controller/apiController");
//Read Route
Route.get("/student",ApiController.read);

//Create Route
Route.post("/create",ApiController.create);

//Update Route
Route.put("/update/:id",ApiController.update);

//Delete Route
Route.delete("/delete/:id",ApiController.deletion);

//Delete All Route
Route.delete("/deleteall",ApiController.deleteMany);
module.exports=Route;



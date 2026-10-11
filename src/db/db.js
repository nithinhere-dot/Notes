const mongoose=require("mongoose");
require("dotenv").config();

const MONGOOSE_STRING=process.env.MONGOOSE_STRING
async function connectionDB(){

    await mongoose.connect(MONGOOSE_STRING)

    console.log("Connected to db")

}

module.exports = connectionDB;
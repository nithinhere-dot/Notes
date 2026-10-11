//server create

const express=require('express')
const noteModel=require("./models/note.model")

const app=express() //server instance created
app.use(express.json()) //an middleware helps express to read the data send from frontend

const notes=[]


/*title,description*/
//Post /notes

app.post("/notes",async (req,res)=>{
    const data=req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find()

    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })

})

app.delete('/notes/:id',async (req,res)=>{

    const id=req.params.id

    await noteModel.findOneAndDelete({
         _id:id
    }) 
    res.status(200).json({
        message:"Note deleted successfully"
    })
})


app.patch('/notes/:id',async(req,res)=>{
    const id=req.params.id

    const description=req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})
    

    res.status(200).json({
        message:"Note Updated successfully"
    })
})


module.exports = app;
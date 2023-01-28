const express = require("express")
const { connection } = require("./Config/db")
const app = express()
require("dotenv").config();
const cors = require("cors")
const { QuestionModel } = require("./Models/ques.model")
const { QuizModel } = require("./Models/quiz.model")




app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send({'msg':`Welcome to our Quiz App, which is running at port ${process.env.PORT}`})
})

app.post("/ques/add", async(req, res)=>{
try{
const payload = req.body.results
await QuestionModel.insertMany(payload)
res.send({"err":"questions added successfully"})
}catch(error){
    console.log(error)
    res.send({"err":"something went wrong"})
}
})



app.get("/ques", async(req, res)=>{
    const query = req.body.query
    try{
  let questions =   await QuestionModel.find(query).limit(10)
  res.send({questions})
    }catch(error){
        console.log(error)
        res.send({"err":"something went wrong"})
    }
    })









app.post("/quiz/add", async(req, res)=>{
try{
const payload = req.body
const quiz = new QuizModel(payload)
await quiz.save()
res.send({"err":"quiz completed and saved successfully"})
}catch(error){
    console.log(error)
    res.send({"err":"something went wrong"})
}
})

app.get("/quiz/result", async(req, res)=>{
    try{
  let quiz =   await QuizModel.find()
  res.send({quiz})
    }catch(error){
        console.log(error)
        res.send({"err":"something went wrong"})
    }
    })

app.get("/quiz", async(req, res)=>{
    try{
  let quizes =   await QuizModel.find()
  res.send({quizes})
    }catch(error){
        console.log(error)
        res.send({"err":"something went wrong"})
    }
    })

  





app.listen(process.env.PORT, async(req, res)=>{
    try{
     await connection;
     console.log('Connected to db at port', process.env.PORT)
    }catch(err){
     console.log(err)
    }
 })
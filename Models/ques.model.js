const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
  category: "",
  type: "",
  difficulty: "",
  question:"",
  correct_answer: "",
  incorrect_answers:[]
},{versionKey:false});


const QuestionModel = mongoose.model("question", questionSchema);

module.exports = { QuestionModel };

const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
  user: "",
  category: "",
  difficulty: "",
  no_of_quesstion: "",
  correct:"",
  score: "",
  percentage:""
},{versionKey:false});

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = { QuizModel };

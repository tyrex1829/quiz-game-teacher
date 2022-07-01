const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const teacherrr = "Teacher";
const studenttt = "Student";
const teachersConst = "Quiz for students";
const studentsConst = "Your result of quiz is";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {
    teacherButton: teacherrr,
    studentButton: studenttt
  });
});

app.get("/teacher", function(req, res){
  res.render("teachers",{
    teachercontentt: teachersConst
  });
});

app.get("/student", function(req, res){
  res.render("students",{
    studentcontentt: studentsConst
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});

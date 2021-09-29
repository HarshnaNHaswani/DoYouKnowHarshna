//importing readLineSync package & chalk
var readlineSync = require("readline-sync");
var chalk01 = require('chalk');

//Header
console.log(chalk01.red.bold.bgWhite("-----HOW MUCH DO YOU KNOW HARSHNA?-----\n"));

// Initialising Score
var score = 0;

//forming Q&A objects inside an array
var questions = [
    {
    question: "What is Harshna's favorite sport?",
    choice: ["Cricket", "Tennis", "Kabaddi"],
    answer: "Cricket"
  }, {
    question: "What is Harshna's favorite color?",
    choice: ["red", "grey", "yellow"],
    answer: "grey"
  }, {
    question: "What is Harshna's favortive scenery?",
    choice: ["skyline", "mountains", "fields"],
    answer: "skyline"
  }, {
    question: "What is Harshna's favorite genre?",
    choice: ["thriller", "Humor", "Horror"],
    answer: "thriller"
  }, {
    question: "Does Harshna know how to cook?",
    choice: ["yes", "no"],
    answer:"yes"
  },
   ]

//getting choice
function getChoice(choice){
  for(var i = 0; i < choice.length; i++)
  {
    console.log(chalk01.blue(choice[i]));
  }
  console.log();
}

function checkAnswer(answer, playerAnswer){
  if (playerAnswer.toUpperCase() === answer.toUpperCase()){
      score++;
      console.log(chalk01.yellow("Correct answer! Yayy!!\n"));
  } else{
      console.log(chalk01.red("Wrong answer! Better luck next time!\n"));
  }
}
 // function to quiz the player
function quiz(question, choice, answer){
   
    //getting user's answer
    console.log(chalk01.greenBright.bold.bgBlack(question));
    
    getChoice(choice);

    var playerAnswer = readlineSync.question();
    
    checkAnswer(answer, playerAnswer)

}

  //getting user's name
    var playerName = readlineSync.question("Heyya! I'm your Quiz Buddy, Star. What's your name?");
    if (!readlineSync.keyInYNStrict(`Are you ready  ${playerName} ?`)) {
    // Key that is not `Y` was pressed.
      if (readlineSync.keyInYNStrict("Do you wish to Quit?")) {
          // Key that is`Y` was pressed.
            process.exit();
      }
      else console.log("Well then, you have decided to play. Great Spirit!!!")
    }

 // calling quiz function for each question in questions array
 for(var i = 0; i < questions.length; i++){
   quiz(questions[i].question, questions[i].choice, questions[i].answer);
 }

//highscore
var highscore =[{
  name:"R",
  score: "5",
},{
  name: "s",
  score: "4",
},{
  name: "T",
  score: "0",
}
]

// Displaying Score & highscore
console.log("\n--------\n" + chalk01.magenta.bold.bgWhite.underline("Your score: ", score) + "\n");
 console.log(chalk01.magenta.bold.bgWhite.underline("\n--------\nHighscore:"));

 for(var i = 0; i < highscore.length; i++){
   console.log(i + 1, ". ",highscore[i].name," ", highscore[i].score);
 }

  for(var i = 0; i < highscore.length; i++){
  if(score > highscore[i].score){
      console.log(chalk01.inverse.bold.italic(`\n\nCONGRATULATIONS ${playerName}!!!\n You have beaten`+ chalk01.underline(` position ${i+1} highscore`) + `. Plzz` + chalk01.underline(` send a screenshot to Harshna`) + ` so she can update the highscore list.`));
      break;
    }
 }
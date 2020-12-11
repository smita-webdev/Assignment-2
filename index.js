//Adding libs
const readline = require("readline-sync");
const chalk =require("chalk");
const log = console.log;

//Displaying heading
log(chalk.red.bold.underline("Let's dig into JS History"));
log(" ");

//Input User info
let userName = readline.question(chalk.cyan.bold("What is your name ?"));
log(" ");

//Display User name 
log(chalk.black.bgYellowBright.italic("Welcome to the JS history Quiz"+" "+userName.toUpperCase()+"!!"));

//Display game rules
log(" ");
log(chalk.cyan("Answer in format a or b only."));
log(" ");
//Questions list stored in form of array of Objects
let questionsList =[
  {   
      question: chalk.yellow(`JavaScript is invented by
      a:James Gosling
      b:Brendan Eich\n`),
      answer:"b"
},
{   
      question: chalk.yellow(`JavaScript was invented at
      a:Netscape
      b:Sun Microsystem\n`),
      answer:"a"
},
{   
      question: chalk.yellow(`JavaScript was initially known as
      a:ActionScript
      b:Mocha\n`),
      answer:"b"
}
]

let score = 0;
function exitGame(list){
  
  let ans=readline.keyIn(chalk.cyan("Press q to quit or any other key to begin:"));

    if(ans==='q'){
      log("Good Bye"+" "+userName.toUpperCase()+"!!");
    }else{
      for(let ques of list){
      quiz(ques.question,ques.answer);
      
      }
      log(chalk.red.bold("Game over !! You scored:"+" "+score+" "+"!!"));
    }

}
exitGame(questionsList);

function quiz(question,answer){
  
  let userAns = readline.question(question);

  if(userAns.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.bgCyan.italic("You are right!"));
    console.log(" ");
    score++;
  }else{
    console.log(chalk.bgMagenta.italic("You are wrong!"));
    console.log(" ");
    score--;
  }
  
}




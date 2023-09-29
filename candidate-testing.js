const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", 3];
let candidateAnswers = [""]; //No defining makes output undefined, = []; just has correct answers no user's answers, = ""; just has correct answers no user's answers, = [""]; just has correct answers no user's answers


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name? ");
}
console.log(candidateName);

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    console.log(candidateAnswers = input.question(questions[i]));

//return (candidateAnswers = input.question(questions[i])); This line of code asks the first question twice and comes out with one answer
//return (candidateAnswers = console.log(input.question(questions[i]))); This line of code asks the first question twice & prints the user's answer and comes out with an undefined
//console.log(questions[i]);
//candidateAnswers = input.question(questions);
//console.log(candidateAnswers); This line of code proves that candidateAnswers was changed when the user answered but it doesn't apply to outside the function
} 
//return candidateAnswers;
//console.log(candidateAnswers); While this console.log only prints out the very last answer and not every answer that was inputted
}
//console.log(candidateAnswers); This doesn't print because it's outside the function

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`${candidateAnswers} ${correctAnswers}`);

/*
console.log(candidateAnswers= askQuestion() + correctAnswers); This line of code reasks the questions but doesn't state the users answers alongside the correct answers. Try something else.
console.log(`${askQuestion()} ${correctAnswers}`); This line of code has the same issue. It keeps asking the question again
console.log(`${candidateAnswers = askQuestion()} ${correctAnswers}`); This line of code Doesn't list user's answers and only has undefined alongside correct answers
console.log(`${candidateAnswers[]} ${correctAnswers}`); Has no users answers and only the correct answers
console.log(`${candidateAnswers[0][1]} ${correctAnswers}`); [1] is undefined with just [0] by itself then it's still undefined
*/

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
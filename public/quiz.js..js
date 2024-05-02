//Details
var quiz = [
  {
    qution: "Who is the pm of India?",
    op1: "Anmol",
    op2: "Pk",
    op3: "Modi",
    op4: "Ankush",
    correctAns: "Modi",
  },
  {
    qution: "what is the color of Sky?",
    op1: "red",
    op2: "blue",
    op3: "yellow",
    op4: "white",
    correctAns: "blue",
  },
  {
    qution: "what is the color of water?",
    op1: "white",
    op2: "blue",
    op3: "sky",
    op4: "no color",
    correctAns: "no color",
  },
];

//array of correct answer given by user
var stored = [];

//to iterate details
for (const index in quiz) {
  console.log("Q. " + quiz[index].qution);
  console.log("1 " + quiz[index].op1);
  console.log("2 " + quiz[index].op2);
  console.log("3 " + quiz[index].op3);
  console.log("4 " + quiz[index].op4);
  var answer = prompt("inter your answer: ");
  if (answer.toLowerCase() == quiz[index].correctAns.toLowerCase()) {
    stored.push(answer);
  } else {
    var a = "incorrect answer";
  }
}

//to print result
console.log(
  "\nResult= " + stored.length + " out of " + quiz.length
);

//condition if user want to check correct answers
const toCheck = prompt("Type Y/N to check correct Answer");
if (toCheck.toLowerCase() == "y") {
  console.log("\nCorrect Answer are Given below:\n");
  for (const index in quiz) {
    console.log("Q. " + quiz[index].qution);
    console.log("Ans. " + quiz[index].correctAns);
  }
} else {
  console.log("\nThank you for participation!");
}

import { useState } from "react";
import ListItem from "./ListItem";
interface ChildProps {
  showResult: (marks: number) => void;
  subject: any;
}

const Question: React.FC<ChildProps> = ({ showResult, subject }) => {
  var questionSets = [
    //html question
    [
      {
        qution: "HTML stand for?",
        op1: "HighText Machine Language",
        op2: "HyperText and links Markup Language",
        op3: "HyperText Markup Language",
        op4: "None of these",
        correctAns: 3,
      },
      {
        qution: "How to create a hyperlink in HTML",
        op1: '<a href = "/www.example.com">example</a>',
        op2: '<a url = "javatpoint"> example< /a>',
        op3: '<a link = "www.javatpoint.com">example</a>',
        op4: "<a> www.javatpoint.com example</a>",
        correctAns: 1,
      },
      {
        qution: "How to create an ordered list",
        op1: "<ul>",
        op2: "<ol>",
        op3: "<li>",
        op4: "<i>",
        correctAns: 2,
      },
      {
        qution: "How to insert an image in HTML?",
        op1: '<img href = "jtp.png" />',
        op2: '<img url = "jtp.png" />',
        op3: '<img link = "jtp.png" />',
        op4: '<img src = "jtp.png" />',
        correctAns: 4,
      },
      {
        qution: "How to add a background color in HTML?",
        op1: '<marquee bg color: "red">',
        op2: '<marquee bg-color = "red">',
        op3: '<marquee bgcolor = "red">',
        op4: '<marquee color = "red">',
        correctAns: 3,
      },
      {
        qution: " <input> is -",
        op1: "a format tag.",
        op2: "an empty tag.",
        op3: "All of the above",
        op4: "None of the above",
        correctAns: 2,
      },
      {
        qution: "How to create a checkbox in HTML?",
        op1: '<input type = "checkbox">',
        op2: '<input type = "button">',
        op3: "<checkbox>",
        op4: '<input type = "check">',
        correctAns: 1,
      },
      {
        qution: "HTML tags are enclosed in-",
        op1: "# and #",
        op2: "{ and }",
        op3: "! and ?",
        op4: "< and >",
        correctAns: 4,
      },
      {
        qution: "The <hr> tag is used for -",
        op1: "new line",
        op2: "vertical ruler",
        op3: "new paragraph",
        op4: "horizontal ruler",
        correctAns: 4,
      },
      {
        qution: "The tags in HTML are -",
        op1: "case-sensitive",
        op2: "in upper case",
        op3: "not case sensitive",
        op4: "in lowercase",
        correctAns: 3,
      },
    ],
    //css question
    [
      {
        qution: " What does CSS stand for?",
        op1: "Computer Style Sheets",
        op2: "Creative Style Sheets",
        op3: "Cascading Style Sheets",
        op4: "Colorful Style Sheets",
        correctAns: "Cascading Style Sheets",
      },
      {
        qution: "“box-sizing” property in CSS control?",
        op1: "Element visibility",
        op2: "Box shadows",
        op3: "Box model sizing",
        op4: "Font size",
        correctAns: "Box model sizing",
      },
      {
        qution: "set the font style to italic in CSS?",
        op1: "font-style: italic;",
        op2: "font-weight: italic;",
        op3: "style: italic;",
        op4: "italic: true;",
        correctAns: "font-style: italic;",
      },
      {
        qution: "In css what does h1 can be called as",
        op1: "selecter",
        op2: "Attribute",
        op3: "value",
        op4: "Tag",
        correctAns: "selecter",
      },
      {
        qution: "font-size can be called as",
        op1: "selecter",
        op2: "rule",
        op3: "property",
        op4: "property-name",
        correctAns: "property-name",
      },
      {
        qution: "Internal styles are written in",
        op1: "<style>…</style>",
        op2: "<css>…</css>",
        op3: "<stylesheet>…</stylesheet>",
        op4: "Both A. and B.",
        correctAns: "<style>…</style>",
      },
      {
        qution: "CSS comments are placed within",
        op1: "//",
        op2: "/* and */",
        op3: "<* and *>",
        op4: "<! And !>",
        correctAns: "/* and */",
      },
      {
        qution: "property is used to define text color?",
        op1: "text-color",
        op2: "color",
        op3: "font-color",
        op4: "Both A. and B.",
        correctAns: "color",
      },
      {
        qution: "valid values of font-style property?",
        op1: "italic, bold, bolder",
        op2: "normal, bold, italic",
        op3: "underline, bold, italic",
        op4: "inherit, italic, normal, oblique",
        correctAns: "inherit, italic, normal, oblique",
      },
      {
        qution: "valid values of text-align property?",
        op1: "left, middle, right",
        op2: "left, center, right",
        op3: "left, center, right, justify",
        op4: "left, middle, right, justify",
        correctAns: "left, center, right, justify",
      },
    ],
    //js Question
    [
      {
        qution: "Which type of JavaScript language is",
        op1: "Object-Oriented",
        op2: "Object-Based",
        op3: "Assembly-language",
        op4: "High-level",
        correctAns: "Object-Based",
      },
      {
        qution: "function and var are known as:",
        op1: "Keywords",
        op2: "Data types",
        op3: "Declaration statements",
        op4: "Prototypes",
        correctAns: "Declaration statements",
      },
      {
        qution: "correct way for calling the JS code?",
        op1: "Preprocessor",
        op2: "Triggering Event",
        op3: "RMI",
        op4: "Function/Method",
        correctAns: "Function/Method",
      },
      {
        qution: "which isn't considered as an error:",
        op1: "Syntax error",
        op2: "Missing of semicolons",
        op3: "Division by zero",
        op4: "Missing of Bracket",
        correctAns: "Division by zero",
      },
      {
        qution: "Which is an ternary operator:",
        op1: "?",
        op2: ":",
        op3: "-",
        op4: "+",
        correctAns: "?",
      },
      {
        qution: "operator returns false if both values are equal?",
        op1: "!",
        op2: "!==",
        op3: "!=",
        op4: "All of the above",
        correctAns: "!=",
      },
      {
        qution: "Which is not a keyword:",
        op1: "if",
        op2: "with",
        op3: "debugger",
        op4: "use strict",
        correctAns: "use strict",
      },
      {
        qution: "Which is not considered as statement",
        op1: "use strict",
        op2: "debugger",
        op3: "if",
        op4: "with",
        correctAns: "use strict",
      },
      {
        qution: "What is the purpose of toLocateString()",
        op1: "It returns a localised object representation",
        op2: "It returns a localized string representation of object",
        op3: "It return a local time in the string format",
        op4: "It return a parsed string",
        correctAns: "It returns a localized string representation of object",
      },
      {
        qution: "function which doesn't return a value is known?",
        op1: "Static function",
        op2: "Procedures",
        op3: "Method",
        op4: "Dynamic function",
        correctAns: "Procedures",
      },
    ],
    //accessibility Question
    [
      {
        qution: "Which type of JavaScript language is",
        op1: "Object-Oriented",
        op2: "Object-Based",
        op3: "Assembly-language",
        op4: "High-level",
        correctAns: "Object-Based",
      },
      {
        qution: "function and var are known as:",
        op1: "Keywords",
        op2: "Data types",
        op3: "Declaration statements",
        op4: "Prototypes",
        correctAns: "Declaration statements",
      },
      {
        qution: "correct way for calling the JS code?",
        op1: "Preprocessor",
        op2: "Triggering Event",
        op3: "RMI",
        op4: "Function/Method",
        correctAns: "Function/Method",
      },
      {
        qution: "which isn't considered as an error:",
        op1: "Syntax error",
        op2: "Missing of semicolons",
        op3: "Division by zero",
        op4: "Missing of Bracket",
        correctAns: "Division by zero",
      },
      {
        qution: "Which is an ternary operator:",
        op1: "?",
        op2: ":",
        op3: "-",
        op4: "+",
        correctAns: "?",
      },
      {
        qution: "operator returns false if both values are equal?",
        op1: "!",
        op2: "!==",
        op3: "!=",
        op4: "All of the above",
        correctAns: "!=",
      },
      {
        qution: "Which is not a keyword:",
        op1: "if",
        op2: "with",
        op3: "debugger",
        op4: "use strict",
        correctAns: "use strict",
      },
      {
        qution: "Which is not considered as statement",
        op1: "use strict",
        op2: "debugger",
        op3: "if",
        op4: "with",
        correctAns: "use strict",
      },
      {
        qution: "What is the purpose of toLocateString()",
        op1: "It returns a localised object representation",
        op2: "It returns a localized string representation of object",
        op3: "It return a local time in the string format",
        op4: "It return a parsed string",
        correctAns: "It returns a localized string representation of object",
      },
      {
        qution: "function which doesn't return a value is known?",
        op1: "Static function",
        op2: "Procedures",
        op3: "Method",
        op4: "Dynamic function",
        correctAns: "Procedures",
      },
    ],
  ];

  var [questions, setQuestions] = useState(questionSets[subject - 1]);
  var [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  var [correctAnswers, setCorrectAnswers] = useState(0);
  var [choosenOption, setChoosenOption] = useState(0);
  var changeOption = (option: number) => {
    setChoosenOption(option);
  };

  return (
    <div className="flex mt-20 justify-between ">
      {/* left container */}
      <div className="pr-14">
        <div className="mr-20">
          <p className="text-lg italic text-slate-600 dark:text-slate-400 font-sans mb-5">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="dark:text-white text-slate-600 font-semibold text-4xl">
            {questions[currentQuestionIndex].qution}
          </p>
        </div>
        <div>
          <input type="range" />
        </div>
      </div>
      {/* Right container */}
      <div>
        <div className="space-y-6 ">
          <ul className="space-y-4">
            <div className="">
              <ListItem
                index={1}
                lable={"A"}
                value={questions[currentQuestionIndex].op1}
                isSelected={choosenOption == 1}
                changeOption={changeOption}
              />
            </div>
            <div className="">
              <ListItem
                index={2}
                lable={"B"}
                value={questions[currentQuestionIndex].op2}
                isSelected={choosenOption == 2}
                changeOption={changeOption}
              />
            </div>
            <div className="">
              <ListItem
                index={3}
                lable={"C"}
                value={questions[currentQuestionIndex].op3}
                isSelected={choosenOption == 3}
                changeOption={changeOption}
              />
            </div>
            <div className="">
              <ListItem
                index={4}
                lable={"D"}
                value={questions[currentQuestionIndex].op4}
                isSelected={choosenOption == 4}
                changeOption={changeOption}
              />
            </div>
          </ul>
          <div>
            <button
              type="submit"
              className="flex items-center font-bold text-white p-2 w-[36rem] rounded-2xl text-2xl justify-center py-7 bg-purple-600"
              onClick={function () {
                if (
                  questions[currentQuestionIndex].correctAns == choosenOption
                ) {
                  setCorrectAnswers(correctAnswers + 1);
                }

                if (currentQuestionIndex < 9) {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                  setChoosenOption(0);
                } else {
                  showResult(correctAnswers);
                }
              }}
            >
              Submit answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

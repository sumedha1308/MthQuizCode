const readLineSync = require('readline-sync');
const quizSource = {
  title : 'Mathematics Quiz',
  welcomeMsg : 'Welcome to MathQuiz !!',
  instructionMsg : '\nEach question has 4 options out of which 1 option is correct answer.\nPlease select correct option.',
  queSet : [
    {
      question : 'What is the value of 10 + 2',
      options : {
        1 : 12,
        2 : 20,
        3 : 2,
        4 : 5
      },
      correctAns : 1
    },
    {
      question : 'What is the value of 10 - 2',
      options : {
        1 : 12,
        2 : 8,
        3 : 2,
        4 : 5
      },
      correctAns : 2
    },
    {
      question : 'What is the value of 10 * 2',
      options : {
        1 : 12,
        2 : 8,
        3 : 2,
        4 : 20
      },
      correctAns : 4
    },
    {
      question : 'What is the value of 10 / 2',
      options : {
        1 : 12,
        2 : 8,
        3 : 2,
        4 : 5
      },
      correctAns : 4
    },
    {
      question : 'What is the value of 10 % 2',
      options : {
        1 : 12,
        2 : 8,
        3 : 0,
        4 : 5
      },
      correctAns : 3
    }
    
  ]
};

const showWelcomeMsg = (title, desc) => {
    console.log(title);
    console.log(desc);
}

const showinstructMsg = (msg) => console.log(msg);

const quizLogic = (queSet) => {
    //console.log();
    let totatlCorrectAns = 0;
    let questionNum = 1;
    queSet.forEach(queObj => {
      const {question, options, correctAns } = queObj;
      console.log(`\n${questionNum}. `+question);
      for (const [optionKey, optionValue] of Object.entries(options)) {
        console.log(`(${optionKey})\t${optionValue}`);
      }
      const givenAns = readLineSync.question('Please enter answer : ');
      const givenAnsNum = parseInt(givenAns);
      if(givenAnsNum !== correctAns){
        console.log(`Your answer ${givenAns} is wrong and correct answer is ${correctAns}`)
      } else {
          console.log(`Your answer ${givenAns} is correct !!`);
          totatlCorrectAns +=1;
      }
      questionNum +=1;
    });
    return totatlCorrectAns;
}

const showResult = (correctAns, queSet) => {console.log(`\nYour result : ${correctAns}/${queSet}`);
console.log('\nThank you !!');
}

const main = () => {
  const { title, welcomeMsg, instructionMsg, queSet } = quizSource;
  showWelcomeMsg(title, welcomeMsg);
  showinstructMsg(instructionMsg);
  const correctAns = quizLogic(queSet);
  showResult(correctAns, queSet.length);
}
main();
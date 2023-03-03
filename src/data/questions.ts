const colors:string[] = ["#db5f12", "#0ba6ff","#898989","#24a0ed","#ff00ff","#fd0e35","#1d344a","#08cad1","#9d94ff","#c780e8"];

export type Questions = {
  id:number;
  question:string;
  answer:string;
  color:string
}[]
let operand1:number;
let operand2:number;
let questions:Questions = [];

function generateOperands() {
  operand1 = Math.floor(Math.random() * 91) + 1;
  operand2 = Math.floor(Math.random() * (100 - operand1)) + 1;
}

function checkOperandsEqualsWithAnswer() {
  const isrepeatedAnswers = questions.some((question) => {
    return parseInt(question.answer) === operand1 + operand2;
  });
  if (isrepeatedAnswers) {
    generateOperands();
    checkOperandsEqualsWithAnswer();
  } else {
    return;
  }
}
export function generateQuestions() {
  for (let i = 1; i <= 10; i++) {
    console.log(i,"i")
    generateOperands();
    checkOperandsEqualsWithAnswer();
    questions.push({
      id: i,
      question: `${operand1} + ${operand2}`,
      answer: `${operand1 + operand2}`,
      color:`${colors[i-1]}`,
    });
  }
  return questions;
}

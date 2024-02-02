function generateMTF(quizLevel) {}

function generateLN(quizLevel) {
  const firstNum = Math.floor(Math.random() * 90) + 10;
  const secondNum = Math.floor(Math.random() * 90) + 10;
  const thirdNum = Math.floor(Math.random() * 90) + 10;
  const fourthNum = Math.floor(Math.random() * 90) + 10;

  const optionsGiven = [firstNum, secondNum, thirdNum, fourthNum];
  const correctOption = Math.max(...options);

  return {
    optionsGiven: optionsGiven,
    correctOptions: correctOption,
    optionSelected: "",
    type: "ln",
    questionStatement: "Select the largest number",
  };
}

function generateFTB(quizLevel) {
  const column1 = [];
  const correctOptions = [];

  for (let i = 0; i < 4; i++) {
    const firstNum = Math.floor(Math.random() * 90) + 10;
    const secondNum = Math.floor(Math.random() * 90) + 10;
    column1.push(`${firstNum}+${secondNum}`);
    correctOptions.push(`${firstNum + secondNum}`);
  }

  return {
    type: "ftb",
    optionsWritten: [],
    column1: column1,
    correctOptions: correctOptions,
    questionStatement: "Fill in the blanks",
  };
}

export default function generateRandomQuestion(quizLevel) {
  const choices = ["ftb", "ln", "mtf"];
  const qType = choices[Math.floor(Math.random() * choices.length)];

  switch (qType) {
    case "ftb":
      return generateFTB(quizLevel);
    case "ln":
      return generateLN(quizLevel);
    case "mtf":
      return generateMTF(quizLevel);
    default:
      return generateLN(quizLevel);
  }
}

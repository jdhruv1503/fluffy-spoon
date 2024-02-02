function generateMTF(quizLevel) {
  const column1 = [];
  const correctOptions = [];
  let firstNum = 0,
    secondNum = 0;
  if (quizLevel === 1) {
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 90) + 10;
      secondNum = Math.floor(Math.random() * 90) + 10;
      column1.push(`${firstNum}+${secondNum}`);
      correctOptions.push(`${firstNum + secondNum}`);
    }
  } else if (quizLevel === 2) {
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 900) + 100;
      secondNum = Math.floor(Math.random() * 900) + 100;
      column1.push(`${firstNum}+${secondNum}`);
      correctOptions.push(`${firstNum + secondNum}`);
    }
  } else {
    let from = ["+", "-"];
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 900) + 100;
      secondNum = Math.floor(Math.random() * 90) + 10;
      const operation = from[Math.floor(Math.random() * from.length)];
      const result =
        operation === "+"
          ? `${firstNum} ${operation} ${secondNum}`
          : `${firstNum} ${operation} ${secondNum}`;
      column1.push(result);
      correctOptions.push(eval(result));
    }
  }

  // for (let i = 0; i < 4; i++) {
  //   const firstNum = Math.floor(Math.random() * 90) + 10;
  //   const secondNum = Math.floor(Math.random() * 90) + 10;
  //   column1.push(`${firstNum}+${secondNum}`);
  //   correctOptions.push(`${firstNum + secondNum}`);
  // }

  const column2 = shuffleArray(correctOptions);
  let pairs = [];
  console.log(column2);

  // Create pairs array
  for (const item of column1) {
    const value = eval(item); // Evaluate the expression to get the numeric value
    const pairIndex = column2.indexOf(value); // Find the index of the matching value in column2
    if (pairIndex !== -1) {
      pairs.push([item, column2[pairIndex]]);
    }
  }

  return {
    type: "mtf",
    optionsWritten: [],
    pairs: pairs,
    correctOptions: correctOptions,
    questionStatement: "Match the following",
  };
}

function shuffleArray(array) {
  // Create a copy of the array
  const shuffledArray = [...array];

  // Perform the shuffle on the copied array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }


  // Return the shuffled array
  return shuffledArray;
}

function generateLN(quizLevel) {
  let firstNum = 0,
    secondNum = 0,
    thirdNum = 0,
    fourthNum = 0;
  if (quizLevel === 1) {
    firstNum = Math.floor(Math.random() * 90) + 10;
    secondNum = Math.floor(Math.random() * 90) + 10;
    thirdNum = Math.floor(Math.random() * 90) + 10;
    fourthNum = Math.floor(Math.random() * 90) + 10;
  } else if (quizLevel === 2) {
    firstNum = Math.floor(Math.random() * 900) + 100;
    secondNum = Math.floor(Math.random() * 900) + 100;
    thirdNum = Math.floor(Math.random() * 900) + 100;
    fourthNum = Math.floor(Math.random() * 900) + 100;
  } else {
    firstNum = Math.floor(Math.random() * 9000) + 1000;
    secondNum = Math.floor(Math.random() * 9000) + 1000;
    thirdNum = Math.floor(Math.random() * 9000) + 1000;
    fourthNum = Math.floor(Math.random() * 9000) + 10;
  }

  const options = [firstNum, secondNum, thirdNum, fourthNum];
  const correctOption = Math.max(...options);

  return {
    options: options,
    correctOptions: correctOption,
    optionSelected: "",
    type: "ln",
    questionStatement: "Select the largest number",
  };
}

function generateFTB(quizLevel) {
  const column1 = [];
  const correctOptions = [];
  let firstNum = 0,
    secondNum = 0;
  if (quizLevel === 1) {
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 90) + 10;
      secondNum = Math.floor(Math.random() * 90) + 10;
      column1.push(`${firstNum}+${secondNum}`);
      correctOptions.push(`${firstNum + secondNum}`);
    }
  } else if (quizLevel === 2) {
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 900) + 10;
      secondNum = Math.floor(Math.random() * 900) + 10;
      column1.push(`${firstNum}+${secondNum}`);
      correctOptions.push(`${firstNum + secondNum}`);
    }
  } else {
    let from = ["+", "-"];
    for (let i = 0; i < 4; i++) {
      firstNum = Math.floor(Math.random() * 900) + 100;
      secondNum = Math.floor(Math.random() * 90) + 10;
      const operation = from[Math.floor(Math.random() * from.length)];
      const result =
        operation === "+"
          ? `${firstNum} ${operation} ${secondNum}`
          : `${firstNum} ${operation} ${secondNum}`;
      column1.push(result);
      correctOptions.push(eval(result));
    }
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

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

//사용자 입력단 
function getUserNumberInput () {
  return parseInt(userInput.value);
}

//연산자가 포함된 텍스트 구문 분석 출력 - 결과얻기
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//배열 로그확인
function whiteToLog (
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
  ) {
    const logEntry = {
      operation : operationIdentifier,
      prevResult : prevResult,
      number : operationNumber,
      result : newResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

//더하기 함수
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //const calcDescription = `${currentResult} + ${userInput.value}`;
  // currentResult = currentResult + parseInt(userInput.value);
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  whiteToLog ('add', initialResult, enteredNumber,currentResult)
}

//빼기 함수
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  whiteToLog ('subtract', initialResult, enteredNumber,currentResult)
}

//곱하기 함수
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  whiteToLog ('multiply', initialResult, enteredNumber,currentResult)
}

//나누기 함수
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  whiteToLog ('divide', initialResult, enteredNumber,currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

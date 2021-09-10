'use strict'

const btn = document.querySelector('button')

const ROCK = '바위'
const PAPER = '보'
const SCISSORS = '가위'
const DEFAULT_SELECT = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYERWIN'
const RESULT_COMPUTER_WIN = 'COMPUTERWIN'

let gameIsRunning = false

const getPlayerChoice = () => {
    // const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER} ?`,'').toUpperCase()
    const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER} ?`,'')
    if(selection !== SCISSORS && selection !== ROCK && selection !== PAPER) {
        alert(`기본값은 ${DEFAULT_SELECT}`)
        return DEFAULT_SELECT
    }
    return selection
}

const getComputerChoice = function () {
    //범위 지정 난수 생성 1부터 10까지 1 <= random <= 10 
    // const randomValue = Math.floor(Math.random() * 10) + 1  
    const randomValue = Math.random() 
    console.log(`randomValue : ${randomValue}`)
    if(randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

// const getWinner = function (cChoice,pChoice) {
//     if (cChoice === pChoice) {
//        return RESULT_DRAW
//     } else if(
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//     ) 
//     {
//       return RESULT_PLAYER_WIN
//     } else {
//         return RESULT_COMPUTER_WIN
//     }
// }

//arrow function : 하나의 표현식만 있을경우 간결화 시킨다 return도 생략 가능
const getWinner = (cChoice,pChoice) => cChoice === pChoice
    ? RESULT_DRAW :
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
    ? RESULT_PLAYER_WIN : 
    RESULT_COMPUTER_WIN;


btn.addEventListener('click', function () {
    //게임 한번만 실행 조건 : 반복 클릭이벤트 처리 불가
    if(gameIsRunning) {
     return
    }
    gameIsRunning = true
    console.log('게임시작')
    const playerChoice = getPlayerChoice()
    console.log(playerChoice)
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    const winner = getWinner(computerChoice,playerChoice)
    let message = `당신의 선택은 : ${playerChoice}, 컴퓨터의 선택은 : ${computerChoice}, 그러므로...`
    if(winner === RESULT_DRAW) {
       message = message + '비겼다!'
    }else if(winner === RESULT_PLAYER_WIN) {
        message = message + '이겼다'
    } else {
        message = message + '졌다'
    }
    alert(message)
    gameIsRunning = false
})

'use strict'

function getName() {
  return prompt('이름이 무엇입니까?','')
}
function greet () {
   const userName = getName()
   console.log('나의 이름은? ' + userName) //나의 이름은? 김성현
}
greet()

//힙메모리 : 장기메모리공간 / 스택메모리 : 단기메모리공간

//debugger 실행시 
//return prompt('이름이 무엇입니까?','') 중단점을 찍고 새로고침 시
//sources에 call stack에 
//  getName
//  greet
//  anonymous(익명함수) 
//순서로 쌓이게되며 getName함수를 시작으로 하나씩 처리완료 시 차례대로(마지막실행이 시작) 스택메모리에서 사라지며 빈 스택이 된다.
//condition operator : IF
const name = "kim"
if(name === 'kim') {
    console.log(`나의 이름은 ${name}이야!`)
} else if (name === 'park') {
    console.log(`아니 내 이름은 ${name}이야`)
} else {
    console.log('누구냐? 넌?')
}

//condition ? value1 : value2 - 삼항연산자
console.log(name === 'kim' ? 'yes' : 'no');

//switch statement : 조건 대/소문자 구분함
const browser = 'EDGE';
switch (browser) {
    case 'CHROME' :
        console.log ('i`m CHROME')
        break;
    case 'IE' :
    case 'EDGE' :
        console.log ('i`m IE or EDGE')
        break;
    case 'SAFARY' :
        console.log ('i`m SAFARY')
        break;
    case 'FIREFOX' :
        console.log ('i`m FIREFOX')
        break;
    default :
       console.log('지원하지 않는 브라우져')
       break;
}

//while loop : 초기값 - 조건 - 식 - 증가/증감
// let i = 3;
// while ( i > 0) {
//     console.log(`while : ${i}`)
//     i--;
// }

//do while loop : 블럭을 먼저 실행하고 후에 조건을 비교하려면 do while
// let x = 3;
// do {
//  console.log(`do while : ${x}`)
//  x--;
// } while (x > 0)

//for loop : begin;(처음 한번실행) condition; step - loop
// for(let i=0; i <= 10; i++) {
//     console.log(`for loop : ${i}`)
// }

// //다중 for loop
// for(let i=0; i <= 5; i++) {
//     for(let j=0; j <=5; j++) {
//         console.log(`다중 for : ${i} / ${j}`)
//     }
// }

//quiz - 0에서 10까지 짝수만 출력 : continue
for(let i=0; i <=10; i++) {
  if(i%2 !== 0) {
      continue
  }
  console.log(i)
}
//quiz - 0에서 10까지 출력 중 8에서 멈춤 : break
for(let i=0; i <=10; i++) {
    if(i > 8) {
        break;
    }
    console.log(i)
}


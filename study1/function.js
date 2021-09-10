
for(let i=0; i <= 10; i++ ){
    if(i%2 !== 0) { 
        continue
    }
    console.log(`0부터 10까지 숫자에서 짝수들만 출력 : ${i}`)
}

for(let i=0; i <= 10; i++ ){
    if(i > 8) {
        break
    }
     console.log(`0부터 10까지 출력 중 8까지만 출력 : ${i}`)
}

forEach
function printAll(...args) {
  args.forEach((arg) => console.log(arg));
}
printAll("kim", "seong", "hyun");

return
function sum(a,b) {
    return a + b;
}
const result = sum(5, 20);
console.log(`sum : ${result}`)

const print = function () {
    console.log('print')
}
print()
const printAgain = print
printAgain()

// callback function
function randomQuiz(answer, printYes, printNo) {
 if(answer === 'love you'){
     printYes()
 } else {
     printNo()
 }
}
// anonymous function : 익명함수
const printYes = function () {
    console.log('YES')
}
// named function : print함수명으로 stak 디버깅 추적 용이
const printNo = function print() {
    console.log('NO')
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function : 이름없는 익명함수
const simplePrint = function() {
    console.log('print')
}
// 화살표 함수로 바꾸면?
const simplePrint = () => console.log('print-arrow');
simplePrint()

const sum = (a,b) => a + b;
const result = sum(10,10)
console.log(result)

// immediately invoked function : 즉시 호출 함수
(function print() {
    console.log('즉시호출은 함수에 () 부여 - 함수호출단이 필요없음')
})();

// quiz test
function calculate (command, a, b) {
   if(command == 'add') {
    return a+b
   } else if (command == 'substract') {
    return a-b
   } else if (command == 'divide') {
    return a/b
   } else if (command == 'multifly') {
    return a*b
   } else {
    return '이건 아니야~'
   }

 switch(command) {
     case 'add' : 
     return a+b;
     case 'substract' : 
     return a-b;
     case 'divide' : 
     return a/b;
     case 'multifly' : 
     return a*b;
     default : 
     throw console.error('이건 아니여~');
 }
}
console.log(calculate('add',5,5));
console.log(calculate('substract',5,5));
console.log(calculate('divide',5,5));
console.log(calculate('multifly',5,5));
console.log(calculate('',5,5));

// object
// object = { key : value }

function print(person) {
    console.log(person.name)
    console.log(person.age)
}
const kim = {name:'kim', age:40}
print(kim)

// constructor function : 생성자 함수
function Person (name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('kim',40)
console.log(person)
console.log('name' in person) //true

// for.. in / for ...of
// in operator key in obj
for(key in person) {
    console.log(key)
} 
return name , age
const array = [1,2,3,4,5]
for(arr of array) {
    console.log(arr)
}
// return 1 2 3 4 5





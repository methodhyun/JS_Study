`use strict`

//나머지 매개변수
{
function showName (...names) {
    console.log(names)
}
showName('tom') //["tom"]
showName('tom','jane','jack','wilson','mary') //(5) ["tom", "jane", "jack", "wilson", "mary"]
}

//나머지 매개변수 : 전달받은 모든 수의 총합을 내야함.
//forEach
{
  function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => {
      return result += num
  })
  console.log(result) //45
  }
    add(1,2,3,4,5,6,7,8,9)  
}
//reduce
{
    function add(...numbers) {
    const result = numbers.reduce((prev,curr) => {
        return prev + curr
    },0)
    console.log(result) //45
    }
      add(1,2,3,4,5,6,7,8,9)  
}
//유저의 객체를 만들어주는 생성자 함수
{
function User(name, age, ...skills) {
    this.name = name,
    this.age = age,
    this.skills = skills
}

const user1 = new User('mike', 40, 'HTML', 'CSS')
const user2 = new User('mark', 30, 'JS', 'vueJS')

console.log(user1)
console.log(user2)
}
// User {name: "mike", age: 40, skills: Array(2)}
//       age: 40name: "mike"skills: (2) ["HTML", "CSS"]
// User {name: "mark", age: 30, skills: Array(2)}




//전개구문 Spread Syntax
{
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let result = [0,...arr1, ...arr2]

console.log(result) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

//전개구문 복제 : Object.assign 대체
{
let arr1 = [1,2,3]
let arr2 = [...arr1]
console.log(arr2) //[1,2,3]
}
{
let user = {name : 'mike', age : 30}
let user2 = {...user}
user2.name = 'tom'
console.log(user) //{name: "mike", age: 30}
console.log(user2) //{name: "tom", age: 30}
}
{
let user = {name : 'tom'}
let info = {age : 40}
let skill = ['HTML','CSS']
let lang = ['kor', 'eng']

user = {
    ...user,
    ...info,
    skills : [...skill, ...lang],
}
console.log(user) // {name: "tom", age: 40, skills: Array(4)}
}








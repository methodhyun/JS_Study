//Object = {key : value} 오브젝트는 키와 값에 집합체 
//const obj1 = {} -> object literal : 객체 리터럴
//const obj2 = new Object(); -> object Constructor syntax : 객체 생성자 구문
function printKim (person) {
  console.log(person.name);
  console.log(person.age);
}
const kim = {name:'kimseonghyun', age: 40}
printKim(kim)

//for...in : 오브젝트의 키 내용을 알 수 있다.
for(key in kim) {
    console.log(key)
}
//return name age

//for... of : 배열로 되어있는 값들을 순차적으로 찍는다.
const array = [1,2,3,4,5]
for(arr of array) {
    console.log(arr)
}

//computed 프로퍼티 : 키의 값을 모를때 동적으로 키를 세팅할 수 있다 
function printValue(obj, key) {
    console.log(obj[key])
}
printValue(kim, 'name')
printValue(kim, 'age')

//property vlaue shorthand - 여려개의 객체가 있을때 매번 코드를 작성하지 않고 한개의 함수를 만들어서 관리
// const person1 = {name : 'kim', age: 40}
// const person2 = {name : 'park', age: 30}
// const person3 = {name : 'jung', age: 20}
// const person4 = {name : 'lee', age: 10}

//Constructor function(생성자 함수) : 이때는 함수명을 클래스처럼 만든다.
function Person (name, age) {
    this.name = name;
    this.age = age
}
const person = new Person ('kim', 40)
console.log(person)

//"in" operator : 해당 오브젝트안의 key가 있는지 없는지 확인 예시)'name'이란 키가 Person에 있는지 확인 -> boolean값으로 출력됨
console.log('name' in Person)  //return true

//cloning하는 법 : Object.assign
const user1 = {name:'kim', age: 40}
const user2 = Object.assign({}, user1)
user2.name = 'jung' //name을 jung로 바꾼다.
console.log(user2) //return {name: "jung", age: 40}
console.log(user1) //return {name: "kim", age: 40} --> user1에 원본데이터는 그대로이다. 

//another example
const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue' , size : 'medium'}
const fruit3 = {color: 'green' , size : 'large', price : '10,000'}
const mixed = Object.assign({}, fruit1, fruit3, fruit2)
console.log(mixed) //return {color: "blue", size: "medium", price: "10,000"} : 객체에 존재하지 않는 키와값을 추가로 덮어씌워주고 최종적으로 맨 오른쪽 지정한 변수의 객체값이 표현된다.

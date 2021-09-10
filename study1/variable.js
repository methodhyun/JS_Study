//1. Use strict
//added in ES 5
//use this for Vanila Javascript
'use strict';

//2. Variable
//let (added in ES6)
let globalName = 'global Name'
{
    let name = 'kimseonghyun'
    console.log(name);
    name='hello';
    console.log(name);
}
console.log(name); //지역변수 호출 X
console.log(globalName); //전역변수 호출 O

//var (don`t eve use this!)
//{} block scope를 무시한다.
//var hoisting (어디에 선언하느냐 상관없이 상단으로 선언을 끌어올려 주는것!)
// {
//     age = 4; //hoisting
//     var age;
// }
// console.log(age)

//3. Constants
//상수 - 변경이 되어지지 않는다.
//초기값에 유용하며 이럴 경우 대문자로 변수명 지정 : 다른 개발자가 보자마자 상수임을 인지
const DAY_INWEEK = 7;
const MAX_NUMBER = 9
console.log(DAY_INWEEK)

//4.variable TYPE
//number, string, boolean, null, undefined, symbol
//object
//function, first-class function

//number
const infinity = 1 / 0 //무한대
console.log(infinity) //return infinity
const negativeInfinity = -1 / 0
console.log(negativeInfinity) //return -infinity
const nAn = 'not a number' / 2;
console.log(nAn) //return NaN

//string
const brand = 'brand'
const greeting = 'hello' + brand;
console.log(`value : ${greeting}, type : ${typeof greeting}`); //template literals/string - 백틱으로 함수,문자 표현
//return value : hellobrand, type : string

//boolean
//false : 0, null, undefined, NaN
//true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value : ${canRead}, type : ${typeof canRead}`)
//return value : true, type : boolean

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`)
//return value : null, type : object

//undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`) 
//return value : undefined, type : undefined

//symbol : 변경이 불가능한 다른값과 중복되지 않는 고유한 값 - 충돌위험이 없는 오브젝트의 유일한 프로퍼티 키를 만들기 위해서 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //return false : Symbol은 유니크함
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2) //return true : Symbol.for를 사용해서 하나의 같은 싱글톤으로 만듬
console.log(`value : ${gsymbol1.description}, type : ${typeof gsymbol1}`) //console값 확인을 위해서는 .description를 사용해서 string으로 변환해서 사용해야함
//return value : id, type : symbol

//object
const person = {
    name : 'kim',
    age : 40
}
console.log(`value : ${person.name}, ${person.age} / ${typeof person}`)
//return value : kim, 40 / object
//const 지정된 객체는 바꿀수 없는 고정이지만 메모리에 값은 변경할수 있다.
person.age = 30;
console.log(person.age)



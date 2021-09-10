'use strict'

// javascript에서의 호이스팅(hoisting)은 코드에 선언된 변수 및 함수를 코드 상단으로 끌어올리는 것을 말하며
// 이는 변수 범위가 전역 범위인지 함수 범위인지에 따라 다르게 수행될 수 있다.
// 함수 내에서 선언한 함수 범위(function scope)의 변수는, 해당 함수의 최상위로.
// 함수 밖에서 선언한 전역 범위(global scope)의 전역 변수는 스크립트 단위의 최상위로 끌어올려진다.
// 변수의 초기값을 제외한 선언부분만 분리하여 최상위로 끌어올린다. 선언된 변수에 값을 할당하는 내용은 원래 그 라인에 있다.
// 함수선언문 경우 선언한 위치와 관계없이 항상 최상단으로 호이스팅되므로 코드상에서 함수를 선언한 위치보다 먼저 호출하더라도 이상없이 호출된다.
// 함수표현식과 new Function객체생성에서는 호이스팅이 적용되지 않는다.

console.log(user)
var user = 'kim' //undifined
// var user
// console.log(user)
// user = 'kim'

showName1();
function showName1(){
  console.log(name); //undifined
  var name = "kim";
  console.log(name);  //kim
}
// showName();
// function showName(){
//   var name;
//   console.log(name);
//   name = "kim";
//   console.log(name);
// }


noDefine1()
function noDefine1() {
    // 변수 선언 및 할당 이전에 호출 테스트
    console.log("not defined : " + name); // undefined
    var name = "java";
    // 변수 초기화 이후 값 확인
    console.log("defined : " + name); //java 
  }

noDefine2();
function noDefine2() {
  console.log("not defined : " + name); //java
  // var name = "java";
  name = "java"; // 변수 선언 명령어 없이 name 변수에 할당함
  console.log("defined : " + name); //java
}
// 단, 이 경우 변수 선언하는 var를 생략하는 경우 예상치 않은 결과를 내뱉으므로 주의해야 한다.
// noDefine 이라는 함수 범위의 변수를 생성하려했으나, name = "java"의 형태로 선언한 경우 이상한 결과가 반환된다.

userName = 'kim'
console.log(userName)
//error : Uncaught ReferenceError: userName is not defined : 정의되지않은 userName = 엄격모드에서는 정상출력 'kim' : 자바스크립트 자체적으로 var인식



//함수 선언문 (호이스팅 됨)
showName2();
function showName2(){
  console.log(name);  //undefined
  var name = "seonghyun kim";
  console.log(name);  //seonghyun kim
}

//함수 표현식 (호이스팅 안됨 -  에러발생)
// Uncaught TypeError: showName3 is not a function 
showName3();
var showName3 = function(){
  console.log(name);    
  var name = "seonghyun kim";
  console.log(name);
};

//new Function 객체 생성 (호이스팅 안됨 - 에러발생)
//Uncaught TypeError: showName4 is not a function
showName4();
var showName4 = new Function("", console.log("seonghyun kim"));
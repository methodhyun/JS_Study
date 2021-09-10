'use strict';

//JavaScript is a synchronous language. 자바스트립트는 동기적인 언어 
//호이스팅이 정의된 시점부터 코드가 우리가 작성한 순서대로 동기적으로 실행
//호이스팅 ? var변수나 함수선언들이 자동적으로 제일 상단으로 올라가서 처리되는것

//asynchronous 비동기처리 / 아래는 setTimeout의 콜백함수 호출을 예시로 작성
console.log('1')
setTimeout(() => console.log('2'), 1000) //1초 후 출력
console.log('3')
//result
// 1
// 3
// 2  << 3초후 출력

//synchronous callback
function printImmediately(print) {
    print()
}
printImmediately(() => console.log('hello'))

//asynchronous callback
function printWithDelay(print, timeout) {
   setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000) //2초 후 출력
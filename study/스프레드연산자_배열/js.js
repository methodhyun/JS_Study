'use strict'

const hobby = ['영화감상','웹툰','게임']
console.log(hobby) //["영화감상", "웹툰", "게임"]

const hobby2 = hobby
console.log(hobby2) //["영화감상", "웹툰", "게임"]

//...스프레드연산자를 이용해서 새로운 복사본 생성, 복사본에 값을 변경해도 원본은 변경하지 않는다.
const hobby3 = [...hobby]
hobby3.push('밥먹기')
console.log(hobby3) //["영화감상", "웹툰", "게임", "밥먹기"]
console.log(hobby) //["영화감상", "웹툰", "게임"]


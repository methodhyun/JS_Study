'use strict';
//객체지향 프로그래밍 : oop - object oriented programing
//class : template - no data / 지정된 한개
//object : instance of a class

//1.class declarations //클래스 선언 클래스명은 첫문자는 대문자 규칙
class Person {
   constructor (name, age, hobby) {
       //생성자 필드
       this.name = name;
       this.age = age;
       this.hobby = hobby
   } 
   //methods
   speak() {
       console.log(`나의 이름은 ${this.name}이고 나이는 ${this.age}살, 취미는 ${this.hobby}이다!`)
   }
}
const person1 = new Person('김성현',40,'영화보기')
console.log(person1.name)
console.log(person1.age)
console.log(person1.hobby)
person1.speak();

const person2 = new Person('김보람',40,'넷플릭스보기')
console.log(person2.name)
console.log(person2.age)
console.log(person2.hobby)
person2.speak();

//2. getter / setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    //값을 리턴
    get age() {
        return this._age;     //return this.age = 생성자 내 this.age에서 바로 get함수에 age에 접근하므로 return this._age;
    }
    //값을 설정할때는 임의의 value가 필요함
    set age(value) {
        // if(value < 0) {
        //     throw Error ('나이를 거꾸로 먹냐? 아니면 안태어났니?')
        // }
        // this._age =value;   //this.age = value 생성자 내 this.age = age에서 바로 set함수에 age에 접근하므로 this._age = value;
        
        /*고급방법*/
        this._age = value < 0 ? Error('error') : value
    }
}
const user1 = new User('Kim','seonghyun', -1);
console.log(user1) //return User {firstName: "Kim", lastName: "seonghyun", age: 40}


//3. 상속과 다양성
class Shape {
    constructor (width,height, color) {
        this.width = width;
        this.height = height;
        this.color = color
    }
    color() {
        console.log(`${this.color}`)
    }
    size() {
        return this.width * this.height
    }
    toString() {
        return `RECTAGLE Color : ${this.color}`
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(40,40,'red')

console.log(rectangle.color)  //return red
console.log(rectangle.size()) //return 1600
console.log(rectangle) //return Rectangle {width: 40, height: 40, color: "red"}

class Triangle extends Shape  {
    //재정의 오버라이딩!
    size() {
        return (this.width * this.height) / 2
    }
}
const triangle = new Triangle(10,10,'blue')
console.log(triangle.size())

//4. instanceOf
console.log(triangle instanceof Shape)
console.log(rectangle instanceof Rectangle)
console.log(rectangle.toString())


{
    class User3 {
        constructor(name, age) {
          this.name= name;
          this.age = age
        }
        showName() {
            console.log(this.name)
        }
    }

    const user3 = new User3('tom' , 40)
    console.log(user3) //User3 {name: "tom", age: 40}
    user3.showName() //tom
}

{
    class Car {
        constructor(color) {
          this.color = color;
          this.wheels = 4
        }
        drive () {
           console.log('drive...')
        }
        stop () {
            console.log('stop!')
        }
    }

    class Bmw extends Car {
        constructor(color) {
            //error : 부모의 constructor를 super로 실행하고 color도 동일하게 넣어줘야한다.
            super(color)
            this.navigation=1
        }
        parking () {
            console.log('parking...')
        }
        //재정의 : 오버라이딩
        stop() {
            console.log('OFF! stop!!')
            //부모에게서 받은 그대로를 사용할때는?
            super.stop()
        }
    }

    const z4 = new Bmw('white')
    console.log(z4) //Bmw {color: "white", wheels: 4, navigation: 1}
    z4.stop()
    //OFF! stop!!
    //stop!
    z4.drive() //drive...
}
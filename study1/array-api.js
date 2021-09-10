//Array의 선언
// const arr1 = new Array();
// const arr2 = [1, 2]

{
const fruits = ["사과","바나나","딸기","파인애플","복숭아","망고","자두","멜론"];

  console.log(fruits) 
  //return (8) ["사과","바나나","딸기","파인애플","복숭아","망고","자두","멜론"];
  console.log(fruits.length) 
  //return 8
  console.log(fruits[0]) 
  //return 사과
  //배열의 제일 마지막 요소를 알고 싶을 경우 배열.length -1
  console.log(fruits[fruits.length -1]) //return 멜론

  //loop print all fruit 
  fruits.forEach(function (fruit, index) {
    console.log(fruit, index)
  })
  
  //forEach (권장 최신)
  fruits.forEach((fruit, index) => {
      console.log(fruit, index)
  })
  
  //loop print all fruit - for..of
  for(let fruit of fruits) {
      console.log(fruit)
  }
  //return 사과 바나나 딸기 파인애플 복숭아 망고 자두 멜론 순차적으로 출력
}
 
 
/******** 배열 메서드 *********/

/*인덱스번호를 이용해서 요소 변경*/
/*----------------------------------------------------------------------------------------------------*/
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits[0] = 'Kiwi'
  console.log(`인덱스 번호로 바뀐 배열요소 : ${result}`) //result : Kiwi
  console.log(fruits) 
  //result : (4) ["Kiwi", "Orange", "Apple", "Mango"]
  console.log('----------------------------------------------')
}
/*----------------------------------------------------------------------------------------------------*/

/*배열을 문자열로 변환*/
/*----------------------------------------------------------------------------------------------------*/
//toString() : 배열을 (쉼표 분리된) 배열 값 문자열로 변환합니다.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.toString()
  console.log(`tostring()메서드 : ${result}`) //result : Banana,Orange,Apple,Mango
  console.log('----------------------------------------------')
}

//join() : 모든 배열요소를 문자열에 조인할수 있고 원하는 분리요소(, * ,/)로 분리지정 할 수 있다, 구분자를 안넣으면 기본 ,쉼표로 표시
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.join('* ')
  console.log(`join()메서드 : ${result}`) //result : Banana* Orange* Apple* Mango
  console.log('----------------------------------------------')
}
/*----------------------------------------------------------------------------------------------------*/

/*배열 요소를 제거 easy*/
/*----------------------------------------------------------------------------------------------------*/
//pop() : 배열에서 마지막 요소를 제거합니다. 그리고 튀어 나와 제거된 값을 반환한다.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.pop()
  console.log(`pop()메서드로 제거된 항목 : ${result}`) //result : Mango
  console.log('----------------------------------------------')
}

/*배열 요소를 추가 easy*/
//push() : 배열에서 마지막 요소 끝에 추가, 그리고 새 배열의 길이를 반환
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.push('Melon')
  console.log(`push()메서드로 추가된 후 새 배열의 길이 : ${result}`) //result : 5
  console.log(fruits) //result : (5) ["Banana", "Orange", "Apple", "Mango", "Melon"]
  console.log('----------------------------------------------')
}
/*----------------------------------------------------------------------------------------------------*/

/*시프트 요소*/
/*----------------------------------------------------------------------------------------------------*/
 /*unshift/shift는 push와 pop보다 느리다 
 이유 : 
 push와 pop은 기존 배열 인덱스구조를 건들지 않고 끝에서 추가하는것이지만 
 unshift/shift는 기존에 배열 구조인 인덱스의 데이터가 이동하면서 재배치 해야하기때문에 
 최신 추가된 게시판글을 상위에 노출시켜야 한다는 전제 같은게 없다면? push와 pop을 이용하자.
 */
 
 //shift() : 배열의 첫번째[0] 요소를 제거하고 더 낮은 인덱스로 나머지 요소를 이동한다. 그리고 이동된 값을 반환한다. 
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.shift()
  console.log(`shift()메서드로 제거된 값 : ${result}`) 
  console.log(fruits) //result : (3) ["Orange", "Apple", "Mango"]
}

 //unshift() : 배열의 첫번째[0]의 요소를 추가하고 이전 요소를 "이동 해제"합니다. 그리고 새 배열의 길이를 반환한다.
 {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.unshift('Lemon')
  console.log(`unshift()메서드로 추가된 값 : ${result}`) //result : 5
  console.log(fruits) //result : (5) ["Lemon", "Banana", "Orange", "Apple", "Mango"]
}
/*----------------------------------------------------------------------------------------------------*/

/*splice*/
/*----------------------------------------------------------------------------------------------------*/
//splice()메서드는 배열에 새 요소를 추가 또는 요소 삭제가 가능하고, 삭제된 요소가 있는 경우로 배열을 반환한다.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result = fruits.splice(1, 0, 'Lemon', 'Kiwi') //2번째 인자수를 0으로 하면 배열요소를 지우지 않겠다는 뜻! 인덱스[1]번째에 레몬,키위 추가!
  console.log(`splice()메서드로 추가된 값 : ${result}`) //result : (6) ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
  console.log(fruits)
}
/*배열 인덱스[3]번째의 요소를 추가하고 기존 요소를 삭제*/
{
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];
  const result = fruits.splice(3, 2, 'Lemon', 'Kiwi') //2번째 인자수를 0으로 하면 배열요소를 지우지 않겠다는 뜻! 인덱스[1]번째에 레몬,키위 추가!
  console.log(`splice()메서드로 인덱스 3번째 위치한 Mango인덱스부터 요소2개를 제거(Mango,Melon)하고 그 위치에 Lemon,Kiwi를 추가 : ${result}`) //result : Mango,Melon
  console.log(fruits) //result : (5) ["Banana", "Orange", "Apple", "Lemon", "Kiwi"]
}
/*추가없이 배열요소만 삭제 가능*/
{
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];
  const result = fruits.splice(0, 2) //0번째 위치한 바나나를 시작으로 2개의 요소를 삭제
  console.log(`요소 추가없이 배열에서 삭제 된 요소는? : ${result}`) //result :  Banana,Orange
  console.log(fruits) //return : (3) ["Apple", "Mango", "Melon"]
}
{
  const hobbies = ['Sports', 'Cooking','Reading'];
  hobbies.splice(1, 0, 'Good Food');
  console.log(`splice로 추가 : ${hobbies}`); //splice로 추가 : Sports,Good Food,Cooking,Reading
}
{
  const hobbies = ['Sports', 'Cooking','Reading','Good Food'];
  const removedElements = hobbies.splice(-2, 1);
  console.log(`splice로 제거 : ${hobbies}`); //splice로 제거 : Sports,Cooking,Good Food
}
/*----------------------------------------------------------------------------------------------------*/

/*slice* : 배열의 요소 일부를 삭제한다. slice메서드는 소스 배열에서 요소를 제거하지 않고 새로운 배열을 만든다. 
/*----------------------------------------------------------------------------------------------------*/
//slice()메서드로 배열 요소 1("Orange")에서 시작하는 배열의 일부를 잘라내십시오.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi"];
  const result = fruits.slice(3) 
  console.log(`slice()메서드 : ${result}`) //result : Mango,Kiwi
  console.log(fruits) //(5) ["Banana", "Orange", "Apple", "Mango", "Kiwi"] //기존 배열요소는 그대로~
}
/*시작인수와 끝인수(포함하되 요소는 포함되지 않는다) 두가지 인수를 취할 수 있다.*/
{
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
  const result = fruits.slice(1, 3) 
  console.log(`slice()메서드 : ${result}`) //result : Orange,Apple
  console.log(fruits) //result : (5) ["Banana", "Orange", "Apple", "Mango", "Kiwi"] //기존 배열요소는 그대로~
}
{
  const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
  const storedResults = testResults.slice(2);
  testResults.push(5.91);
  console.log(storedResults, testResults); //[1.5, 10.99, -5, 10]  [1, 5.3, 1.5, 10.99, -5, 10, 5.91]
}
/*----------------------------------------------------------------------------------------------------*/

/*병합, 연결 배열*/
/*----------------------------------------------------------------------------------------------------*/
//concat() : 기존 배열을 병합(연결)하여 새로운 배열을 만든다. (기존 배열을 변경하지 않는다.)
{
  const fruits1 = ["Banana", "Orange"];
  const fruits2 = ["Apple", "Mango", "Melon"];
  const fruits3 = ("Kiwi"); //문자열도 인수로 사용 가능!
  const mixedFruits = fruits1.concat(fruits2, fruits3)
  console.log(`concat()으로 연결된 새로운 배열 : ${mixedFruits}`) //result : Banana,Orange,Apple,Mango,Melon,Kiwi
  console.log (fruits2, fruits3) //result : (3) ["Apple", "Mango", "Melon"] "Kiwi"
}
{
  const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
  const storedResults = testResults.concat([3.99, 2]);
  testResults.push(5.91);
  console.log(storedResults, testResults); //[1, 5.3, 1.5, 10.99, -5, 10, 3.99, 2]  [1, 5.3, 1.5, 10.99, -5, 10, 5.91]
}
/*----------------------------------------------------------------------------------------------------*/


/*정렬 배열*/
/*----------------------------------------------------------------------------------------------------*/
//sort() : 배열을 정렬할 수 있다.  기본적인 알파벳 정렬
{
  const citys = ["Busan", "Incheon", "California", "Wonjoo", "SeongNam"];
  const result = citys.sort()
  console.log(`sort()메서드 알파벳 기본 정렬 : ${result}`) //result : Busan,California,Incheon,SeongNam,Wonjoo
}
//reverse() : 내림차순으로 배열을 정렬할 수 있습니다.
{
  const citys = ["Busan", "Incheon", "California", "Wonjoo", "SeongNam"];
  const result = citys.sort()
  result.reverse()
  console.log(`reverse()메서드 내림차순으로 정렬 : ${result}`) //result : Wonjoo,SeongNam,Incheon,California,Busan
}
//sort() 숫자 정렬 : 기본적으로 함수는 값을 문자열로 정렬한다. 그래서 숫자가 문자열로 정렬되면 40이 100보다 크다.
{
  const points = [40,100,1,5,25,10];
  const result = points.sort((a, b) => a - b)
  console.log(`sort()메서드 숫자 정렬 알고리즘 : ${result}`) //result : Busan,California,Incheon,SeongNam,Wonjoo
}
//sort() 숫자 정렬 : 같은 트릭을 사용하여 숫자 배열 내림차순 정렬
{
  const points = [40,100,1,5,25,10];
  const result = points.sort((a, b) => b - a)
  console.log(`sort()메서드 숫자 내림차순 정렬 알고리즘 : ${result}`) //result : Busan,California,Incheon,SeongNam,Wonjoo
}
/*----------------------------------------------------------------------------------------------------*/

/*배열에서 Math 사용*/
/*----------------------------------------------------------------------------------------------------*/
//Math.min.apply 가장 낮은 숫자 찾기
{
  const points = [40,100,1,5,25,10];
  function myArrayMin(arr) {
     return Math.min.apply(null, arr)
  }
  const result = myArrayMin(points)
  console.log(`가장 낮은 숫자 찾기 : ${result}`) //result : 1
}
//Math.max.apply 가장 높은 숫자 찾기
{
  const points = [40,100,1,5,25,10];
  function myArrayMin(arr) {
     return Math.max.apply(null, arr)
  }
  const result = myArrayMin(points)
  console.log(`가장 높은 숫자 찾기 : ${result}`) //result : 1
}
/*----------------------------------------------------------------------------------------------------*/


/*자바스트립트 어레이 반복 - 배열 반복 메서드는 모든 배열 항목에서 작동합니다.*/
//배열.forEach() : 각 배열 요소에 대해 함수(콜백 함수)를 한 번 호출 - 인수는 값,인덱스,배열자체를 받는다 아래는 값만 사용!
/*----------------------------------------------------------------------------------------------------*/
{
  const numbers = [45, 4, 9, 16, 25];
  const result = numbers.forEach((number) =>  console.log(`forEach로 호출 : ${number}`))
}
//result :
// forEach로 호출 : 45
// forEach로 호출 : 4
// forEach로 호출 : 9
// forEach로 호출 : 16
// forEach로 호출 : 25
{
  arr = ['mike','tom',' jane'];
  arr.forEach((name, index)=> {
    console.log(`forEach반복 : ${index} / ${name}`)
  })
}
//result : 
// forEach반복 : 0 / mike
// forEach반복 : 1 / tom
// forEach반복 : 2 /  jane

{
  const prices = [10.99, 5.99, 3.99, 6.59];
  const tax = 0.19;
  const taxAdjustedPrices = [];
  // for (const price of prices) {
  //   taxAdjustedPrices.push(price * (1 + tax));
  // }
  prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
  });
  
  console.log(taxAdjustedPrices);

// 0: {index: 0, taxAdjPrice: 13.0781}
// 1: {index: 1, taxAdjPrice: 7.1281}
// 2: {index: 2, taxAdjPrice: 4.7481}
// 3: {index: 3, taxAdjPrice: 7.842099999999999}
}

//배열.map() : 각 배열 요소에 함수를 수행 하여 새 배열을 만들고 원래 배열은 변경하지 않습니다. 인수는 값,인덱스,배열자체를 받는다 아래는 값만 사용!
{
  const numbers = [45, 4, 9, 16, 25];
  const result = numbers.map((number) => console.log(`map : ${number * 2}`))  //배열요소 값에서 * 2
}
// map : 90
// map : 8
// map : 18
// map : 32
// map : 50
{
  const userList = [
    {name: 'mike', age: 40},
    {name: 'tom', age: 30},
    {name: 'jane', age : 18}
  ];
  const newUserList = userList.map((user,index) => {
      return Object.assign({}, user, {
        id : index + 1,
        isAdult : user.age > 19
      })
  })
  console.log(newUserList)
}
// 0: {name: "mike", age: 40, id: 1, isAdult: true}
// 1: {name: "tom", age: 30, id: 2, isAdult: true}
// 2: {name: "jane", age: 18, id: 3, isAdult: false}

{
  const prices = [10.99, 5.99, 3.99, 6.59];
  const tax = 0.19;

  const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
  });
  console.log(prices, taxAdjustedPrices);  
  //[10.99, 5.99, 3.99, 6.59]
  // 0: 10.99
  // 1: 5.99
  // 2: 3.99
  // 3: 6.59 
}

{
  const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
  const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
  }));
  
  persons.push({ name: 'Anna', age: 29 });
  persons[0].age = 31;
  
  console.log(persons, copiedPersons);

  // 0: {name: "Max", age: 31}
  // 1: {name: "Manuel", age: 31}
  // 2: {name: "Anna", age: 29}
   
  // 0: {name: "Max", age: 30}
  // 1: {name: "Manuel", age: 31}
}

//배열.filter() : 테스트를 통과하는 배열 요소로 새 배열을 만든다.아래는 값이 18보다 큰 요소의 새 배열을 만든다.
{
const numbers = [45, 4, 9, 16, 25];
  const result = numbers.filter((number) => number > 18)
  console.log(`filter를 이용해서 18보다 큰 수 출력 : ${result}`)  //기존 배열요소에서 18보다 큰 수 출력
}
//result : filter를 이용해서 18보다 큰 수 출력 : 45,25
{
  const numbers = [1,2,3,4,5]
  const result = numbers.filter((number) => {
     return number % 2 === 0
  })
  console.log(`filter를 이용해서 짝수들만 출력 : ${result}`)
}
// filter를 이용해서 짝수들만 출력 : 2,4

//배열.reduce() : 단일 값을 생성(감소)하기 위해 각 배열 요소에서 함수를 실행 / 원래 배열을 줄이지 않습니다
//인수로 함수를 받는다.  (prev,curr) = (누적계산값, 현재값) => return 계산값
{
  const numbers = [45, 4, 9, 16, 25];
  const result = numbers.reduce((prev,curr) => prev + curr) //reduce는 끝에 초기값을 받아들일 수 있다. .reduce((prev,curr) => prev + curr, 100) //result : 199
  console.log(`reduce를 사용해서 배열안 요소의 합계 출력 : ${result}`) 
}
//result : reduce를 사용해서 배열안 요소의 합계 출력 : 99
{
  const arr = [1,2,3,4,5]
  const result = arr.reduce((prev, curr) => {
     return prev + curr
  }, 0) 
  console.log(`reduce합계 : ${result}`)
}
// result : reduce합계 : 15
{
  const userList = [
    {name : 'mike', age : 40},
    {name : 'tom', age : 30},
    {name : 'jane', age : 20},
    {name : 'kate', age : 10},
    {name : 'jack', age : 5},
  ]
  const result = userList.reduce((prev,curr) => {
    if(curr.age > 19) {
      prev.push(curr.name)
    }
    return prev
  },[])
  console.log(`reduce를 이용한 유저리스트에서 성인만 출력 : ${result}`) //reduce를 이용한 유저리스트에서 성인만 출력 : mike,tom,jane
}

{
  const userList = [
    {name : 'mike', age : 40},
    {name : 'tom', age : 30},
    {name : 'jane', age : 20},
    {name : 'kate', age : 10},
    {name : 'jack', age : 5},
  ]
  const result = userList.reduce((prev,curr) => {
      return prev += curr.age
  },0)
  console.log(`reduce를 이용한 유저리스트에서 나이의 총합 출력 : ${result}`)  //reduce를 이용한 유저리스트에서 나이의 총합 출력 : 105
}

{
  const userList = [
    {name : 'mike', age : 40},
    {name : 'tom', age : 30},
    {name : 'jane', age : 20},
    {name : 'kate', age : 10},
    {name : 'jack', age : 5},
  ]
  const result = userList.reduce((prev,curr) => {
    if(curr.name.length === 3) {
      prev.push(curr.name)
    }
    return prev
  },[])
  console.log(`유저리스트에서 이름이 3글자인 사람 : ${result}`) //유저리스트에서 이름이 3글자인 사람 : tom
}

{
  const prices = [10.99, 5.99, 3.99, 6.59];
  const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
  console.log(sum); //27.56
}


//배열.every() : 모든 배열안에 값들이 테스트를 통과하는지 확인하는 boolean값 출력 / 아래는 모든 배열 값이 18보다 큰지 확인합니다.
{
  const numbers = [45, 4, 9, 16, 25];
  const result = numbers.every((number) => number > 18)
  console.log(`every를 사용해서 배열 요소 중 18보다 큰 값이 있는지 확인 : ${result}`) //false
}
//배열.some() : 일부 배열값이 테스트를 통과하는지 확인하는 boolean값 출력 / 아래는 일부 배열값이 18보다 큰지 확인
{
  const numbers = [45, 4, 9, 16, 25];
  const result = numbers.some((number) => number > 18)
  console.log(`some()을 이용해서 배열 요소 중 18보다 큰 값이 있는지 확인 : ${result}`) //true
}

//Array.indexOf() 항목을 찾을 수 없는 경우 -1을 반환합니다.
//배열.indexOf() : 요소 값에 대한 배열을 검색하고 해당 인덱스 위치를 반환한다.
// 요소의 중복 항목이 두 번 이상 있는 경우 첫 번째 발생의 위치를 반환합니다.
{
  const juices = ['콜라', '사이다', '환타', '환타', '자몽에이드', '식혜','미숫가루'];
  const result = juices.indexOf('환타')
  console.log(`indexOf()는 요소의 인덱스 위치를 반환한다. : ${result}`) //2
}
{
  const personData = [{ name: 'Max' }, { name: 'Manuel' }];
  console.log(personData.indexOf({ name: 'Manuel' })); //-1
}
//배열.lastIndexOf() : 요소 값에 대한 배열을 검색하고 해당 인덱스 위치를 반환한다.
// 요소의 중복 항목이 두 번 이상 있는 경우 마지막 요소의 발생의 위치를 반환합니다.
{
  const juices = ['콜라', '사이다', '환타', '자몽에이드', '콜라', '식혜','미숫가루'];
  const result = juices.lastIndexOf('콜라')
  console.log(`lastIndexOf()는 요소의 인덱스 위치를 반환한다. : ${result}`) //4
}
//배열.includes() : 배열의 요소 존재를 판별하는데 확인할 수 있습니다(IndexOf와 달리 NaN 포함)하며 boolean값으로 출력됨
{
  const juices = ['콜라', '사이다', '환타', '자몽에이드', '콜라', '식혜','미숫가루'];
  const result = juices.includes('미란다')
  console.log(`includes()는 지정한 요소가 있는지 없는지 boolean값으로 출력한다. : ${result}`) //false
}
//배열.find() : 첫번째 배열 요소의 값을 반환한다 / 아래는 18보다 큰 첫번째 요소를 찾거나 값을 반환한다.
{
  const numbers = [4, 9, 16, 25, 29];
  const result = numbers.find((number) => number > 18)
  console.log(`find()는 조건에 맞는 요소의 첫번째를 반환한다. : ${result}`) //25
}
{
  const numbers = [1,2,3,4,5]
  const result = numbers.find((number)=> {
       return number % 2 === 0
  })
  console.log(`find짝수출력 : ${result}`) //2
}
{
  const userList = [
    {name: 'mike', age: 40},
    {name: 'tom', age: 30},
    {name: 'jane', age : 20}
  ];
  const result = userList.find((user) => {
    if(user.age < 25) {
       return true;
    }
    return false;
  })
  console.log(result)
}
// {name: "jane", age: 20}


//배열.findIndex() : 첫번째 배열 요소의 인덱스를 반환한다 / 아래는 18보다 큰 첫번째 요소의 인덱스를 출력
{
  let userList = [
    {name: 'mike', age: 40},
    {name: 'tom', age: 30},
    {name: 'jane', age : 20}
  ];
  const result = userList.findIndex((user) => {
    if(user.age < 25) {
       return true;
    }
    return false;
  })
  console.log(result)
}
// 2

{
  const numbers = [4, 9, 16, 25, 29];
  const result = numbers.findIndex((number) => number > 18)
  console.log(`findIndex()는 조건에 맞는 요소의 첫번째를 반환한다. : ${result}`) //3
}

//배열.from() : 길이 속성 또는 실행 가능한 개체가 있는 모든 개체에서 Array개체를 반환한다.
{
  const result = Array.from("ABCDEF")
  console.log(`from()는 길이 속성 또는 실행 가능한 개체가 있는 모든 개체에서 Array개체를 반환 : ${result}`) // A,B,C,D,E,F
}
/*----------------------------------------------------------------------------------------------------*/



// Q1. 배열에서 문자열 만들기
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ')
  console.log(result)
}
//result : apple, banana, orange

// Q2. 문자열로 배열 만들기
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(', ')
  console.log(result)
}
//result : (4) ["🍎", "🥝", "🍌", "🍒"]

// Q3. 이 배열을 다음과 같이 보이게 합니다.: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse()
  console.log(result) //result : [5, 4, 3, 2, 1]
  console.log(array) //result : [5, 4, 3, 2, 1]
}

// Q4. 처음 두 요소 없이 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5)
  console.log(result) //result : 3,4,5  -> 1,2 제외됨
  console.log(array) //result : 1,2,3,4,5 
}



class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. 점수가 90점인 학생을 찾아라
{
  // const result = students.find(function (student) {
  //   return student.score === 90;
  // })
  // console.log(result)
  const result = students.find((student) => student.score === 90)
  console.log(result.name) //C
}
//result : Student {name: "C", age: 30, enrolled: true, score: 90}

// Q6. 수업의 등록된 학생들의 배열을 만들다
{
  const result = students.filter((student) => student.enrolled);
  console.log(result)
}
//result : 
// (3) [Student, Student, Student]
// 0: Student {name: "A", age: 29, enrolled: true, score: 45}
// 1: Student {name: "C", age: 30, enrolled: true, score: 90}
// 2: Student {name: "E", age: 18, enrolled: true, score: 88

// Q7. 학생의 점수만 포함하는 배열 만들기
// result : [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result)
}
//result : (5) [45, 80, 90, 66, 88]
//학생들의 점수를 두배로 만들고 싶다면 (student) => student.score * 2

// Q8. 점수가 50점 미만인 학생이 있는지 확인 (true? false?)
{
  const result = students.some((student) => student.score < 50)
  console.log(`some을 이용해서 점수가 50점 미만인 학생이 있는지 확인 : ${result}`) //true

  //모든 배열의 조건이 만족해야 한다면? 배열의 있는 모든 요소들이 50보다 작은지를 판별 : 모든학생들이 50점보다 높거나 같다면 false기 때문에 앞에 !부정을 사용해서 true로 리턴
  const result2 = !students.every((student) => student.score >= 50)
  console.log(`every를 이용해서 점수가 50점 미만인 학생이 있는지 확인 : ${result2}`) //true
}

// Q9. 학생들의 평균 점수 계산 : 학생들의 전체 총점수(result) / 학생 수(students.length)
//result : 73.8
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length)
}

// Q10. 학생들의 모든 점수를 포함하는 문자열 만들기 : 학생들의 점수를 배열로 뽑아내고 그 뒤에 문자열로 만들면 됨
// result : '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(',')
  console.log(result)
}

//보너스 위 문제에서 추가로 50점이거나 미만인 학생은 제외!
//result : 80,90,66,88
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join()
  console.log(result)
}

// Bonus! do Q10 점수를 오름차순으로 정렬 후 문자열로 결과 출력
// result : '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a,b) => a-b)
  .join()
  console.log(result)
}

console.log('----------------------------------------------')

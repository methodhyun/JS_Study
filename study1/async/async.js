

`use strict`

//async && await : 프로미스를 조금 더 깔끔하고 명확하게 쓸수 있게 함
//clear style of using promise

//async 사용
async function fetchUser() {
    //do network request in 10 secs....
    
    //Promise
    // return new Promise((resolve, reject) => {
    //     resolve('kim') 
    // })

    //async function앞에 async
    return 'kim'
}

const user = fetchUser();
user.then(console.log)
console.log(user)






//await
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve()
    }, ms));
}
async function getApple() {
    await delay(2000);
    // throw 'error';
    return '사과'
}
async function getBanana() {
    await delay(2000);
    return '바나나'
}

//async
async function pickFruits() {

// 둘 다 2초 후에 작업이므로 의미 getApple에서 2초 getBanana에서 2초 총 4초가 소모된다 의미X   
// const apple = await getApple()
// const banana = await getBanana()
//그러므로....getApple(), getBanana()를 Promise로 만든다.~ 하지만 이것도 비추! 더러운 코드~
//   const applePromise = getApple()
//   const bananaPromise = getBanana()
//   //동기화
//   const apple = await applePromise
//   const banana = await bananaPromise
//   return `${apple} + ${banana}`
}

//Promise
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`)
//     })
// }

// pickFruits().then(console.log)

//Promise.all로 async정의된 모든것을 동시에 가져옴
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log)


//Promise.race로 async정의된것들중 ms가 빠른거 먼저 한개만 가져옴 
function pickOnlyOne() {
     return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)

{
//Promise.all
//Promise.race
const getTodo = async (id="") => {
    const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await todoResponse.json()
    return todo;
  }
  
  const allExample = async () => {
    const todo1 = getTodo(1)
    const todo2 = getTodo(2)
    return Promise.all([todo1, todo2])
  }
  
  const raceExample = async () => {
    const todo1 = getTodo(1)
    const todo2 = getTodo(2)
    return Promise.race([todo1, todo2])
  }
  
  // todo1과 todo2 모두 출력
  allExample().then(console.log)
  // todo1과 todo1 중 빨리 되는 것만 출력.
  // 실제로 코드 실행 결과 1이 나올 때도 있고 2가 나올 때도 있었다.
  for(let i=0; i<5; i++) raceExample().then(todo=>console.log(todo.id))
}

//async/await
{
    function getName(name) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(name)
            }, 1000);
        })
    }

    async function showName() {
        const result = await getName('mike')
        console.log(result)
    }
    console.log('async시작')
    showName();
}

{
    const f1 = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('promise 1번 주문')
            }, 1000);
        })
    }
    const f2 = (message) => {
         console.log(message)
         return new Promise((resolve,reject) => {
             setTimeout(() => {
                 resolve('promise 2번 주문') 
                // reject(new Error('promise Error'))
             }, 3000);
         })
    }
    const f3 = (message) => {
        console.log(message)
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('promise 3번 주문')
            }, 2000);
        })
    }
    
    console.log('order async시작')
    async function order() {
      try {
        // const result3 = await f1()
        // const result4 = await f2(result3)
        // const result5 = await f3(result4)
        // console.log(result5)
        //Promise.all
         const result5 = await Promise.all([f1(),f2(),f3()])
         console.log(result5)
      } catch (e) {
          console.log(e)
      }
      console.log('order async종료') 
    }
    order()
}
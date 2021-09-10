'use strict'

//promise는 비동기 작업을 위해서 콜백함수 대신에 유용하게 쓰일 수 있는 자바스크립트 객체입니다.
//State(상태) : pending(보류중) -> fulfilled(충족) or rejected(거부) 
//Producer(생산자) vs Consumer(소비자)

//1.Producer
//새로운 프로미스가 만들어질때는 우리가 전달한 executor(resolve, reject)라는 콜백함수가 바로 자동실행이 된다.
{
    const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...')
    setTimeout(() => {
        resolve('kimseonghyun')
        reject(new Error('no network'))
    }, 2000)
})

//2 Consumers : 
// then : 정상적인 수행이 된다면~ promise.resolve의 value값을 가져와서 작업수행
// catch : reject된 Error 출력
// finally : 성공하든 실패하든 마지막에 호출
promise
.then((value) => {
 console.log(value)
})
.catch((error) =>  {
   console.log(error)
})
.finally(()=>{
    console.log('finally')
});
}

//Promise chaining : .then의 연속 then은 바로 값을 전달할 수도 있고 또 다른 Promise를 전달해도 된다.
{
    const fetchNumber =  new Promise((resolve,reject) => {
        setTimeout(()=> {
          resolve(1)
        },1000)
    })

    fetchNumber
    .then(num => num * 2) //2
    .then(num => num * 3) //6
    .then(num => {
        return new Promise((resolve,reject)=> {
            setTimeout(()=> {
               resolve(num - 1) //5          
            },1000)
        })
    })
    .then(num => console.log(num)) //결과 : 5
}

//Error Handling
const getHen = () => 
new Promise((resolve,reject) => {
   setTimeout(() => {
       resolve('닭')
   },1000)
})
const getEgg = hen =>
new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error('error'))
        //resolve(`${hen} -> 계란`)
    },1000)
 })
 const cook = egg => 
 new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`${egg} -> 요리`)
    },1000)
 })

 getHen()
//  .then(hen => getEgg(hen))
//  .then(egg => cook(egg))
//  .then(meal => console.log(meal))
//then에서 한가지의 값만 받아서 전달하는 경우 생략이 가능
.then(getEgg)
//계란을 받아오는게 실패했을때 대처하는 catch
.catch(error => {
    return '빵'
})
.then(cook)
.then(console.log)
.catch(console.log)


// new Promise
// state : pending(대기)     ---- 성공 --->     resolve(value)  ---->  state : fulfilled(이행) / result : value
// result : undefined       ---- 실패 --->     reject(error)   ---->  state : rejected(거부) / result : error
{
  //resolve : 성공 / reject : 실패
  const pr = new Promise((resolve, reject) => { 
      setTimeout(() => {
           resolve('ok')
      }, 5000);
  })  

  pr.then(result => {
    console.log(result)
  }).catch(error => {
      console.log(error)
  }).finally(()=> {
      console.log('끝')
  })
}

//callback hell
{
    const f1 = (callback) => {
        setTimeout(() => {
            console.log('1번 주문 완료')
            callback();
        }, 1000);
    }
    const f2 = (callback) => {
        setTimeout(() => {
            console.log('2번 주문 완료')
            callback();
        }, 3000);
    }
    const f3 = (callback) => {
        setTimeout(() => {
            console.log('3번 주문 완료')
            callback();
        }, 2000);
    }


    console.log('시작')
    f1(function (){
        f2(function (){
            f3(function(){
                console.log('끝')
            })
        })
    })
}

//promise
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
                //reject(new Error('promise Error'))
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


    console.log('promise 시작') 
    // f1()
    // .then(resolve => f2(resolve))
    // .then(resolve => f3(resolve))
    // .then(resolve => console.log(resolve))
    // .catch(console.log)
    // .finally(() => {
    //     console.log('promise 끝')  //순차적으로 promise1~3번 주문 출력
    // })

    // Promise.all : 모든 정보를 누락된 것 없이 보여주거나 아에 안보여줄때 사용
    Promise.all([f1(),f2(),f3()]).then((resolve) => {
        console.log(resolve)   //["promise 1번 주문", "promise 2번 주문", "promise 3번 주문"]  
    })
    
    //Promise.race : 레이스경주처럼 먼저 도착한 정보 한가지만 실행 후 종료
    Promise.race([f1(),f2(),f3()]).then((resolve) => {
        console.log(resolve)    //promise 1번 주문
    })
       

}


//astnc await

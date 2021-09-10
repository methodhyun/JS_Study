'use strict';

/* callback hell example */ 

//사용자의 데이터를 백엔드 서버에서 받아오는 클래스 정의
class UserStorage {
  loginUser(id, password) {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === 'kim' && password === 'dream') || 
                (id === 'coder' && password === 'du') 
               ) 
            {
                resolve(id);
            } else {
                reject(new Error('not found!'))
            }
        }, 2000);
      })
  }

  getRoles(user) {
     return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(user === 'kim') {
                resolve({
                    name : 'kim', role : 'admin'
                })
            } else {
                reject(new Error('no access'))
            }
        },1000)
     })
  }
}

const userStorage =  new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id,password)
// .then(user => userStorage.getRoles(user))
.then(userStorage.getRoles) //인자값이 같으니까 생략
.then(user => alert(`hello, ${user.name}, you have a ${user.role} role!`))
.catch(console.log)




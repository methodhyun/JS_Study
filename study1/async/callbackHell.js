'use strict';

/* callback hell example */ 

//사용자의 데이터를 백엔드 서버에서 받아오는 클래스 정의
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
        if (
            (id === 'kim' && password === 'dream') || 
            (id === 'coder' && password === 'du') 
           ) 
        {
            onSuccess(id);
        } else {
            onError (new Error('not found!'))
        }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if(user === 'kim') {
            onSuccess({
                name : 'kim', role : 'admin'
            })
        } else {
            onError(new Error('no access'))
        }
    },1000)
  }
}

const userStorage =  new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
          user,
          userWithRole => {
            alert(`hello, ${userWithRole.name}, you have a ${userWithRole.role} role!`)
          }, 
          error => {
            console.log(error)
          }
        )
    }, 
    error => {
     console.log(error)
    }
)

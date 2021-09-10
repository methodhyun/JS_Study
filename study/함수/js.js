'use strict'

const btn = document.querySelector('button')

const person = {
    name : 'kim',
    //method
    greet : function () {
       console.log('Hello')
    }
}
person.greet()


const start = function () {
    console.log('start game')
}


btn.addEventListener('click', start)

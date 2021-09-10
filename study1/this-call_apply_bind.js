'use strict'

//call, apply, bind
//함수호출방식과 관계없이 this를 지정할 수 있다
{
    const mike = {name : 'john mike'}
    const tom = {name : 'tom hanks'}
    
    function showName() {
        console.log(this.name) //john mike
    }
    showName.call(mike)

    function updateUser(birthYear, occupation) {
        this.birthYear = birthYear,
        this.occupation = occupation
    }

    updateUser.call(mike, 2021, 'singer') //call은 일반적인 매개변수를 직접 받는다!
    console.log(mike) //{name: "john mike", birthYear: 2021, occupation: "singer"}

    updateUser.apply(tom, [2021, 'teacher']) //apply는 매개변수를 배열로 받는다.
    console.log(tom) //{name: "tom hanks", birthYear: 2021, occupation: "teacher"}
    
}
   //call/apply는 동작방식은 같지만 받을 수 있는 매개변수가 다르다.
{
    const nums = [1,2,3,4,5]
    const minNum = Math.min(...nums)
    const maxNum = Math.max(...nums)
    // const minNum = Math.min.call(null, ...nums)
    // const maxNum = Math.max.call(null, ...nums)
    // const minNum = Math.min.apply(null, nums)
    // const maxNum = Math.max.apply(null, nums)

    console.log(minNum)
    console.log(maxNum)
}

//bind : 함수의 this값을 영구히 바꿀 수 있다.
{
    const mike = {name : 'john mike'}

    function updateUser(birthYear, occupation) {
        this.birthYear = birthYear,
        this.occupation = occupation
    }

    const updateMike = updateUser.bind(mike)
    updateMike(2021, 'coder')
    console.log(mike) //{name: "john mike", birthYear: 2021, occupation: "coder"}
    
}

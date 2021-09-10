/*JSON*/

/***************Object --> Json으로 변환하는 법********************/
//JSON.stringify (obj)
{
    let json = JSON.stringify(true);
    console.log(json) //result : true

    json = JSON.stringify(['apple','banana'])
    console.log(json) //result : ["apple","banana"]
} 

    const rabbit = {
        name : 'tori',
        color : 'white',
        size : null,
        brithDate : new Date(),
        jump : () => {
            console.log(`${this.name} can jump!`)
        }
    }
    let json = JSON.stringify(rabbit)
    console.log(json) //result : {"name":"tori","color":"white","size":null,"brithDate":"2021-07-09T08:53:01.883Z"} : 함수는 나오지 않는다!
    
    //함수도 표시하려면? (key,value)를 이용한 콜백함수를 사용!
    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key : ${key}, value : ${value}`);
        return value
    });
    console.log(json) 
    // key : , value : [object Object]
    // json.js:28 key : name, value : tori
    // json.js:28 key : color, value : white
    // json.js:28 key : size, value : null
    // json.js:28 key : brithDate, value : 2021-07-09T09:05:41.932Z
    // json.js:28 key : jump, value : () => {
    //    console.log(`${this.name} can jump!`)
    //  }

    //return value ------> return key === 'name' ? 'kim' : value;
    //result : {"name":"kim","color":"white","size":null,"brithDate":"2021-07-09T09:04:30.875Z"}


//result : {"name":"tori"}




/***************Json --> Object으로 변환하는 법********************/
// JSON.parse (json)
json = JSON.stringify(rabbit)
console.log(json) //{"name":"tori","color":"white","size":null,"brithDate":"2021-07-09T09:27:47.250Z"}
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'brithDate' ? new Date(value) : value 
})
console.log(obj) //{name: "tori", color: "white", size: null, brithDate: "2021-07-09T09:27:47.250Z"}
console.log(obj.brithDate.getDate()) //{name: "tori", color: "white", size: null, brithDate: Fri Jul 09 2021 18:34:08 GMT+0900 (대한민국 표준시)}




`use strict`

//setTimeout : 일정시간이 지난 후 함수를 실행
{
    function fn() {
        console.log('setTimeout') //1초 뒤 setTimeout
    }
    setTimeout(fn, 1000) //setTimeout은 두개의 매개변수를 받는다, 첫번째는 일정시간이 지난 후 실행할 함수, 시간(ms)
}
{
    setTimeout(() => {
        console.log('setTimeout')
    }, 2000);
}
{
    function showName(name) {
    console.log(name)   
    }
    setTimeout(showName,3000,'tom') //3초 뒤 tom
}

//setInterval : 일정 시간 간격마다 함수를 실행
// {
//     function showName(name) {
//         console.log(name)   
//     }
//    setInterval(showName,3000,'mike') //3초 간격마다 mike 출력
// }
{
    let num = 0;
    function showTime() {
        console.log(`접속하신지 ${num++}초가 지났습니다.`)
        if( num > 5) {  //num=5가 되면 중지
            clearInterval(tId)
        }
    }
    const tId = setInterval(showTime,1000)
}
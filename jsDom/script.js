const ul = document.querySelector('ul')
const prevElement = ul.previousElementSibling
console.log(prevElement)

//toggle
const h1 = document.querySelector('h1')
h1.textContent = 'new Dom'

const section = document.querySelector('section')
const toggleBtn = document.getElementById('toggleBtn')
toggleBtn.addEventListener('click',() => {
//    if(section.className = 'visible') {
//     section.className = 'invible'
//    } else {
//     section.className = 'visible'
//    } 
     
    section.classList.toggle('invisible')
    h1.classList.toggle('red-bg')
})

//innerHTML은 html에 모든 컨텐츠 요소를 변경하거나 추가할때 사용! 이유 : 사용자 입력이 손실되거나 변경되지 않은 모든 html요소들이 다시 렌더링된다.
// list.innerHTML = list.innerHTML + '<li>list-item4</li>'

//새로운 요소를 추가하는방법
//ul에 새로운 li요소를 생성
const newLi = document.createElement('li')
//ul에 새로운 li를 자식요소로 추가
ul.appendChild(newLi)
//새로운 li요소에 textContent 추가
newLi.textContent = 'new List-item4'
//스타일 추가
newLi.style.color = 'green'
//ul에 맨앞요소로 추가
ul.prepend(newLi)

//append로 기본 텍스트 요소를 추가
ul.append('append로 텍스트 추가')

//새로운 ul추가
{
const ul2 = document.createElement('ul')
section.append(ul2)

const newLi1 = document.createElement('li')
ul2.append(newLi1)
newLi1.textContent = '두번째 ul에 첫번째 li'
const newLi2 = document.createElement('li')
ul2.append(newLi2)
newLi2.textContent = '두번째 ul에 두번째 li'

const newLi3 = document.createElement('li')
ul2.append(newLi3)
newLi3.textContent = '두번째 ul에 세번째 li'

const secondLi = ul2.children[0]
secondLi.insertAdjacentElement('afterend', newLi3)
console.log(ul2.firstElementChild.nextElementSibling)

//노드복제
const newLi4 = newLi1.cloneNode(true) //true/false값 구분 : true-안에 내용도 포함시켜서 복제, false-기본 li만 복제
ul2.append(newLi1, newLi4)

//교체
ul2.firstElementChild.replaceWith(newLi4) //첫번째 요소를 새로운 newLi4로 교체

//삭제
const removeUl = document.querySelector('.removeUl')
removeUl.style.backgroundColor = 'blue' 
removeUl.remove()
}

{
  
}

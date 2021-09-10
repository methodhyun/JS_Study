// 다크모드
document.querySelector('.dark-mode-switch').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark')
  document.querySelector('body').classList.toggle('light')
})

const calendarDays = document.querySelector('.calendar-days')

// 이전월/다음월 버튼 변수 생성
const prevBtn = document.getElementById('prev-year')
const nextBtn = document.getElementById('next-year')

const date = new Date()

const form = document.querySelector('.form')
const inputBox = document.getElementById('input-box')
const todoAddBtn = document.getElementById('todoAddBtn')
const todoList = document.getElementById('todo-list')
const todoWrap = document.querySelector('.left')
todoWrap.style.display = 'none'
const schedule = []
const tmpData = []

let targetYear = ''
let targetMonth = ''
let targetDay = ''
let targetTodos = []

const todoLI = document.createElement('li')


//form input전송을 통한 페이지 이동 중단을 위해 preventDefault 추가 
form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodoList
})

//등록 버튼 클릭 이벤트
todoAddBtn.addEventListener('click', addTodoList)

// 이전달 버튼 클릭
prevBtn.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1)
  renderCalender()
})

// 다음달 버튼 클릭
nextBtn.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1)
  renderCalender()
})


const renderCalender = () => {
  // date함수의 년,월 재사용을 위해 변수지정

  // 오늘 날짜 html노출
  const date =  getCurrentDate()
  document.getElementById('currYearMonth').textContent = `${date.year}년 ${date.month + 1}월`

  // 지난달 날짜와, 다음 달 날짜가 부분적으로 표시되어야한다.
  // 그러므로 1)지난 달 마지막 날짜와 요일, 2)이번 달 마지막 날짜와 요일에 대한 데이터가 필요
  // --> 매월마다 마지막 날짜의 수가 31일인 경우, 30일인 경우, 2월에는 28일...
  // 그래서 1번 정보를 통해서 지난 달 날짜 며칠을 몇 개를 그려내야 될지 결정하고
  // 2번 정보를 통해서 다음 달 날짜 며칠, 몇 개를 그려내야 될지를 결정
  // 새로운 Date객체를 생성할 때, 파라미터 date에 해당하는 부분에 0을 전달하게 되면, 지난달의 마지막 날의 Date 객체가 생성.
  // 같은 원리로 파라미터 다음 달의 0번째 날을 뽑으면, 이번 달의 마지막 날 Date객체가 생성
  const prevLast = new Date(date.year, date.month, 0)
  const thisLast = new Date(date.year, date.month + 1, 0)

  // 지난달 마지막 날짜(PLDate)와 요일(PLDay)
  const PLDate = prevLast.getDate()
  const PLDay = prevLast.getDay()

  // 이번 달 마지막 날짜(TLDate)와 요일(TLDay)
  const TLDate = thisLast.getDate()
  const TLDay = thisLast.getDay()

  // 날짜들을 담아둘 배열만들기
  // 지난 달 날짜와 다음 달 날짜는 상황에 따라 그릴 수도, 그리지 않을 수도 있기 때문에 일단 초기값은 빈 배열로 두고,
  // const thisDates = [...Array(TLDate + 1).keys()].slice(1)
  // 1. Array(n)으로 배열을 만들면 길이가 n인 배열이 생성. (이때 모든 요소들은 undefined)
  // 2. 그런데 모든 요소들이 empty 값이기 때문에 keys() 메서드를 활용하면 0부터 n - 1까지의 Array Iterator가 생성되는데,
  // 3. 전개 구문을 통해서 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어낼 수가 있다.
  // 4. 그래서 이번 달 마지막 날짜 + 1을 n에 전달해주고
  // 5. 제일 앞에 있는 0을 없애기 위해서 slice 메서드를 활용.
  const prevDates = []
  const thisDates = [...Array(TLDate + 1).keys()].slice(1)
  const nextDates = []

  // 첫 번째는 이전 달을 표현할 날짜들을 생성,
  // 만약 지난달 마지막 요일이 토요일(6)이라면 굳이 그릴 필요 없으니깐 조건문을 먼저 작성.
  // 반복문의 조건 부분은 0부터 시작해서 지난달 마지막 요일이 될 때까지 반복하게 작성.
  // 지난달의 마지막 날짜부터  1씩 줄어든 값을 unshift 메서드를 통해 prevDates 배열에 앞쪽으로 계속 채워 넣는 방식
  // 두 번째는 다음 달을 표현할 날짜들인데 이번 달 마지막 날짜의 요일을 기준으로 필요한 개수를 파악해서 1부터 1씩 증가시키며 nextDates 배열에 하나씩 채워 넣는 방식
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i)
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  // concat 메서드를 통해서 세 배열을 모두 합친 다음에, forEach 메서드로 전체 요소들을 돌면서, html 코드로 데이터를 하나씩 수정
  // .dates 태그의 innerHTML 프로퍼티에 dates 배열에 join 메서드를 호출한 결과를 할당!
  // 이전 달과 다음 달 부분의 투명도를 조절해서 이번 달 날짜들과의 구분짓기.
  // 스타일을 주기 위해서 date를 그리는 부분에 html 태그를 수정.
  // dates 배열을 모두 만들고서 forEach로 HTML을 만드는 부분은
  // 지난달 부분을 알아내기 위해서 첫날의 index(firstDateIndex),를 찾고,
  // 다음 달 부분을 알아내기 위해서 마지막 날의 index(lastDateIndex)를 찾기.
  // 그리고 삼항 연산자를 통해서 이번 달에 해당하는 부분은 this, 그리고 나머지는 other라는 문자열로 구분해서
  // 날짜 부분을 span 태그로 감싸서 class로 지정
  // date에 class를 줄 경우에 투명도를 조절하게 되면, 달력의 격자를 그리고 있는 테두리 부분도 같이 투명도가 적용 되기 때문에 글자에만 투명도를 주기 위함 :)
  const dates = prevDates.concat(thisDates, nextDates)
  const firstDateIndex = dates.indexOf(1)
  const lastDateIndex = dates.lastIndexOf(TLDate)

  dates.forEach((date, index) => {
    const condition = index >= firstDateIndex && index < lastDateIndex + 1
      ? 'this'
      : 'other'
    dates[index] = `<div class="dateBox" id="${date}"><pan class=${condition}>${date}</span></div>`
  })

  calendarDays.innerHTML = dates.join('')

  // 오늘 날짜 표시
  // 오늘 날짜는 달력이 그려지고 난 다음에 처리해야 하므로, renderCalendar 마지막 부분에 정리
  // 1. new Date()를 통해 오늘 날짜에 맞는 date객체를 새로 만들어주고,
  // 2. viewMonth와 viewYear가 today의 데이터와 같은지 비교를 한 다음
  // 3. 만약 2번이 충족된다면 this라는 클래스를 가진 태그들을 모두 찾아내서 반복문 돌리기.
  // 4. 그리고 해당 태그가 가지고 있는 날짜는 문자열이기 때문에 + 단항 연산자를 통해 숫자로 변경한 뒤, 오늘 날짜와 비교하고
  // 5. 4번이 충족된다면 해당 태그에 today라는 클래스를 추가하고 break로 반복문을 종료.
  // 5번에서 break를 하는 이유는 오늘 날짜는 하나밖에 없기 때문에 찾으면 더 이상 뒤의 반복을 할 필요가 없기 때문:)
  // 이제 오늘 날짜가 걸린 span 태그에는 today라는 클래스가 추가되었으므로...
  // style에서 today에 대한 스타일을 정리!
  // today의 글자 색을 하얗게 바꿔주고 가상 클래스로 뒷 배경 깔기
  const today = new Date()
  if (date.month === today.getMonth() && date.year === today.getFullYear()) {
    for (const date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today')
        break
      }
    }
  }
}

const renderTodoList = (item, cnt) => {
  const tmpLiNode = document.createElement('li')
  // tmpLi += '<li>'+item+'<button type="button" class="del-data">삭제</button></li>'
  tmpLiNode.textContent = item
  // createElement로 생성되는 버튼 태그를 사용해야 할 경우 해당 위치에서 바로 생성시키고
  // 이벤트처리를 하는게 좋다.
  const deleteTodoBtn = document.createElement('button')
  deleteTodoBtn.setAttribute('type', 'button')
  deleteTodoBtn.setAttribute('class', 'del-data')
  deleteTodoBtn.textContent = '삭제'
  deleteTodoBtn.setAttribute('data-id', cnt)
  deleteTodoBtn.addEventListener('click', (e) => {
    deleteTodo(e)
  })
  tmpLiNode.appendChild(deleteTodoBtn)
  todoList.appendChild(tmpLiNode)
}

const renderTodo = () => {
  const date =  getCurrentDate()
  todoDate = document.querySelectorAll('.dateBox')  
  todoDate.forEach((index) => {

     index.addEventListener('click', (e) => {
      
      todoDate.forEach((item) => {
        item.classList.remove('selectDate')
      })

      index.classList.add('selectDate')

      targetYear = date.year
      targetMonth = date.month + 1
      targetDay = parseInt(index.id)
      // find target date
      const targetDate = findTargetDate(targetYear, targetMonth, targetDay)
      const parentUL = document.querySelector('#todo-list')
      const childrenLi = parentUL.querySelectorAll('li')
      Array.prototype.forEach.call(childrenLi, (item) => {
        item.remove()
      })

      if (!targetDate) {
        schedule.push({
          year: date.year,
          month: date.month + 1,
          day: parseInt(index.id),
          todos: []
        })
      } else {
        targetTodos = targetDate.todos
        let cnt = 1
        targetTodos.forEach((item) => {
          renderTodoList(item, cnt)
          cnt++ 
        })
      }
      //todo title에 선택한 날짜에 년,월,일 innerHTML처리
      document.querySelector('.main-date').innerHTML = `${targetYear}년 ${targetMonth}월 ${targetDay}일`
      todoWrap.style.display = 'block'
    })
  })
}

// 일정 추가 함수
// 일정 등록 input에 빈값일 경우 등록을 금지하고 return하며 제대로 된 입력값이 등록될 경우에 처리
// 해당 날짜를 추적해서 일정을 등록 시킨다.
const addTodoList = () => {
  if (inputBox.value === null || inputBox.value === '') {
    return
  }

  const targetDate = findTargetDate(targetYear, targetMonth, targetDay)
  const parentUL = document.querySelector('#todo-list')
  const childrenLi = parentUL.querySelectorAll('li')
  Array.prototype.forEach.call(childrenLi, (item) => {
    item.remove()
  })

  targetTodos = targetDate.todos
  targetTodos.push(inputBox.value)

  let cnt = 1
  targetTodos.forEach((item) => {
    renderTodoList(item, cnt)
    cnt++
  })
  inputBox.value = ''
}

// 일정 삭제 함수
// 생성한 버튼에 setAttribute로 data-id를 만든 후
// 지정된 날짜에 등록한 일정을 찾기 위해 이벤트e 파라미터를 받은 후 e.currentTarget.getAttribute로
// 해당 버튼에 위치를 가져온다
// 선택한 날짜 아이템을 find메서드로 찾은 후 해당 날짜에 todo알정을 배열에서 삭제 시키고
// e.currentTarget.parentNode.remove()를 사용하여 html화면에서도 삭제 시킨다
// 순서상으로 데이터 관련 삭제 처리를 우선 시 하고 html화면처리를 후에 한다.
const deleteTodo = (e) => {
  // console.log(e.currentTarget.parentNode.parentNode.querySelectorAll('li').length);
  const targetIndex = e.currentTarget.getAttribute('data-id')
  const targetDate = findTargetDate(targetYear, targetMonth, targetDay)
  //cnt변수에 초기값을 1로 지정했기때문에 인덱스0번째 처리를 위한 targetIndex - 1
  targetDate.todos.splice(targetIndex - 1, 1)
  e.currentTarget.parentNode.remove()
}

const getCurrentDate = () => {
  const viewYear = date.getFullYear()
  const viewMonth = date.getMonth()
  return {
    year : viewYear,
    month: viewMonth
  }
}

const findTargetDate = (year, month, day) => {
  return schedule.find((item) => {
    return item.year === year && item.month === month && item.day === day
  })
}

renderCalender()
renderTodo()
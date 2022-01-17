const screen = document.querySelector('.calc-screen p')
const button = document.querySelector('.buttons')
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

const signs = ['+', '-', 'X', '/']

let a = ''
let b = ''
let singCalc = ''
clearAll = () => {
  a = ''
  b = ''
  singCalc = ''
 
}
button.onclick = (event) => {
  // проверям попадание по кнопке
  if (event.target.classList.contains('btn')) {
    btn = event.target.textContent
    if (numbers.includes(btn)) {
      if (a !== '' && singCalc !== '') {
        b += btn
        screen.textContent = b
      } else if (singCalc == '') {
        a += btn
        screen.textContent = a
      }
    } else if (signs.includes(btn)) {
      if (a !== '' && b!== '' && singCalc !== ''){
        equally()
        console.log(a);
      }

      singCalc = btn
    } else if (btn === 'ac') {
      clearAll()
      screen.textContent = '0'
    } else if (btn === '+/-') {
      if (a !== '' && singCalc !== '') {
        b = -b
        screen.textContent = b
      } else if (singCalc == '') {
        a = -a
        screen.textContent = a
      }

    } else if(btn === '%'){
      screen.textContent = 'Увы =)'
      clearAll()
    } else {
      equally()
      clearAll()
    }
  }
}

function equally() {
  if (singCalc == '+') {
    res = (+a) + (+b)
  } else if (singCalc == '-') {
    res = a - b
  } else if (singCalc == 'X') {
    res = a * b
  } else {
    if (b == '0') {
      res = 'Дел. на 0'
      screen.textContent = res
      clearAll()
    } else {
      res = a / b
    }
  }
  screen.textContent = res
  a = res
 }

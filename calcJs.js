let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;
let dot = '.'

const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.screen p');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.ac');
const plus_minus = document.querySelector('.plus_minus');
const percent = document.querySelector('.percent');
const devider = document.querySelector('.dot');

for (i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value')
        if (isFirstValue === false){
            getFirstValue(atr)
        } else {
            result.innerHTML = 'Error range'
        }
        if (isSecondValue === false){
            getSecondValue(atr)
        }
    })
}

const getFirstValue = (elem) => {
    result.innerHTML = '';
    firstValue += elem;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}

const getSecondValue = (elem) => {
    if (firstValue != '' && sign != ''){
        secondValue += elem;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

const getSign = () => {
    for(let i = 0; i < signs.length; i++ ){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign()

plus_minus.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != ''){
        resultValue = -firstValue;
        firstValue = resultValue
    }
    if (secondValue != ''){
        resultValue = -secondValue;
        secondValue = resultValue
    }
    if (firstValue != '' && secondValue != '' && sign != ''){
        resultValue = -resultValue
    } 

    result.innerHTML = -resultValue
})

percent.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue  = firstValue / 100;
        firstValue = resultValue 
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = resultValue / 100
    }

    result.innerHTML = resultValue
})

clear.addEventListener('click', () =>{
    result.innerHTML = 0;

     firstValue = '';
     isFirstValue = false;
     secondValue = '';
     isSecondValue = false;
     sign = '';
     resultValue = 0;
})

devider.addEventListener('click', () =>{
    result.innerHTML = '';
    if (firstValue !== '' && sign == '' ){
        firstValue += dot;
        resultValue = parseFloat(firstValue) + dot
    } else if (firstValue == '' && sign == ''){
        firstValue = 0 + dot
        resultValue = parseFloat(firstValue) + dot
    }
    if (secondValue == '' && sign !== ''){
        secondValue = 0 + dot
        resultValue = parseFloat(secondValue) + dot
    } else if (secondValue !== '' && sign !== '') {
        secondValue += dot;
        resultValue = parseFloat(secondValue) + dot
    }
    result.innerHTML = resultValue;
})


equal.addEventListener('click', () => {
    result.innerHTML = '';
   
    if ( sign === '+') {   
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if ( sign === '-'){
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if ( sign === 'X') {
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    } else if ( sign === '/' && secondValue !== 0) {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue)
    } else {
        result.innerHTML = resultValue
        resultValue = 'Error'
    }

    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = ''
})


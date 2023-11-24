let r = document.querySelector('[r]').value

let g = document.querySelector('[g]').value

let b = document.querySelector('[b]').value

let btn = document.querySelector('[con]')

let btn2 = document.querySelector('[clear]')

btn.addEventListener('click', convert)

btn2.addEventListener('click', clear)

let display = document.querySelector('[hex]')


function clear (){
    document.querySelector('[r]').value = '';
    document.querySelector('[g]').value = '';
    document.querySelector('[b]').value = '';
    document.querySelector('[hex]').value = '';
}
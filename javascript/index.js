let btn = document.querySelector('[con]');
let display = document.querySelector('[hex]');

btn.addEventListener('click', convert);

function makeString(value) {
    return value < 16 ? '0' + value.toString(16) : value.toString(16);
}

function rHex(r) {
    if (r / 16 == 10 || r % 16 == 10) {
        return 'A';
    } else if (r / 16 == 11 || r % 16 == 11) {
        return 'B';
    } else if (r / 16 == 12 || r % 16 == 12) {
        return 'C';
    } else if (r / 16 == 13 || r % 16 == 13) {
        return 'D';
    } else if (r / 16 == 14 || r % 16 == 14) {
        return 'E';
    } else if (r / 16 == 15 || r % 16 == 15) {
        return 'F';
    } else {
        return Math.floor(r / 16) + '' + r % 16;
    }
}

function gHex(g) {
    if (g / 16 == 10 || g % 16 == 10) {
        return 'A';
    } else if (g / 16 == 11 || g % 16 == 11) {
        return 'B';
    } else if (g / 16 == 12 || g % 16 == 12) {
        return 'C';
    } else if (g / 16 == 13 || g % 16 == 13) {
        return 'D';
    } else if (g / 16 == 14 || g % 16 == 14) {
        return 'E';
    } else if (g / 16 == 15 || g % 16 == 15) {
        return 'F';
    } else {
        return Math.floor(g / 16) + '' + g % 16;
    }
}

function bHex(b) {
    if (b / 16 == 10 || b % 16 == 10) {
        return 'A';
    } else if (b / 16 == 11 || b % 16 == 11) {
        return 'B';
    } else if (b / 16 == 12 || b % 16 == 12) {
        return 'C';
    } else if (b / 16 == 13 || b % 16 == 13) {
        return 'D';
    } else if (b / 16 == 14 || b % 16 == 14) {
        return 'E';
    } else if (b / 16 == 15 || b % 16 == 15) {
        return 'F';
    } else {
        return Math.floor(b / 16) + '' + b % 16;
    }
}

function convert() {
    let r = document.querySelector('[r]').value;
    let g = document.querySelector('[g]').value;
    let b = document.querySelector('[b]').value;

    let rHexValue = rHex(r);
    let gHexValue = gHex(g);
    let bHexValue = bHex(b);

    let hexColorCode = `#${rHexValue}${gHexValue}${bHexValue}`;

    display.value = hexColorCode;
}



let btn2 = document.querySelector('[clear]')

btn2.addEventListener('click', clear)

function clear (){
    document.querySelector('[r]').value = '';
    document.querySelector('[g]').value = '';
    document.querySelector('[b]').value = '';
    document.querySelector('[hex]').value = '';
}
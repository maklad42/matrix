let screen = document.querySelector('.screen');

let chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '^',
  '/',
  ';',
  ':',
  '#',
  '$',
  '%',
  '&',
  'ｱ',
  'ｲ',
  'ｳ',
  'ｴ',
  'ｵ',
  'ｶ',
  'ｷ',
  'ｸ',
  'ｹ',
  'ｺ',
  'ｻ',
  'ｼ',
  'ｽ',
  'ｾ',
  'ｿ',
  'ﾀ',
  'ﾁ',
  'ﾂ',
  'ﾃ',
  'ﾄ',
  'ﾅ',
  'ﾆ',
  'ﾇ',
  'ﾈ',
  'ﾉ',
  'ﾊ',
  'ﾋ',
  'ﾌ',
  'ﾍ',
  'ﾎ',
  'ﾏ',
  'ﾐ',
  'ﾑ',
  'ﾒ',
  'ﾓ',
  'ﾔ',
  'ﾕ',
  'ﾖ',
  'ﾗ',
  'ﾘ',
  'ﾙ',
  'ﾚ',
  'ﾛ',
  'ﾜ',
  'ﾝ',
];

let rndChar;
let charLength = chars.length;
let str = '';
let nextChar;
let revChar;
let fontSize;

let winFocus = true;

window.addEventListener('focus', gotFocus);
window.addEventListener('blur', lostFocus);

function createMatrix() {
  // stop the loop when window loses focus
  if (!winFocus) return;

  let leftOffset = Math.floor(Math.random() * 45) * 17;

  let matrix = document.createElement('p');
  matrix.style.left = leftOffset + 'px';
  matrix.classList.add('matrix');

  screen.append(matrix);

  // create the random character strings
  // for (let i = 0; i < charLength; i++) {
  for (let i = 0; i < 20; i++) {
    (function (i) {
      window.setTimeout(function () {
        rndChar = Math.floor(Math.random() * charLength);
        // console.log(chars[rndChar]);
        str = chars[rndChar];
        // matrix.innerHTML = str;

        nextChar = document.createElement('span');
        nextChar.innerHTML = str;

        // reverse some characters
        revChar = reversi();
        if (revChar > 50) {
          nextChar.classList.add('reversed');
        }

        // adjust font size
        fontSize = adjustFontSize();
        nextChar.style.fontSize = `${fontSize}rem`;

        matrix.appendChild(nextChar);
      }, i * 130);
    })(i);

    setTimeout(() => {
      // matrix.removeChild(nextChar);
      matrix.classList.add('fadeout');
      setTimeout(() => {
        matrix.remove();
      }, 2000);
    }, 3000);
  }

  setTimeout(createMatrix, 800);
}

function startMatrix() {
  // set repeat to continually create new martix lines
  for (var i = 0; i < 10; i++) {
    // delay start
    let gap = Math.floor(Math.random() * 1500);
    setTimeout(createMatrix, gap);
  }
}

function gotFocus() {
  winFocus = true;
  startMatrix();
}

function lostFocus() {
  winFocus = false;
}

// reverse some letters
function reversi() {
  return Math.floor(Math.random() * 100) + 1;
}

// vary the text size slightly  (0.9 - 1.2rem)
function adjustFontSize() {
  // return (12 - Math.floor(Math.random() * 4)) / 10;
  return (18 - Math.floor(Math.random() * 10)) / 10;
}

// vary the blur slightly
// vary the opacity slightly (80-100% ?)

startMatrix();

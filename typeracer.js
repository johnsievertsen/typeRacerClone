const textLine1 = document.querySelector('.text-line1');
const textLine2 = document.querySelector('.text-line2');
const textLine3 = document.querySelector('.text-line3');
const textLine4 = document.querySelector('.text-line4');
const textLine5 = document.querySelector('.text-line5');
const textLine6 = document.querySelector('.text-line6');
const userLine1 = document.querySelector('.user-text-line1');
const userLine2 = document.querySelector('.user-text-line2');
const userLine3 = document.querySelector('.user-text-line3');
const userLine4 = document.querySelector('.user-text-line4');
const userLine5 = document.querySelector('.user-text-line5');
const userLine6 = document.querySelector('.user-text-line6');
const mistakeStat = document.querySelector('.mistakes');
const timeStat = document.querySelector('.time-elapsed');
const wpmStat = document.querySelector('.wpm');
let mistakes = 0;
let time = 0;
let timer = null;

function wpm() {
    const userArray1 = userLine1.value.split(' ');
    const userArray2 = userLine2.value.split(' ');
    const userArray3 = userLine3.value.split(' ');
    const userArray4 = userLine4.value.split(' ');
    const userArray5 = userLine5.value.split(' ');
    const userArray6 = userLine6.value.split(' ');
    const totalWords = userArray1.length + userArray2.length + userArray3.length + userArray4.length + userArray5.length + userArray6.length;
    const min = time / 60;
    const wpm = Math.floor(totalWords / min);
    wpmStat.innerHTML = `Words per minute: ${wpm} wpm`;
}

function startTime() {
    timer = setInterval(() => {
        time++;
        timeStat.innerHTML = `Time elapsed: ${time}`;
    }, 1000);
}

function mistake(i) {
    mistakes++;
    mistakeStat.innerHTML = `Mistakes: ${mistakes}`;
    document.activeElement.style.color = 'red';
    setTimeout(() => {
        document.activeElement.style.color = 'hsl(135, 80%, 45%)';
    }, 2000);
}

function typeStart1() {
    if (time === 0 && !userLine1.value) {
        startTime();
    }
    if (userLine1.value === textLine1.textContent) {
        userLine2.style.display = 'block';
        userLine2.focus();
        userLine1.setAttribute('readonly', 'true');
    }
    const textArray = textLine1.innerHTML.split('');
    const userArray = userLine1.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake(i);
    }
}

function typeStart2() {
    if (userLine2.value === textLine2.textContent) {
        userLine3.style.display = 'block';
        userLine3.focus();
        userLine2.setAttribute('readonly', 'true');
    }
    const textArray = textLine2.innerHTML.split('');
    const userArray = userLine2.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake();
    }
}

function typeStart3() {
    if (userLine3.value === textLine3.textContent) {
        userLine4.style.display = 'block';
        userLine4.focus();
        userLine3.setAttribute('readonly', 'true');
    }
    const textArray = textLine3.innerHTML.split('');
    const userArray = userLine3.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake();
    }
}

function typeStart4() {
    if (userLine4.value === textLine4.textContent) {
        userLine5.style.display = 'block';
        userLine5.focus();
        userLine4.setAttribute('readonly', 'true');
    }
    const textArray = textLine4.innerHTML.split('');
    const userArray = userLine4.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake();
    }
}

function typeStart5() {
    if (userLine5.value === textLine5.textContent) {
        userLine6.style.display = 'block';
        userLine6.focus();
        userLine5.setAttribute('readonly', 'true');
    }
    const textArray = textLine5.innerHTML.split('');
    const userArray = userLine5.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake();
    }
}

function typeStart6() {
    if (userLine6.value === textLine6.textContent) {
        userLine6.setAttribute('readonly', 'true');
        clearInterval(timer);
    }
    const textArray = textLine6.innerHTML.split('');
    const userArray = userLine6.value.split('');
    let i = userArray.length - 1;
    if (userArray[i] !== textArray[i]) {
        mistake();
    }
}

window.addEventListener('keypress', wpm);
userLine1.addEventListener('keypress', typeStart1);
userLine2.addEventListener('keypress', typeStart2);
userLine3.addEventListener('keypress', typeStart3);
userLine4.addEventListener('keypress', typeStart4);
userLine5.addEventListener('keypress', typeStart5);
userLine6.addEventListener('keypress', typeStart6);
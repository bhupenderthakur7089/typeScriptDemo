"use strict";
const button = document.querySelector('button');
// const numResults: number[] = [];
// const stringResults: string[] = [];
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        return num1 + num2;
    }
    else if (typeof (num1) == 'string' && typeof (num2) == 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
    // console.log(timestamp);
}
button.addEventListener('click', () => {
    const num1Elem = document.getElementById('num1');
    const num1 = num1Elem.value;
    const num2Elem = document.getElementById('num2');
    const num2 = num2Elem.value;
    const numResult = add(+num1, +num2);
    numResults.push(numResult);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult);
    console.log(numResults);
    console.log(stringResults);
    printResult({ val: numResult, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});

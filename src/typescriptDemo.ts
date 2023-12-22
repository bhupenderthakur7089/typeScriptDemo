const button = document.querySelector('button')!;

// const numResults: number[] = [];
// const stringResults: string[] = [];

const numResults: Array<number> = [];
const stringResults: Array<string> = [];


type numOrString = number | string;  //Type Alias
type resObj = { val: number; timestamp: Date };  //Type Alias

interface resultObj {    //interface
    val: number;
    timestamp: Date;
}

function add(num1: numOrString, num2: numOrString) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        return num1 + num2;
    } else if (typeof (num1) == 'string' && typeof (num2) == 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: resObj) {
    console.log(resultObj.val);
    // console.log(timestamp);
}

button.addEventListener('click', () => {
    const num1Elem = document.getElementById('num1') as HTMLInputElement;
    const num1 = num1Elem.value;
    const num2Elem = document.getElementById('num2') as HTMLInputElement;
    const num2 = num2Elem.value;

    const numResult = add(+num1, +num2);
    numResults.push(numResult as number);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult as string);
    console.log(numResults);
    console.log(stringResults);
    printResult({ val: numResult as number, timestamp: new Date() });
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
})

myPromise.then((result) => {
    console.log(result.split('w'));
});
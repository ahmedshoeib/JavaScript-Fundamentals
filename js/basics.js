// this is my first java script code 
console.log('Hello world');

// define variable 
// 1- Var (Function Scope) var was before ES6 - have an issue scope of var variable is not limited to the scope where it's defined
// if thie var defind globally it will be attached to Window Object mean it's be even accessibly to be injected from the browser or conflict with any library using variable name
var name = '123'; 

for (var index2 = 0; index2 < 4; index2++) {
    console.log(index2);
}
console.log(index2); //=> will work as index2 scope is not limited to for loop scope and this is an issue for var scope
  
// 2 - Let (Block Scope) varible is only accessible in the scope where it's defined - can change the text later
let name2 = '123'; // how we define varilable now, use single quote "preferred"
console.log(name2);

for (let index = 0; index < 4; index++) {
    console.log(index);
}
// console.log(index); => Uncaught ReferenceError: index is not defined
  
let intersetRate = 0.1;
intersetRate = 1;
console.log(intersetRate)

// 2 - const (Block Scope like let) varible is only accessible in the scope where it's defined - can't change the text later
const intersetRateConst = 0.1; // how to define constant
//  intersetRateConst = 1; // Assignment to constant variable is not applicable
console.log(intersetRateConst);

// primitive types (String. number, boolean, undefined, null)
let name3 = "Ahmed"; // String literal 
let number = 1; // number
let boolVal = true; // boolean 
let undefinedVal; // by default it's undefined  --- type is undefined
let undefinedVal2 = undefined; // expelicitly  --- type is undefined
let nullVal = null; // null  --- type is object

// dynamic types
let dynamicType = "Dynamic"; // value initlly define as string
dynamicType = 2.0; // value dynamically converted to number
console.log(typeof(dynamicType)); // print number
console.log(dynamicType); // print 2

// reference types (Object, Array, Function)

// 1. object
const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };

// update object values 
person.name = "Ahmed"; // dot notation -- defualt to use
person['age'] = 30; // Bracket Notation -- commonly used in runtime key defintion
console.log(person.name);
console.log(person.age);

const copiedPerson = { ...person }; // copy by value (... named spread operator)
const copiedPerson2 = person; // copy by refence
person.name = "Max2";

console.log(person); // original
console.log(copiedPerson);
console.log(copiedPerson2);

// 2. arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors) // print array
console.log(selectedColors[0]) // by index
selectedColors[2] = "green"; // alter or add new value if key 2 not exist
console.log(selectedColors) // print updated array
selectedColors[2] = 1; // as dynamic value (array can hold multiple value type)
console.log(selectedColors); // print updated array
console.log(selectedColors.length); // print array number of items

// 3. Function types (performing A Task or Calculating a value)
function greet() { // performing A Task
    // function body
    console.log('hello from Function');
}
greet(); // call the function

// with parameter
function greet2(name) { // performing A Task
    // function body
    console.log('hello ' + name);
}
greet2('Ahmed'); // call the function

function greet3(firatName, lastName) { // performing A Task
    // function body
    console.log('hello ' + firatName + ' ' + lastName);
}
greet3('Ahmed', 'Shoeib'); // call the function
greet3('Ahmed'); // call the function print hello Ahmed undefined

// return value
function square(number) { // Calculating a value
    return number * number;
}
let squareNumber = square(2);
console.log(squareNumber);
console.log(square(3));


/// Operators (Arithmetic, Assignment, Comparison .....)
// 1.Arithmetic + , - , * , / , %, ** (exponentiation), ++ (increment), -- (decrement)
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // x to the power of y
console.log(x++); // print then increment x by 1
console.log(++x); // increment x by 1 then print
console.log(x--) // print then decrement x by 1
console.log(--x); // decrement x by 1 then print

// 2. Assignment (=)
let xA = 10
xA += 5 // add 5 to xA
xA /= 5 // divide xA by 5 = xA / 5
console.log(xA);

// 2. Comparison (> , >=, <, <=, === (strict equality operator same type & value),
// == (lose equality operator same value if type mismatch it will automotically convert the right to match the left one then compare),
// !== (not equal)
console.log(x < 0);
console.log(xA <= 3);
console.log(1 === 1);   // same value and type - true
console.log('1' === 1);  // same value but diffent type - false
console.log('1' == 1);  // will convert 1 to '1' then compare - true
console.log('1' == '1');  // same value - true
console.log(true == 1);  // convert 1 to true then compare - true
console.log(xA !== 3);  // not equal

// 3. Ternary (? : ) match if condition with one line 
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type); // gold

// 4. logical operators 
// Logical And && -> return true if both operands are true
console.log(true && true);   // -> true
console.log(false && true);   // -> false
console.log(true && false);   // -> false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);   // -> true

// Logical OR || -> return true if one of the operands are true
console.log(true || true);   // -> true
console.log(false || true);   // -> true
console.log(true || false);   // -> true
console.log(false || false);   // -> false

// Not !
goodCreditScore = false;
eligibleForLoan = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);    // true

// logical operators with non-boolean (if operand are not boolean JS will convert it to either Truty or Falsy vlaues)
// Falsy Values-> undefined, null, 0, false, '', NaN
// Truthy Values -> other than Falsy ones :)
console.log(false || 'Mosh');   // -> Mosh is truthy value
console.log(false || 1);   // -> 1 is truthy value
console.log(true || 'Mosh');   // -> true

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // - red

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor); // - blue

// Bitwise operators 
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

// Operation	Result	Same as	        Result
// 5 & 1	    1	    0101 &  0001	0001
// 5 | 1	    5	    0101 | 0001	    0101
// ~ 5	        10	    ~0101	        1010
// 5 << 1	    10	    0101 << 1	    1010
// 5 ^ 1	    4	    0101 ^ 0001	    0100
// 5 >> 1	    2	    0101 >> 1	    0010
// 5 >>> 1	    2	    0101 >>> 1	    0010

// can be used to implement access control system (Read, Wrire, Execute)
// Read     00000100 => decimal representation = 4
// Wrire    00000110 => decimal representation = 2
// Excute   00000111 => decimal representation = 1
const readPermission = 4;
const writePermission = 2;
const excutePermission = 1;
let myPermisson = 0;
myPermisson = myPermisson | readPermission | writePermission;
console.log(myPermisson);// => 6 
let message = (myPermisson & readPermission) ? "has read permisson" : "no read permission";
console.log(message);// has read permisson

myPermisson = 0; // clear permission
myPermisson = myPermisson | writePermission;
message = (myPermisson & readPermission) ? "has read permisson" : "no read permission";
console.log(message);// no read permission


/////// Control Flows
// 1. if 
let hour = 10;
let greeting = undefined;

if (hour >= 6 && hour <= 12) {
    greeting = "Good Morning";
} else if (hour > 12 && hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
console.log(greeting) // Good Morning

// 2. switch
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('unknown user');
        break;
}

// 3. loops
console.log('for loop');
for (let index = 0; index < 3; index++) {
    console.log('Hi #', index);    
}

for (let index = 5; index >= 1; index--) {
    if (index % 2 !== 0) console.log(index);
}

// 4. while
console.log('while loop');
let i = 0
while(i < 3) {
    console.log('Hi #', i);  
    i++
}

i = 5
while(i >= 1) {
    if (i % 2 !== 0) console.log(i);
    i--
}

// 5. do-while
console.log('do-while loop');
i = 0
do {
    console.log('Hi #', i);  
    i++
}while(i < 3)

i = 5
do {
    if (i % 2 !== 0) console.log(i);
    i--
}while(i >= 1)

// 6. for-in
console.log('for-in loop');
for (const key in person) {
    if (person.hasOwnProperty.call(person, key)) {
        let element = person[key];
        console.log(key, element);
    }else {
        console.log(key);
    }
}

let colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(index, colors[index]);
}

// 6. for-of
console.log('for-of loop');
for (let color of colors) {
    console.log(color);
}

/////// examp;e 
function max(a,b) {
    return (a > b) ? a : b;
}
console.log('max of', max(2,3)); // 3


function isLandScape(width, hight) {
    return (width > hight) ? true : false;
}
console.log('isLandScape', isLandScape(200,100)); // 3


function fizzBuzz(input) {
    if (typeof input !== 'number') { 
        return "not a number";
    } else if ((input % 3 === 0) &&  (input %5 === 0)) {
        return "FizzBuzz";
    } else if (input % 3 === 0) {
        return "Fizzs";
    } else if (input %5 === 0) {
        return "Buzz";
    } else {
        return "Not devisible by 3 or 5";
    }
}
console.log('fizzBuzz', fizzBuzz(4)); // Not devisible by 3 or 5
console.log('fizzBuzz', fizzBuzz(false)); // not a number

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < (speedLimit + kmPerPoint)) {
        console.log('Ok')
        return
    }

    const points = Math.floor( (speed - speedLimit) / kmPerPoint );

    if (points >= 12) {
        console.log('License Suspended');
    } else {
        console.log('Your Points', points);
    }  
}
checkSpeed(74); // ok
checkSpeed(130); // License Suspended
checkSpeed(80); // Your Points 2

function showNumbers(limit) {
    for (let index = 0; index < limit; index++) {
        const message = (index % 2 === 0) ? "EVEN" : "ODD";
        console.log(index, message);
    }
}
showNumbers(10);

function countTruthy(array) { // return number of truthy elements
    let count = 0;
    for (const value of array)
        if (value) 
        count++;
    return count;
}
const countTruthyArr = [0, null, undefined, '', 2, 3];
console.log('countTruthy', countTruthy(countTruthyArr)); // 2


const movie = {
    title: 'a',
    releaseYear: 1991,
    rating: 4.5,
    director: 'b'
};
function showProperties(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}
showProperties(movie); // string values title a, director b

function sumOfThreeAndFiveMultiplies(limit) {
    let sum = 0;

    for (let index = 0; index <= limit; index++)
        if ((index % 3 === 0) || (index % 5 === 0))
            sum += index;

    return sum
}
console.log('sumOfThreeAndFiveMultiplies', sumOfThreeAndFiveMultiplies(10));

function calculateGrades(marks) {
    const average = calculatAverageGrades(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}

function calculatAverageGrades(marks) {
    let sum = 0;

    for (const value of marks)
        sum += value;

    return sum / marks.length;;
}
console.log('calculateGrades', calculateGrades([80, 90, 50]));

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = ''
        for (let coulmn = 0; coulmn < row; coulmn++) {
            pattern += '*'
        }
        console.log(pattern)
    }
}
console.log('showStars');
showStars(2)


function showPrimes(limit) {
    for (let number = 2; number < limit; number++) {
        if (isPrime(number)) console.log(number)
    }
}


function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false 
    return true
}

console.log('showPrimes 10');
showPrimes(10);
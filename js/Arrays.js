// define array
const array = ["a","b","c"]
const array2 = [array.slice()] // by value
const array3 = [...array] // by value (... named spread operator)
const array4 = [array] // by reference

// can't update const array
const array1 = [3,4];
// array1 = []; // TypeError: Assignment to constant variable.


// Adding New Elemetns to array 
const number = [4,5];
console.log(`original Array ${number}`);

// 1 - End
number.push(6,7);
console.log(`Array Adding 5,6 to end of the array ${number}`);

// 2 - Beginning
number.unshift(1,2);
console.log(`Array Adding 1,2 to beginning of the array ${number}`);

// 3 - Middle
number.splice(2, 0, 3, 'a'); // 2 = start index , 0 = delete count, 3 & 'a' = values to add
console.log(`Array Adding 3 & a at starting from index 2 of the array ${number}`);

// Finding Elements (Primitive)
console.log(`index of a in number array = ${number.indexOf('a')}`);
console.log(`last index of a in number array = ${number.lastIndexOf('a')}`);
console.log(`number 1 exists in number array ? = ${number.indexOf(1) !== -1}`);
console.log(`number array include 10 ? = ${number.includes(10)}`);
console.log(`index of a in number array from index 3 = ${number.indexOf('a', 4)}`);

// Finding Elements (Reference)
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];
const course1 = courses.find(function(course) {
    return course.name === 'a';
});
console.log(`course a exists in courses array with id = ${course1.id}`);

const course2 = courses.findIndex(function(course) {
    return course.name === 'b';
});
console.log(`course b exists in courses array with index = ${course2}`);

// using Arrow Functions
const course3 = courses.find(course => course.name === 'b');
console.log(`course a exists in courses array with id using  Arrow Functions = ${course3.id}`);

// Remove Elemetns from array 
const number2 = [1,2,3,4,5,6,7,8];
console.log(`original Array ${number2}`);

// 1 - End
const element = number2.pop();
console.log(`Array After poping last index with value ${element} = ${number2}`);

// 2 - Beginning
const element2 = number2.shift();
console.log(`Array After poping first index with value ${element2} = ${number2}`);

// 3 - Middle
number2.splice(2, 1); // 2 = start index , 1 = number of elements to delete in this case will delete 4
console.log(`Array Removing index #2 = 4 ${number2}`);

// Emptying array 
// solution 1 - perfect if you have single reference for the array
let number3 = [1,2,3,4,5,6,7,8];
number3 = []
console.log(`Emptying array by equal [] = ${number3}`);

// solution 2 - Recommended
let number4 = [1,2,3,4,5,6,7,8];
number4.length = 0
console.log(`Emptying array by setting length to 0 =  ${number4}`);

// solution 3
let number5 = [1,2,3,4,5,6,7,8];
number5.splice(0, number5.length)
console.log(`Emptying array by using splice from 0 to array length to =  ${number5}`);

// solution 4
let number6 = [1,2,3,4,5,6,7,8];
while(number6.length > 0)
    number6.pop();
console.log(`Emptying array by using while to pop element by element =  ${number6}`);


// Combining & Slicing Arrays
const first = [1,2,3];
const second = [4,5,6];

// 1 - cobmine using conctat
const combined1 = first.concat(second);
console.log(`Combining two array using .concat and final array =  ${combined1}`);

// 1 - cobmine using Spread Operator
const combined2 = [ ...first, ...second]
console.log(`Combining two array using spread Operator [ ...first, ...second] and final array =  ${combined2}`);

const combined3 = [ ...first, 'a', ...second, 'b']
console.log(`Combining two array using spread Operator [ ...first, 'a', ...second, 'b'] with adding new parameters and final array =  ${combined3}`);

// 2 - Slice using slice
const sliced1 = combined1.slice(2,4); // start after index 2 and finish at 4 means index 3,4
console.log(`sliced combined array using .sliced start after index 2 and finish at 4 means index 3,4 and final array =  ${sliced1}`);

const sliced2 = combined1.slice(2); // start after index 2 till end of the combined array
console.log(`sliced combined array using .sliced start after index 2 till end of the combined array and final array =  ${sliced2}`);

// Copy Array
// 1 - using slice
const copy1 = combined1.slice(); // this will return a copy of combined array
console.log(`copy combined array to another one using .slice() function and final array =  ${copy1}`);

// 2 -  using spread operator
const copy2 = [...combined1] // this will return a copy of combined array
console.log(`copy combined array to another one using spread operator [...combined1] function and final array =  ${copy2}`);

// Iterate over Array
const number7 = [1,2,3];

// 1 - For-OF
console.log("Iterate over arrey using For-Of")
for (let number of number7)
    console.log(number);

// 2 - For-each
console.log("Iterate over arrey using For-each")
number7.forEach(number => {
    console.log(number);
});

// 2 - For-each with index
console.log("Iterate over arrey using For-each with index")
number7.forEach((index, number) => {
    console.log(`number = ${number} at index ${index}`);
});

// Joining Array
const number8 = [1,2,3];
const joined = number8.join(',');
console.log(`Convert array to string by joinng element with comma seprator and final value = ${joined}`);

// Split into Array
const messageToSplit = "this is my first message";
const splitted = messageToSplit.split(' ');
console.log(`split this message 'this is my first message' into array using split function by space and final result = ${splitted}`);
splitted.forEach(text => {
    console.log(text);
});

// Sorting Array
const number9 = [2,3,1];
const sortedArray = number9.sort();
const reverseArray = number9.reverse();

console.log(`sort array asending using sort() and final result = ${sortedArray}`);
console.log(`reverse array asending using reverse() and final result = ${reverseArray}`);

// Sorting Array of objects
const courses2 = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

console.log(`array of objects before sorting`);
courses2.forEach(element => {
    console.log(`course with id = ${element.id} & name = ${element.name}`);
});

let sortedArryOfObjects = courses2.sort(function(a,b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})
console.log(`array of objects after sorting`);
sortedArryOfObjects.forEach(element => {
    console.log(`course with id = ${element.id} & name = ${element.name}`);
});

// Testing Element of Array using every & some - exist in modern browsers not supported in old ones
const number11 = [2,-1,3,1];
const allPositive = number11.every(function(value){
    return value >= 0
});
const atLeatOneNumberPositive = number11.some(function(value){
    return value >= 0
});
console.log(`Check if all elments of array ${number11} is positive using every function = ${allPositive}`);
console.log(`Check if at least one elment of array ${number11} is positive using some function = ${atLeatOneNumberPositive}`);

// Filtering Array - can be used to replace every & some to support all browsers
const filtered = number11.filter(value => value >= 0);
console.log(`Check if all elments of array ${number11} is positive using filter function = ${filtered.length == number11.length}`);
console.log(`Check if at least one elment of array ${number11} is positive filter some function = ${filtered.length > 0}`);

// Mapping an Array - map each element to new format or type
console.log(`array before mapping elements = ${filtered}`);
const mapped = filtered.map(value => '<li>' + value + '</li>');
console.log(`array After mapping elements = ${mapped}`);
console.log(`After join mapping elements so we can display it to html directly= <ul>${mapped.join('')}</ul>`);

// map array of integers to array of objects
const itemsObj = filtered.map(element => {
    // const obj = {value: element};
    // return obj;
    return {value: element};
});
//simplified
const itemsObj2 = filtered.map(element => ({value: element}));
console.log(`array After mapping elements in array of Objects = ${itemsObj}`);
console.log(`array After mapping elements in array of Objects2 = ${itemsObj2}`);

// function chaining filtering then mapping the filtered array in one line
number11.filter(value => value >= 0).map(element => ({value: element}));


// Reduce Array
// calculate sum of int array
const sumOfArrayElements = number11.reduce((accumulator, currentValue) => {
return accumulator  + currentValue
}, 0);

//simplified - removing initial value 0 will result first value will be first index 
const sumOfArrayElements2 = number11.reduce(
    (accumulator, currentValue) => accumulator  + currentValue
);

console.log(`summ of array ${number11} using reduce function = ${sumOfArrayElements}`);
console.log(`summ of array ${number11} using simplified reduce function = ${sumOfArrayElements2}`);


// Move Element of an Arrayby offset
const moveArray = [1,2,3,4,5];
const moveArrayOutput = move(moveArray, 0, 2);
console.log(`Move element at index 0 from array ${moveArray} by 2 offsets and output function = ${moveArrayOutput}`);
const moveArrayOutput2 = move(moveArray, 0, -1);

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error("Invalid Offset");
        return;
    }
    const output = [ ...array ];
    const element = output.splice(index, 1)[0]; // get the element we removed from the array
    output.splice(index + offset, 0, element); // add the element back at index = index + offset
    return output;
} 


// Count Occurrence in array
const countArray = [1,2,3,4,1];
console.log(`Count how many 1's in this array ${countArray}  = ${countOccurrence(countArray, 1)}`);

function countOccurrence(array, searchElement) {
    // let count = 0;
    // for (const element of array) {
    //     if (element === searchElement) {
    //         count++;
    //     }
    // }
    // return count

    // new way using reduce
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0
        return accumulator  + occurrence
        }, 0);
} 

// Get Max in array
const maxArray = [1,2,7,6,3,4];
const maxNumber = getMax(maxArray);
console.log(`max number in array ${maxArray}  = ${maxNumber}`);

function getMax(array) {
    if (array.length === 0) return undefined

    // let max = array[0];
    // for (const element of array) {
    //     if (element > max)
    //         max = element
    // }
    // return max

     // new way using reduce
    //  return array.reduce((accumulator, currentValue) => {
    //     return (currentValue > accumulator) ? currentValue : accumulator
    //     });


    return array.reduce((a, b) => (a > b) ? a : b);
} 


// Sort & Filter Array of Movies
const moviesArr = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];
/*
Filter all movies in 2018 with rating >= 4
Desending Order
Pick Their Tite First
*/
const moviesOutput = moviesArr.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title);
console.log(`Movies Titlsin 2018 with rating >= 4  = ${moviesOutput}`);

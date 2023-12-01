// in js objects are dynmaic :=> means once you create them you can always add new propertoies or methods, or remove existing ones. 
// Functions Are Objects
// Garbage Collection - 
// Memory allocation & De-allocation happends automatically behind the scene with no control over that

// Template Literals 
/*
1 - Object => {}
2 - Booleab => true, false
3 - String => '' , ""
4 - Template ``


*/


const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log("draw circle with radius: " + this.radius + ", at location: " + this.location.x + "," + this.location.y);
    }
};

circle.draw(); // print "draw circle with radius: 1, at location: 1,1"

// Factory fucnction: 
function createCircle(radius, isVisible ) {
    return {
        radius, // = radius: radius => when var name and value are the same 
        isVisible, // = isVisible: isVisible
        draw() { // = draw: function() {
            console.log("draw circle with radius: " + this.radius + " isVisible: " + this.isVisible);
        }
    };
}
const circle1 = createCircle(2,true);
circle1.draw(); // draw circle with radius: 2 isVisible: true


// Constructor Function: the constructor function pattern is familiar to developers who have some experience programming in languages like C# and Java.
function Circle(radius, isVisible ) {
    this.radius = radius;
    this.isVisible = isVisible;
    this.draw = function() {
        console.log("draw circle with radius: " + this.radius + " isVisible: " + this.isVisible);
    };
}
const circle2 = new Circle(3,true); // Circle.call({}, 3, true)
circle2.draw(); // draw circle with radius: 3 isVisible: true


// No Major Difference between Constructor Function & Factory fucnction you can pick any pattern and use it

// dynamic values nature - add/remove value to "first circle const"
circle.color = "red";
console.log(circle); 
delete circle.color;
console.log(circle); 



// Value Types ( Number, String, Boolean, Symbol, undefined, null)  -- Primatives are copied by their values
// Reference Types (Object, Function, Array) -- Object are copied by their reference

let number = 10
function increase1(number) {
    number++
}
increase1(number)
console.log(number) // print 10

let numberObj = {value: 10}
function increase1(numberObj) {
    numberObj.value++
}
increase1(numberObj)
console.log(numberObj) // print { value: 11 }


// enumerating properies in obj
console.log("=====> enumerating properies in obj usig for-in")
for(let key in circle)
    console.log("Circle Key = " + key + " And Value = " + circle[key]);
console.log("=====> End enumerating properies in obj usig for-in")

console.log("=====> enumerating properies in obj usig for-of")
// for(let key of circle) => will Fail as circle is not Iterable
for(let key of Object.keys(circle))
    console.log("Circle Key = " + key + " And Value = " + circle[key]);
console.log("=====> End enumerating properies in obj usig for-of")

console.log("=====> enumerating entries in obj usig for-of")
// for(let key of circle) => will Fail as circle is not Iterable
for(let entry of Object.entries(circle))
    console.log("Circle entry = " + entry);
console.log("=====> End enumerating entries in obj usig for-of")


// check if propery exist in object
if('radius' in circle) {
    console.log('radius exist in circle');
}else {
    console.log('radius doesnot exist in circle');
}

// clone Object to another
const another = {}
for(let key in circle)
    another[key] = circle[key]
console.log('Cloned Object = ' + another);

const another2 = Object.assign({}, circle)
console.log('Cloned Object2 = ' + another2);

const another3 = { ...circle };
console.log('Cloned Object3 = ' + another3);

// String Literals to add dynamic value 
const name = 'John';
console.log(`Hello ${name}, ${2 + 3}`);

// Date
const now = new Date();
console.log(`Now ${now.toDateString()}`);
const date1 = new Date('May 11 2023 09:00');
console.log(`date1 ${date1.toDateString()}`);
const date2 = new Date(2018, 4, 11, 9);
console.log(`date2 ${date2.toDateString()}`);
now.setFullYear(2018)
console.log(`Now After setFullYear to 2018 = ${now.toDateString()}`);


// nested Objects 
let post  = {
    title: 't',
    body: 'b',
    author: 'a',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'a2', body: 'b2' },        
        { author: 'a3', body: 'b3' }
    ],
    isLive: true
};
console.log(post);

// convert post object to Constructor Object
function Post2(title, body, author) { // views, comments & isLive by default will be 0 , [] & false
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
}
let post2 = Post2('t', 'b', 'a');
console.log(post2);
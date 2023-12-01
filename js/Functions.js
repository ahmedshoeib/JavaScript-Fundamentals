// Fuctions has two types 

// 1 - Declarative - can be called before function is Defined
walk(); // called before function is defined
function walk() {
console.log('walk')
}

// 2 - Anonymous Function Expression - can't be called before function is Defined
const run = function() {
    console.log('run')
};
let move = run;
run();// only called aftter function is defined
move();

// Arguments - pass infinite number of parameter
function sum() {
    let total = 0;
    for (const value of arguments) { // arguments will refer to array of parameters
        total += value;
    }
    return total;
}
console.log(`sume number from 1 to 10 using infinite number of parameter = ${sum(1,2,3,4,5,6,7,8,9,10)}`);

// ...prices called Rest Operator also refer to array of parameters , has to be the last prameters of an array can't add any parameter after
function sum2(discount, ...prices) { 
    const total = prices.reduce((a,b) => a+b);
    return total * (1 - discount);
}
console.log(`sum prices 20, 30 and apply discount 0.1 =  ${sum2(0.1, 20, 30)}`);

// Default Paramater
// 1 - insid the function
function interest(principle, rate, years) {
    rate = rate || 3.5;  // can be used to set default value if rate is truthy will take the value else will set it to 3.5
    years = years || 5;

    return principle * rate / 100 * years;
}
console.log(`interest of 10000 in 5 year with rate 3.5 = ${interest(10000, 3.5, 5)}`);

// 2 - in the function parameter 
function interest2(principle, rate = 3.5, years = 5) {
    // rate = rate || 3.5;  // can be used to set default value if rate is truthy will take the value else will set it to 3.5
    // years = years || 5;

    return principle * rate / 100 * years;
}
console.log(`interest of 10000 in 5 year with rate 3.5 = ${interest2(10000)}`);


// Setter & Getter
const person = {
    firstName: 'Moshi',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(`person Full Namme = ${person.fullName}`);
person.fullName = "Ahmed Ali"
console.log(`person After Setting New Full Name = ${person.fullName}`);

// Throw an Error Try - Catch for the previous Exaple
const person2 = {
    firstName: 'Moshi',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {

        if (typeof value !== 'string')
        throw new Error(' value is not a string');

        const parts = value.split(' ');

        if (parts.length != 2)
        throw new Error('Enter first name & last name with space');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person2.fullName = true
    }catch (e){
    console.log(`Error Thrown - Catch Here => ${e.message}`);
    // alert(e);
    }

try {
    person2.fullName = ''
    }catch (e){
        console.log(`Error Thrown - Catch Here => ${e.message}`);
        // alert(e);
    }

// This 
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags: function() {
        // her this will refere to object itslef as it's object function
        this.tags.forEach(function(tag){
            // here to call title as this for-each is not an object function we have to user bind(this) at the end to be able to access all object properties
            console.log(this.title, tag);
        }.bind(this))
    }
};
video.showTags();

// same previous example but using arrow function insead of bind(this)
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags: function() {
        // her this will refere to object itslef as it's object function
        this.tags.forEach( tag => {
            // here using => (Arrow function) we can access object properites using this without any need to use bind(this)
            console.log(this.title, tag);
        })
    }
};
video2.showTags();
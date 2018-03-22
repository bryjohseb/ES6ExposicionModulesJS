
// Let & const variables
// let is similar to var but let has scope. let is only accessible in the block level it is defined.

if (true) {
 let a = 40;
 console.log(a); //40
}
console.log(a); // undefined

//Const is used to assign a constant value to the variable. And the value cannot be changed. Its fixed.
const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.

const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error.
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']


// ES5 => anonymous function
var square = function(x) { return x * x; };
var add = function(a, b) { return a + b; };
var pi = function() { return 3.1415; };

// ES6 => Arrow function
{
  const square = x => x * x;
  const add = (a, b) => a + b;
  const pi = () => 3.1415;
}

console.log(square(5)); // 25
console.log(add(3, 4)); // 7
console.log(pi()); // 3.1415

// Array helper functions
// Documentation => Dhttps://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

// ForEach
// Executes the provided function for each element of the array, passing the array element as an argument.

var colors = ['red', 'green', 'blue']

function print(val) {
  console.log(val)
}

colors.forEach(print)

// Map
// Creates a new array containing the same number of elements, but output elements are created by the provided function.
// It just converts each array element to something else.

var colors = ['red', 'green', 'blue']

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)

// Filter
// Creates a new array containing a subset of the original array.
// The result has these elements that pass the test implemented by the provided function, which should return true or false.

var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)

// Find
// Finds the first element that passes the test implemented by the provided function, which should return true or false.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9},
  {name: 'John', age: 40},
  {name: 'Ann', age: 19},
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager)

console.log('First found teenager:', firstTeenager.name)

// Every
// Checks if every element of the array passes the test implemented by the provided function, which should return true or false.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9},
  {name: 'John', age: 40},
  {name: 'Ann', age: 19},
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var everyoneIsTeenager = people.every(teenager)

console.log('Everyone is teenager: ', everyoneIsTeenager)

// Reduce
// Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right),
// thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.

var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)


// Maps & Set
// Maps substitute objects to store key/value pairs. Pairs are stored as 2-element arrays [key, value].
// Other interesting features of Maps are all indexes are unique. And we can use any value as key or value.

let x = new Map([[1, 'is a number key']]);
let today = new Date()

//anything can be a key
x.set(today.toString(), 111)
x.set(today, 222);
x.delete(today.toString());

console.log('The map contains', x.size, 'elements.');
console.log('The map has a today Date key:', x.has(today));
console.log('The map has a today string key:', x.has(today.toString()));

//values and keys
x.forEach((value, key, map) => console.log(value, key, map));

//iterable
for (let value of x) {
  console.log(value);
}

//iterable values
for (let value of x.values()) {
  console.log(value);
}

//iterable keys
for (let value of x.keys()) {
  console.log(value);
}

//iterable entries (key, value)
for (let value of x.entries()) {
  console.log(value);
}

// Sets
//Sets are used to store the unique values of any type.

let x = new Set([1, 2, 3, 4, 4, 4, 5]);

x.add(6);
x.delete(2);

console.log('The set contains', x.size, 'elements.');
console.log('The set has 1:', x.has(1));
console.log('The set has 8:', x.has(8));

//values and keys are the same in a set
x.forEach((value, key, set) => console.log(value, key, set));

//iterable
for (let value of x) {
  console.log(value);
}

//iterable values
for (let value of x.values()) {
  console.log(value);
}

//iterable keys
for (let value of x.keys()) {
  console.log(value);
}

//iterable entries (key, value)
for (let value of x.entries()) {
  console.log(value);
}


// Rest and spread operators

// Spread
// It enables extraction of array or object content as single elements.

var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray)
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray)

var defaultColors = ['red', 'blue', 'green']
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...defaultColors, ...userDefinedColors]

console.log('Merged colors', mergedColors)

// Rest
// Rest parameters remove the need of dealing with the arguments object. The syntax is pretty sleek.
// It takes a list of parameters converting them to an array. This will be dynamically handled matching the function signature definition.

function printColors(first, second, third, ...others) {
  console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
}
printColors('yellow', 'blue', 'orange', 'white', 'black')


// Destructuring
// array
function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second)
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)
printSecondAndFourthElement(array)

// objects
function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)



// Clases
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return '[X=' + this.x + ', Y=' + this.y + ']'
    }
}

class ColorPoint extends Point {
    static default() {
        return new ColorPoint(0, 0, 'black')
    }

    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }

    toString() {
        return '[X=' + this.x + ', Y=' + this.y + ', color=' + this.color + ']'
    }
}

console.log('The first point is ' + new Point(2, 10))
console.log('The second point is ' + new ColorPoint(2, 10, 'green'))
console.log('The default color point is ' + ColorPoint.default())


// Template strings
// Who loves writing large string and variables concatenation?
// I believe a minority of us. Who hates reading it? I’m sure everyone.
// Fortunately, ES6 introduces very easy-to-use string templates with placeholders for variables.

function hello(firstName, lastName) {
  return `Good morning ${firstName} ${lastName}!
How are you?`
}

console.log(hello('Jan', 'Kowalski'))

// Default function arguments

function sort(arr = [], direction = 'ascending') {
  console.log('I\'m going to sort the array', arr, direction)
}

sort([1, 2, 3])
sort([1, 2, 3], 'descending')

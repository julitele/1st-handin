
/* Create a javascript function that takes firstname and lastname 
as 2 parameters and uses console.log() to output the person's name.
 Check that it works and is printet correctly. */

 // ${ template literals, makes it better to work with strings 

function printName(firstName, lastName) {
console.log(`Full Name: ${firstName} ${lastName}`);
}

// testing 

printName("Julita", "Banyte");



// function that calculates the area of a rectangle

// two parameters that calculates the area: height, width 

function calculateRectangleArea(height, width) {
    // Calculate the area
    const area = height * width; // calculates the area 
    
    // return function

    // result result
    return area;
}

// test
const height = 4;
const width = 7;
const area = calculateRectangleArea(height, width);

console.log(`Rectangle area: ${area}`);


/* Create a function that takes speed and time as 2 parameters
and calculates and returns the distance. */ 

function calculateDistance(speed, time) {
    // calculate the distance
    const distance = speed * time;
    
    // return the result
    return distance;
}

// test
const speed = 110; 
const time = 3;   
const distance = calculateDistance(speed, time);

console.log(`You have travelled ${distance} km`); 

// Create an object called calculator with the name of the owner

// calculator object
const calculator = {
    owner: "Julita", //

    // method to calculate the area 
    calculateRectangleArea: function(height, width) {
        return height * width;
    },

    // method to calculate the distance 
    calculateDistance: function(speed, time) {
        return speed * time;
    }
};

// test
const rectangleHeight = 4;
const rectangleWidth = 7;
const rectangleArea = calculator.calculateRectangleArea(rectangleHeight, rectangleWidth);
console.log(`The area is: ${rectangleArea}`);


/* test error
const speed = 110; 
const time = 3;
const distance = calculator.calculateDistance(speed, time);
console.log(`You have travelled ${distance} km`); 
*/

// CLASS EXERCISES 

class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    // method to return the cat's data as a string
    getCatData() {
        return `Name: ${this.name}, Color: ${this.color}, Breed: ${this.breed}`;
    }

    // Method to change the cat's name
    changeName(newName) {
        this.name = newName;
    }
}

// creating new object
let myCat = new Cat("Bella", "Grey", "Norwegian Forest Cat");

console.log(myCat.getCatData()); 

// changing the name
myCat.changeName("Charlie");

console.log(myCat.getCatData()); 



// EXERCISE CAR 

/* property, isRunning, is initialized to false by default. 
This property will track whether the car is running or not.

getCarInfo() returns the car's make, model, and year.
start() sets the isRunning property to true and indicates the car has started.
stop() sets the isRunning property to false and indicates the car has stopped.
*/


class Car {
    // constructor to initialize the Car object
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false; // property to check if the car is running
    }

    // method to return the car's information as a string
    getCarInfo() {
        return `Car: ${this.year} ${this.make} ${this.model}`;
    }

    // method to start the car
    start() {
        this.isRunning = true;
        return `The ${this.make} ${this.model} has started.`;
    }

    // method to stop the car
    stop() {
        this.isRunning = false;
        return `The ${this.make} ${this.model} has stopped.`;
    }
}

// Create two instances of the Car class
let car1 = new Car("Porsche", "Cayman", 1967);
let car2 = new Car("Maserati", "Levante", 1967);

console.log(car1.getCarInfo()); 
console.log(car1.stop());        


console.log(car2.getCarInfo());  
console.log(car2.start());       
console.log(car2.stop());        


// ARRAYS EXERCISES

let namesArray = ["Christina", "Frederik", "Mark", "Mie", "Sofie"] 

console.log(namesArray[0]) // outputs the first element

let index = namesArray.indexOf("Mark");

console.log(`The index of Mark is: ${index}`)

// adding new name to the array
namesArray.push("Emma");

console.log("Updated namesArray:", namesArray);

/* The slice() method in JavaScript is used to create a shallow copy of 
a portion of an array into a new array, without modifying the original array. */

// using slice to create a new array 
let firstThreeNames = namesArray.slice(0, 3);
console.log("First three names:", firstThreeNames); 

// creating objects and adding them to an array
let person1 = {
    firstname: "Juli",
    lastname: "Banyte",
    email: "juli.ba@gmail.com"
};

let person2 = {
    firstname: "Judith",
    lastname: "Bang",
    email: "judith.bang@gmail.com"
};

let peopleArray = [person1, person2];
console.log("People array:", peopleArray); // should display both objects
console.log("First person's email:", peopleArray[0].email); // Should display juli's email

// EXERCISE ARRAYS & OBJECTS 

function Student(name, id, grades = []) {
    this.name = name;
    this.id = id;
    this.grades = grades; // Array of numbers to store grades
}

// Function to add a grade to a student's grades array
function addGrade(student, grade) {
    student.grades.push(grade); // Add the grade to the student's grades array
}

// Function to update the student's name
function updateStudentName(student, newName) {
    student.name = newName; // Update the student's name
}

// Testing the functions

// Create a student object
let student1 = new Student("Juli Ba", 101);

// Add grades to the student
addGrade(student1, 4);
addGrade(student1, 10);
addGrade(student1, 2);

console.log("Student object before name change:", student1);


updateStudentName(student1, "Juli Ba");

console.log("after name change:", student1);

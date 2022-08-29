//Array methods

//Adding element to the first using unshift method
let names = ["Ahmed","Mohamed","Ali","Tarek"];
console.log(names);
names.unshift("Gamal");
console.log(names);

//Adding element to the end using push method
names.push("Alaa","Yousef");
console.log(names);

//remove first element from array
names.shift();
console.log(names);

//remove last element from array
names.pop();
console.log(names);

//searching array using indexof method
let char = ["a","b","c","d","a","f","c","d"];
console.log(char.indexOf("d"));
console.log(char.indexOf("d",4));

//searching array using LastInedxOf method
console.log(char.lastIndexOf("c"));
console.log(char.lastIndexOf("a",6));

//slice method :> not including the end
console.log(char.slice(1,4));

//splice method
console.log(char.splice(0,2,"abcde"));
console.log(char);

//concat method
let cars = ["lancer","bmw","kia"];
let newCars = ["Mercedes","dodge"];
console.log(cars.concat(newCars));

//join method
console.log(cars.join("/"));

/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////


//object
let person = {
    name:"ahmed",
    country:"egypt",
    age:23,
    address:"mansoura"
}

console.log(Object.freeze(person));  // freeze method prevents exsisting properties from being removed

// let newPerson = Object.freeze(person);
// newPerson.email = "weq@gmail.com";
// newPerson.password = "ertreu";
// console.log(newPerson);

console.log(Object.entries(person));  // entries method returns an array with arrays of the key, value pairs.

console.log(Object.getOwnPropertyNames(person));  // returns an array of all properties found.


console.log(Object.getPrototypeOf(person));  // returns the prototype of the specified object.

console.log(Object.is(person));       // determines whether two values are the same value.

console.log(Object.isFrozen(person));  // determines if an object was frozen.

console.log(Object.values(person)); // returns an array of values.

console.log(Object.create(person)); // This method is used to create a new object with the specified prototype object and properties 

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//lexical scope

function parent(){
    let a = 5;
  //  console.log(d);    // cant access variable d because it is not in the scope of the function
 
    function child(){
        let d = 15;
        console.log(`child function variable a ${a}`);
    function grandChild(){
        let b = 10;
        console.log(`grand function variable b ${b}`);
        console.log(`grand function variable a ${a}`);
        }
        grandChild();
    }
    child();
}
parent();
// function child can access variable a in parent function,,
//function grandChild can access variable d in child function and variable a in parent function
//but function parent can access only variables in its scope,,cant access scope of child and grandChild functions


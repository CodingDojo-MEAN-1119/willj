// PROBLEM #1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//myString = 9;
myString = "works";

// PROBLEM #2
function sayHello(name: string){
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
//console.log(sayHello(9));
console.log(sayHello("works"));

//PROBLEM #3
function fullName(firstName: string, lastName: string, middleName: string){
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", ""));

//PROBLEM #4
interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student){
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//PROBLEM #5
class Ninja {
  fullName: string;
  constructor(
     public firstName: string,
     public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
     }
  debug(){
     console.log("Console.log() is my friend.")
  }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja('Shane', 'Whatever')
//needs to call 'new', and provide parameters to the constructor
const turing = {
  fullName: "Alan Turing",
  firstName: "Alan",
  lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
//console.log(study(turing));
//The function study only accepts Ninja objects
console.log(shane)

//PROBLEM #6
var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x: number,y: number) => x * y;    //Function parameters needed to be wrapped in parentheses and given types
// Nor is this working:
var math = (x: number, y: number) => {
  let sum = x + y;
  let product = x * y;
  let difference = Math.abs(x-y);
  return [sum, product, difference];
};

//PROBLEM #7
class Elephant {
  constructor(public age: number){}
  birthday = () => { // Arrow function added
     this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
  console.log(`Babar's age is ${babar.age}.`)
  }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
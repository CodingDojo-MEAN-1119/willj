//1 
console.log(hello);
var hello = 'world';

//Predicted output
//world

//Actual Output
//world


//2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//Predicted Output
//magnet

//Actual Output
//magnet


//3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Predicted Output
//super cool

//Actual Output
//Super cool


//4 
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//Predicted Output 
//chicken
//half -chicken

//Output 
//chicken / half-chicken


//5 
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//Predicted Output
// mean not setup right


//Actual output
//not a function


//6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//Predicted output
// disco, rock, R&b

//actual output
// rock, r&b, disco


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//Predicted output
// san jose, seattle, burbank, san jose

//Actual Output
// san jose seattle burbank san jose



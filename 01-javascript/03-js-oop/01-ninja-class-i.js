let health = 100;
let speed = 3;
let strength = 3;

var ninja1 = ninjaConstructor("Aaron", health, speed, strength);
var ninja2 = ninjaConstructor("Brett", health, speed, strength);
var ninja3 = ninjaConstructor("Harry", health, speed, strength);

function ninjaConstructor(name, health, speed, strength) {
    var ninja = {};
    ninja.name = name;
    ninja.health = health;
    ninja.speed = speed;
    ninja.strength = strength;

    ninja.sayName = function() {
        console.log("My Ninja Name is " + ninja.name);
    };
    
    ninja.showStats = function() {
        console.log(ninja.name + "'s Stat's are " + "Health:" + ninja.health + " Speed:" + ninja.speed + " Strength:" + ninja.strength);
    };

    ninja.drinkSake = function() {
        health + 10;
    };

    ninja.punch = function(attackedNinja) {
        if(attackedNinja instanceof ninjaConstructor) {
            attackedNinja.health -= 5;
    
            console.log(ninja.name + " punched " + attackedNinja.name + " for 5 health!");
        } else {
            console.log("Not a ninja!!!");
        }
    };

    ninja.kick = function(kickedNinja) {
        if(kickedNinja instanceof ninjaConstructor) {
            kickedNinja.heatlh -= 15;
            ninja.strength += 1;
            console.log(`${ninja.name} kicked ${kickedNinja.name} badly! He lost 15 health!`);
        } else {
            console.log("Not a ninja?!");
        }
    };
    return ninja;
}

var blueNinja = new ninjaConstructor("Darren", health, speed, strength);
var redNinja = new ninjaConstructor("Dylan", health, speed, strength);

ninja1.sayName();
ninja1.showStats();
redNinja.punch(blueNinja);
blueNinja.kick("hello");
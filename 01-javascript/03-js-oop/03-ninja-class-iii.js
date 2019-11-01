let health = 100;
let speed = 3;
let strength = 3;
let wisdom = 10;
let sHealth = 200;

class ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My Ninja Name is ${this.name}`);
    }

    showStats() {
        console.log(`${this.name}'s stats are: Health[${this.health}] Speed[${this.speed}] Strength[${this.strength}]`);
    }

    drinkSake() {
        this.health += 10;
    }

    punch(attackedNinja) {
        if(attackedNinja instanceof constructor) {
            attackedNinja.health -= 5;
            console.log(`${this.name} swing a gnarly punch to ${attackedNinja.name} inflicting 5 damage!`);
        } else {
            console.log(`You are not a ninja!`);
        }
    }

    kick(kickedNinja) {
        if(kickedNinja instanceof constructor) {
            kickedNinja.health -= 15;
            this.strength += 1;
            console.log(`${this.name} sent a hard kick to ${kickedNinja.name} dealing 15 damage!`);
        } else {
            console.log(`You are not a ninja!`);
        }
    }
}

class sensei {
    constructor(name, sHealth, speed, strength, wisdom) {
        this.name = name;
        this.sHealth = sHealth;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.sHealth += 10;
        console.log(`I would put a wise quote here, but I can't think of any. Boo.`);
    }

    showStats() {
        console.log(`${this.name}'s stats are: Health[${this.sHealth}] Speed[${this.speed}] Strength[${this.strength}] Wisdom[${this.wisdom}]`);
    }
}


var ninja1 = new ninja("Darren", health, speed, strength);
var ninja2 = new ninja("Will", health, speed, strength);
var ninja3 = new ninja("Bryce", health, speed, strength);

var sensei1 = new sensei("Master Will", health, speed, strength, wisdom);

ninja1.showStats();
ninja2.drinkSake();
ninja1.punch(ninja2);

ninja2.showStats();


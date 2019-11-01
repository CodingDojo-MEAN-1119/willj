class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }

    show() {
        console.log(`Your card is ${this.value} of ${this.suit} - ${this.name}`);
    }
}

class Deck {
    reset() {
        const suits = ["Diamonds", "Clubs", "Spades", "Hearts"];
        const values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        const cards = [];
        for(const suit of suits) {
            for(let index = 0; index < values.length; index++) {
                const name = values[index];
                const card = new Card(suit, name, index + 1);
                cards.push(card);
            }
        }
        this.cards = cards;
    }
    constructor() {
        this.reset();
    }

    shuffle() {
        for(let i = 0; i < this.cards.length; i++) {
            const randNum = Math.floor(Math.random() * 52);
            const temp = this.cards[i];
            this.cards[i] = this.cards[randNum];
            this.cards[randNum] = temp;
        }
    }
    
    deal() {
        const randNum = Math.floor(Math.random() * 52);
        console.log(this.cards[randNum]);
        this.cards.splice(randNum, 1);
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }   
}

const newDeck1 = new Deck();
newDeck1.shuffle();
newDeck1.deal();
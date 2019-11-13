class Bike {
    price: number
    max_speed: number
    miles: number

    constructor(price: number, max_speed: number) {
        this.price = price
        this.max_speed = max_speed
        this.miles = 0
    }

    showInformation() {
        console.log(`This Cycle Costs $ ${this.price}. It has a top speed of ${this.max_speed}, and has a total of ${this.miles} on the odometer!`)
        return this
    }

    ride() {
        this.miles += 10
        console.log("I am riding!")
        return this
    }

    reverse() {
        this.miles -= 5
        console.log("I am reversing!")
        return this
    }
};


const bike1 = new Bike(599, 32, 0)
bike1.ride().ride().ride().reverse().showInformation()
const bike2 = new Bike(399, 25, 50)
bike2.ride().ride().reverse().reverse().showInformation()
const bike3 = new Bike(299, 18, 50)
bike3.reverse().reverse().reverse().showInformation()


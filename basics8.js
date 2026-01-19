//Inheritance is the Main Pillar in OOP
//one class can inhetir/acquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass(child class)
//the class whose properties are inherited is known as superclass
const Person = require("./basics7")
class Pet extends Person {

    // get location()
    // {
    //     return "BlueCross"
    // }
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName, lastName)
    }



}

let pet = new Pet("Sam", "San")
pet.fullName()
console.log(pet.location)
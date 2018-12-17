
//types
var myName: string = "Mike";
var myAge: number = 31;
var canVote: boolean = true;
var anything: any ="dog";
anything = 2;

document.getElementById("tsStuff")
    .innerHTML = "My name is " + myName

document.write("myname is a " + typeof(myName) + "<br />")
document.write("canVote is a " + typeof(canVote) + "<br />")
document.write("myname is a " + typeof(myName) + "<br />")

var strToNum: number = parseInt("5");

// interfaces

interface SuperHero {
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman",
}

document.write(superman.realName + " is " + superman.superName + " <br />")


//array
var employees: string[] = ["Bob", "Alic"]
var superHeroers: SuperHero[]


//string coersion
document.write("5 + String 2 = " + (5+"2")) //52
document.write('<br />')

//strang increment stuff
var randNum : number = 1
document.write("randNum++ = " + randNum++) //1 - it prints then incr
document.write('<br />')
document.write("++randNum = " + ++randNum) //3 - it inc then prints
document.write('<br />')

// let is different in TS
// you can't reassign a let in a nested block

let sampLet = 123

if (true {
    let sampLet = 456
})

document.write("value of samLet is " + sampLet)
document.write('<br />')

var sampvar = 123

if (true {
    var sampvar = 456
})

document.write("value of samvar is " + sampvar)
document.write('<br />')


// for in and for of

var randArray = [5,6,7,8]

for(var val in randArray) {
    document.write(val + "<br />")
} // prints index

var strArray = randArray.map(String)

for(var val of strArray){
    document.write(val + "<br />") //print element
}

// functions
var getSum = function(num1: number, num2: number): number{
    return num1 + num2
}

var theSum1: number = getSum(5,2)



document.write("5 + 2 = " theSum1 + "<br />")

// classes and jargon
/*
classes consists of attributes 
attributes consist of fields and methods

*/
class Animal {
    public favFood: string; // a field, public access modifier

    static numOfAnimals: number = 0; // accessible by every Animal instance

    constructor(
        private name: string, //If marked as private, TS will auto add to class instance
        private owner: string
        ){
            Animal.numOfAnimals++; // static invoke
        }
    ownerInfo(){ //method, no access modifier
    document.write(this.name + " is owned by " + this.owner + "<br />")
    
    static howManyAnimals(): number{
        return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number{
        return this._weight;
    }

    set weight(weight){
        this._weight = weight;
    }
}

var spot = new Animal("Spot", "dug");

spot.ownerInfo();

spot.weight = 100;

class Dog extends Animal{
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover" + "Jimmy") //is instanceof Animal

interface Vehicle {
    drive(): any; // implementing class can ?return whatever type it wants?
}

class Car implements Vehicle{
    constructor(private wheel: number) {}

    drive(): void{
        console.log("vroom");
    }
}

// generic functions TS
function GetType<T>(val: T): string{ //<T> is datatype marker
    return typeof(val);
}

function getWheels<w extends Vehicle>(veh: w): number { //this method takes any type that extends a super
    return veh.drive();
}

//generic classes
class GenericNumber<T>{
    add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();
aNumber.add = function(x, y){return x + y;}

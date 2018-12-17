var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//types
var myName = "Mike";
var myAge = 31;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff")
    .innerHTML = "My name is " + myName;
document.write("myname is a " + typeof (myName) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("myname is a " + typeof (myName) + "<br />");
var strToNum = parseInt("5");
var superman = {
    realName: "Clark Kent",
    superName: "Superman",
};
document.write(superman.realName + " is " + superman.superName + " <br />");
//array
var employees = ["Bob", "Alic"];
var superHeroers;
//string coersion
document.write("5 + String 2 = " + (5 + "2")); //52
document.write('<br />');
//strang increment stuff
var randNum = 1;
document.write("randNum++ = " + randNum++); //1 - it prints then incr
document.write('<br />');
document.write("++randNum = " + ++randNum); //3 - it inc then prints
document.write('<br />');
// let is different in TS
// you can't reassign a let in a nested block
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("value of samLet is " + sampLet);
document.write('<br />');
var sampvar = 123;
if (true) {
    var sampvar = 456;
}
document.write("value of samvar is " + sampvar);
document.write('<br />');
// for in and for of
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br />");
} // prints index
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />"); //print element
}
// functions
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = ", theSum1 + "<br />");
// classes and jargon
/*
classes consists of attributes
attributes consist of fields and methods

*/
var Animal = /** @class */ (function () {
    function Animal(name, //If marked as private, TS will auto add to class instance
    owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++; // static invoke
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0; // accessible by every Animal instance
    return Animal;
}());
var spot = new Animal("Spot", "dug");
spot.ownerInfo();
spot.weight = 100;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover" + "Jimmy"); //is instanceof Animal
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.drive = function () {
        console.log("vroom");
    };
    return Car;
}());
// generic functions TS
function GetType(val) {
    return typeof (val);
}
function getWheels(veh) {
    return veh.drive();
}
//generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };

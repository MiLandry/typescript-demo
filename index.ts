
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

// figure out snippets for vscode
document.write("5 + 2 = " theSum1 + "<br />")
//resume at 21:00
//https://www.youtube.com/watch?v=-PR_XqW9JJU

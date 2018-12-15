
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


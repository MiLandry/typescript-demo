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
// figure out snippets for vscode
document.write("5 + 2 = ", theSum1 + "<br />");
//resume at 21:00
//https://www.youtube.com/watch?v=-PR_XqW9JJU

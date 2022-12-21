//Types

//Numbergit 


console.log(typeof ["10","e"]);//object
console.log(10+6);
console.log(10%6);
console.log(Math.PI);
console.log("10"+ 2345); //"102345"
console.log(parseInt("10")+213); //223 parseInt(converts string to integer)
console.log(isNaN(1)); 
console.log(+"10");// unitary plus operator converts string to number

//string
//sequences of Unicode characters
// "" quotes or ' quotes'

console.log("kibithegreat".length);
console.log("chris".charAt(0));
console.log("i want to be uppercase".toUpperCase());

//Booleans
console.log(true);

var shouldBeTrue = true;
var shouldBeNull = null;

console.log(shouldBeTrue);
console.log(shouldBeTrue=== false);

if (shouldBeTrue===true){
    console.log("Hello")
}
else{
    console.log("This var is not true")
}
//evaluates to true
var hasContent ="jfkdjfkdjgk";
console.log(Boolean(hasContent));

//evaluate to false
var doesNotHvaeValue ="";
console.log(Boolean(doesNotHvaeValue));

var isZero =0;
console.log(Boolean(isZero));

var nonAssignedVariable; //undefined
console.log(Boolean(nonAssignedVariable));

var isFalse = false;
var isNotANumber=NaN;

console.log(null === undefined);//false   ---  null is when you deliberately not define a value -undefined can be defined layer.Two diffrent things.

//Objects
// Collections of name-value pairs

var myName = {1:"kibi"};
console.log(myName);

var myObject = new Object();
myObject["2"]="Jolene";
myObject["3"]="Dolly";

console.log(myObject);

var myOtherObjects = {
    1:"Kim",
    2:"Kibenon",
    3:"Buss",
    4:"Cecil",
    5:"The_great",
};
myOtherObjects["keys"]="Wycklyf";
console.log(myOtherObjects);

var anotherObject = {
    firstname:"Kibi",
    lastName:"Kosgei",
    age:67,
    numbers:{
        phone :"0713281716",
        home:"75555555757",
    },
    address:"123-5435-5456",
}

console.log(anotherObject);
console.log(anotherObject.firstname);
console.log(anotherObject.numbers.home);//same
console.log(anotherObject.numbers["home"]);//same

var donut ={
    type:"coconut",
    glazed:true,
    sweetness:8,
    hasChocolate:false,
    sayType : function (){  //function inside a key
        console.log("Type: "+this.type);
    },
    showSweetness: function(){
        console.log("Sweetness: "+this.sweetness+"/10");
    },
}

console.log(donut);
donut.sayType();
donut.showSweetness();

//constructor pattern for creating objects

function Donut(type,glazed,sweetness,hasChocolate){
    this.type = type;
    this.glazed = glazed;
    this.sweetness= sweetness;
    this.chocolate= hasChocolate;
    this .sayType=function (){  
        console.log("Type: "+this.type);
};
this.showSweetness =function(){
    console.log("Sweetness: "+this.sweetness+"/10");
}
}
var coconutDonut = new Donut("coconut",false,8,true);
console.log(coconutDonut);
var vanillaDonut = new Donut ("vanilla",true,10,false);
console.log(vanillaDonut.sweetness);

//Arrays
//Collection of data

var myArray = [1,23,33,"kibi",true];
console.log(myArray[4]);
console.log(myArray.length);

var myNamesArray= new Array();
myNamesArray[0]= "Kolo";
myNamesArray[1]= "Caroline";
myNamesArray[100]= "Obadia";
console.log(myNamesArray.length)


var myName =["Faith","Abel"];
console.log(myName.unshift("kibi"));
console.log(myName);

// push(); //adds to the last of the array
// Pop();//removes the last item in array
// shift();//removes the first item
// unshift();//adds to the first
// sort();//sorts aacording to your preference
// reverse();//reverses the sort order
// concat(); //Combines two arrays

console.log(myNamesArray.concat(myName,myArray));

//
//Variable
var myName = "Kibi";
var myLastName ="Kosgei";
var myFavNum = 8;
var miObject = {name:"Kibi",age:24};
var miArray = [1,2,3,3,3];

console.log(typeof miObject);
console.log(myLastName);

function sayHi(){
    console.log("Hi"+ " "+ myName)
}
sayHi()

//Variable is case sensistive

var yourName = "Master";//global scope

function sayName(){
    var youName = "Senorita Perez"; //locally scoped not a good practice to redeclare variable with the same name.
    console.log(youName);
}
sayName();
console.log(yourName);

//not goood practice to use numbers in variables

var myName = "Daniel";
var anotherName =myName;
var yetAnotherName= anotherName;

console.log(yetAnotherName);


function sayHello(){
    var shouldSayHello = true;
    if (shouldSayHello === true){
        var myName = "Boen";
        console.log("Hello" +" "+myName);
    }
}
sayHello();

const yourArray = [1,23,4,5,6,7];
yourArray.push(4);
console.log(yourArray);


// const- if data is not gonna change
// let- data you are not sure if it will not change.
// Avoid var


//if statement
//tells the code if this thing is true, run more code
//if(expression){statement(s) to be executed if expression evaluates to truthy or falsey};

const shouldSayHello = true;
if(shouldSayHello === true){
    console.log("Hello there");
}

let numberCinco = 5;
console.log(typeof numberCinco);

const stringFive ="5";
console.log(typeof stringFive);

console.log(numberCinco == stringFive);
console.log(numberCinco === stringFive);

const myFirstNumber=123;
const mySecondNumber = 120;

if (myFirstNumber === mySecondNumber){
    console.log("Hi there");
}

const bankAccountBalance=1200;
const costOfItem = 120;
const tax = 0.50;
const canSpendMoney = true;
const hasReachedCreditLimit = false;

if (bankAccountBalance >= costOfItem + tax){
    console.log("You can purchase this item!");
}

console.log(bankAccountBalance !== costOfItem);

//nested if -statement inside an if statement


if (bankAccountBalance >= costOfItem + tax){
    console.log("Balance ok!Cheking tax");
    if(tax>=0.50){
        console.log("Tax ammount is too high");
    }
}

// and operator && all sides should evaluate to true
if(bankAccountBalance >= costOfItem && canSpendMoney && costOfItem < 150){
    console.log("You can purchase this item!");
}
// || or operator-either side can evaluate true

if  (hasReachedCreditLimit){
    console.log("Can purchase!")
}

//functions
/* A function is a javascript procedure- a set of statements that perform a task or calculates a value.[...]"*/



function sayHi() {
    console.log("Hi");
}
function sayBye() {
    console.log("Bye");
}
sayHi(); //invoke the block of code
sayHi();
sayBye();

function sayVipi(firstName,secondName){
    console.log("Vipi"+" "+ firstName +" "+secondName +"?");
}
 sayVipi("Kibi");
 sayVipi("Grace","Castillo");

function numberDoubler(num){
    const doubledValue = num*2;
    return doubledValue;
}
 const numTwoDoubled = numberDoubler(2);
 console.log(numTwoDoubled);

 //hoisting -accessing a var directly without passing in 

 const myInfo = {name:"Chris",age:30};

 function changeAgeTo100(myObj){
    myObj.age = 100;
 }

console.log(myInfo);
changeAgeTo100(myInfo);
console.log(myInfo);

const myNumbers = [1,2,3,4,5];

function addToArray(myArr){
    myArr.push(6);
}
console.log(myNumbers);

addToArray(myNumbers);

console.log(myNumbers);

//nested Functions

function squareAndMultiply(num1,num2){
    function squarer(x){
        return x*x;
    }
    function multiplyBy10(y){
        return y*10;
    }
    return squarer(num1) * multiplyBy10(num2);
}
console.log(squareAndMultiply(4,4));

const first = squareAndMultiply(4,4);
const second = squareAndMultiply(10,2);
const third = squareAndMultiply(4,200);

console.log(second);


function personFormatter(firstName,lastName,age){
    function formatNames(arg1,arg2){
        return arg1 + " " + arg2;
    }
    function dataFormatter(fullName,num){
        const formattedData = {
            name:fullName,
            age:num
        }
        return formattedData;
    }
    const formattedName = formatNames(firstName,lastName);
    return dataFormatter(formattedName,age);

}
console.log(personFormatter("Kibi","Kosgei",20));
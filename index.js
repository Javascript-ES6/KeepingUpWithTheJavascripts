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

//Advanced functions 

var sayHi = () => {
    console.log("Hi,am using an arrow function");
}
sayHi();


const multiplier = (num1,num2) => {
    return num1*num2;
}

console.log(multiplier(5,100));

const users=[{name:"Kibi",age:60},
{name:"Buss",age :25},
{name:"Kibenon",age:60}];

const userNameList = users.map(function(user){
    return user.name;
});

console.log(userNameList);
const userNameList1 = users.map((user)=>{ //arrow function
    return user.name;
});
console.log(userNameList);

//skipp {}  

const multiplier1 = (x,y)  => x*y;

console.log(multiplier(2,3));

//dropping parenthisis if it takes one arguement
const squarer = num => num*num;
console.log(squarer(10));


const numbers = [1,23,4,5,6,7,8,9,10,60]

const filteredNumbers = numbers.filter((num)=> num % 2 === 0
);
console.log(filteredNumbers);

const doubledNumber =(num) => {
    const numberContainer =[];
    num.forEach((n) => {
        const doubled = n*2;
        numberContainer.push(doubled);
    })
    return numberContainer;
} 
console.log(doubledNumber(numbers));


const bankAccount = {
    canSpendMoney:true,
    hasCreditCard: true,
}
function purchaseItem(price,acct = bankAccount){ //passing account as default
    if (acct.canSpendMoney){
        acct.balance -= price;
        if (acct.balance <=0){
            acct.canSpendMoney = false;
        }
        return true;
    }else{
        return false;
    }
}
console.log(purchaseItem(100));
console.log(purchaseItem(1));
//
function logAllArguments(x,y,z){ 
    const args = Array.prototype.slice.call(arguments,logAllArguments.length)
    console.log(args); // creates an object
}
console.log(logAllArguments("Hi","Hello","Vipi","Jambo","Hola","Chamgei"));

//
function logAllArguments(x,...nums){ 

    console.log(nums.sort()); // creates an object
}
console.log(logAllArguments("Hi","Hello","Vipi","Jambo","Hola","Chamgei"));

//
function logAllArguments(multiplier,...nums){ 

   return nums.map((n) => multiplier*n); // creates an object
}
console.log(logAllArguments(100,2,3,4,5,6,7,8,9));

function Dog(years,breed){
    const that = this;
    that.age=years;
    that.type = breed;
    setInterval(function(){
        that.age += 1;
    },1000)
}
const spike = new Dog(3,"Golden Retriever");
const fido = new Dog(5,"Rotweiler")


function testFunction(){
    'use strict'
    console.log(this);
}
testFunction();


function Dog(years,breed){
    this.age=years;
    this.type = breed;
    setInterval(() =>{
        this.age += 1;
// console.log(this);
    },5000)
}

//switch statement

/*
switch(expression){
    case value1:
        ststement to be executed when result of expression matches value1
        break;
        case value2:
            ...
            case value3:
                ..
                break;
                default:
                    break;

}
*/

const myFruit = "apple";
if (myFruit==="apple"){
    console.log("Awesome,I love apples");
}else if(myFruit === "orange"){
    console.log("Oranges are cool");
}else if(myFruit === "pear"){
    console.log("Pears are good too");
}else{
    console.log("That sounds pretty");
}

switch(myFruit){
    case "apple":
        console.log("Great I love apples");
     break;
     case "banana": 
     console.log("ok");
     break;
     default:
        console.log("I did not understand");
        break;
}

function numChecker(num){
let value;
switch(num){
    case 0:
        case 1:
            case 2:
                value = "Low range";
                break;
        case 3:
            case 4:
                case 5:
                value = "Mid range";
                break;
        case 6:
            case 7:
                case 8:
                value = "High range";
                break;
                default:
                    value="Input number between 0-8";
                    console.log(value);
                    return;
                }                    
setVolume(value);
}

function setVolume(n){
    console.log("Volume set as at " + n);
}
numChecker(100);


//loops
//quick and easy way to do something repeatedly
/* many types of looop but all do basically the same thing:
repeat something(i.e an action) a set number of times (even be 0).
*/
//while loop

/*
while (condition){
    statement 
}
*/

let numberOfLoops = 0;
while(numberOfLoops<10){
    console.log("I am looping!");
    console.log(numberOfLoops);
    numberOfLoops +=1;
}

let num1=0;
let num2=0;
while(num1<100){
    num1+=5;
    num2 += num1;

}
function loopDeLoop(){
    console.log("I am looping!!!");
}

const names = ["Chris","Bob","Joe","Crystal","Amy","Billy","Ashley"];

function nameLooper(arr){
    let index = 0;
    
    while(index<arr.length){
        if (arr[index] === "Amy"){
            console.log(arr[index]);
            break;
        }
        index +=1;
}
}
nameLooper(names);

//do...while statement
/*
do{
    statement
}while(condition)
*/

// let shouldRunOnlyOnce = true;
// let index=0;


// // do{
//     console.log("Looping");
//     index=+1;
//     if(index === 10){
//         shouldRunOnlyOnce= false;
//     }
// }while(shouldRunOnlyOnce);



// let condition;
// do{
//     const userInput = prompt("Enter q to exit");
//     if(userInput === 'q'){
//         condition = false;
//     }else{
//         condition = true;
//     }
// } while (condition);

let totalMoney = 1000;

do{
    checkIfCanPurchase();
}while(totalMoney>500);

function checkIfCanPurchase(){
    if(totalMoney > 500){
        console.log("Can Purchase :)");
    }
        else{
            console.log("Cannnot purchase :()");
        }
}
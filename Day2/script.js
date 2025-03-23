// import { webtechs} from "./web_techs"
// import { countries } from "./countries";

let webtechs = require("./web_techs");
let data = require("./countries");


let numOne = 1
let numTwo = 3.

let sum = numOne + numTwo
let mul = numOne * numTwo
let exp = numOne ** numTwo
let sub = numTwo - numOne

console.log(`${sum} ${mul} ${exp} ${exp} ${sub}`)

console.log(sum + ' ' + mul + " " + exp)
console.log(sum, mul, exp, sub)


const bp = 100
const temp = 37
const gravity = 9.81

console.log(`The Boiling point of water is ${bp} oC \nHuman body temparature is 37 oC \nThe gravity of earth is ${gravity} m/s2`)

// alert("Welcome to 30 Day of Java scrit")

// prompt('requried text','Number goes there')

// const agree = confirm('Are you sure you would like to Continue');

// console.log(agree)

let now = new Date()
console.log(now)

console.log(now.getFullYear())

console.log(now.getMonth())

console.log(now.getDate())

console.log(now.getMilliseconds())

console.log(now.getTime())


let whether = 'Sunny'

switch (whether.toLowerCase()) {
    case "sunny" :
        console.log('Sunny')
        break
    
    case 'cloudy' :
        console.log("Cloudy")
        break

}

const arr = Array()

console.log(arr)

const arr1 = []

console.log(arr)


const arr2 = Array(8).fill(8);
console.log(arr2)

fruits = ["Grape","Apple","Orange"];
vegetables = ["Spinach","Potato"];

const fruitsandvegetables = fruits.concat(vegetables);

console.log(fruitsandvegetables);

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.includes("Apple"));

console.log(typeof fruits.toString());

let today = new Date()

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDay();
let hour = today.getHours();
let min = today.getMinutes();

console.log(year+"-"+month+"-"+day+" "+hour+":"+min)

// let age = prompt("Enter your Age","Type Here");

// console.log(age*365*24*60*60);

console.log(webtechs);

Countries = data.countries;

let Data = require('./web_techs');

let shoppingCart = Data.shoppingCart;

shoppingCart.push("Sugar");

let removedItems = shoppingCart.splice(3,1,"Allergy");

console.log(shoppingCart,removedItems);

shoppingCart.splice(2,1,"Green Tea");

console.log(shoppingCart);

if(!Countries.includes("ETHIOPIA")) {
    Countries.push("ETHIOPIA");
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort()

console.log(ages);

for(let i = 0; i < 10; i++) {}
let i = 0
while(i < 10) {
    i++;
}
i = 0
do {
    i++;
}while(i < 10)


let str = 'My name is Guru Vamshi'

code = str.charCodeAt(0);

console.log(code);


let len = 3 + (Math.random())*10;

str = ''

for(let i = 0; i < len ; i++) {
    c = Math.ceil((Math.random())*255);
    console.log(`c => ${c}`)
    char = String.fromCharCode(c)
    str = str + char
}

console.log(str);

//Generating the Hexa Decimal Number 

c = Math.floor(Math.random()*10)

str = str + String.fromCharCode(c);

let array = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let lenArray = []

for(let value in array) {
    len = array[value].length
    lenArray.push(len);
}

console.log(lenArray);

ans = []

for(let val of array) {
    flag = val.includes("LAND");
    console.log(flag);
    if(flag) ans.push(val);
}

console.log(`ANs => ${ans}`);


function fullNmae() {
    console.log("Guru Vamshi");
}

fullNmae();

function printArray(arr) {
    len = arr.length
    for(let i = 0; i < len ; i++) {
        console.log(arr[i]);
    }
}

arr3 = ["hrhrw",'erjnav',"ersvvf"]

printArray(arr1)

function showDateTime() {

    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getYear();
    const hour = today.getHours();
    const min = today.getMinutes();

    console.log(day,month,year,hour,min);

}

showDateTime();

// function userIdGeneratedByUser() {

//     let len = 3
//     let cnt = 2

//     for(i = 0; i < cnt; i++) {
//         str = ''
//         for(j = 0; j < len; j++) {
//             code = Math.random()*255
//             str += code
//         }
//         console.log(str);
//     }
// }


// userIdGeneratedByUser();

function sumOfArray() {
    len = arguments.length
    let sum = 0
    for(i = 0; i < len; i++) {
        sum += arguments[i];
    }
    return sum
}

console.log(sumOfArray([2,3,4,5,6,7]));


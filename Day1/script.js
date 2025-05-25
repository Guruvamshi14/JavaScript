const name = "Guru vamshi"
const PI = 3.14
const gravity = 9.81

var isMarried = false


var challenge = "30 Days Of JavaScript"

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(0,1))

console.log(challenge.substring(0,1))

console.log(challenge.slice(3));

console.log(challenge.includes("Script"))

arr = challenge.split("");

console.log(arr)

arr = challenge.split(" ");

console.log(arr)

str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

arr = str.split(", ")

console.log(arr)

str = "30 Days Of JavaScript JavaScript"

str1 = str.replaceAll("JavaScript","Python")
console.log(str1)

console.log(str1.charAt(15));
console.log(str1.charCodeAt(15));

console.log(str1.indexOf('a'));
console.log(str1.lastIndexOf('a'));

let str2 = 'You cannot end a sentence with because because because is a conjunction'

console.log(str1.indexOf('because'))
console.log(str1.lastIndexOf('because'))

console.log(str1.search('beacuse'))

console.log(str1.startsWith('Hut'));
console.log(str1.endsWith('on'));

str2.concat('Hello','My name is Guru Vamshi    edbt');

console.log(str2.concat('Hello','My name is Guru Vamshi    edbt'));

console.log(str1.match('a'));

console.log(str1.repeat(2));

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up. \' by John Holmes teaches us to help one another.')

value = Math.ceil(Math.random()*100)
console.log(value)

value = 50 + Math.ceil(Math.random()*50)
console.log(value)

console.log("1 \t 1 \t 1 \t 1 \n2 \t 1 \t");


console.log(typeof ('2'*'6'+"34"));


function sayHello() {
    console.log("Hello Bro")
}

setInterval(sayHello,500000000);

setTimeout(sayHello,1000);

// const rect = {
//   length: 20,
//   breadth: 40,
//   name: "guru",
//   arr: ["Guru", "Vamshi", "Patchava", "AB"],
// };

const { countries } = require("../Day2/countries");

// console.log(rect["Gjvs"]);

// const rect1 = rect;
// const rect2 = Object.assign({}, rect);

// const keys = Object.keys(rect1);
// const values = Object.values(rect1);
// const entries = Object.entries(rect1);
// console.log(keys);
// console.log(values);
// console.log(entries);

// rect1["name"] = "Vamshi";

// console.log(rect["length"]);
// console.log(rect.name);

// function callback(n) {
//   return n ** 2;
// }

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 2));

// console.log(typeof callback);

// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const buildSomething = (k) => {
//       return n + m + k;
//     };
//     return buildSomething;
//   };
//   return doSomething;
// };

// console.log(higherOrder(2)(3)(4));

// arr = ["Guru", "vamdhisu", "akfbkajf", "kbffewf"];

// arr.forEach(function (element, index, arr) {
//   console.log(element);
// });

// arr.forEach((ele) => {
//   console.log(ele);
// });

// //Sum of elements in the array

// let sum = 0;

// const nums = [1, 2, 3, 4, 5, 6, 7];

// nums.forEach((ele, idx) => {
//   console.log(ele + " " + idx);
//   sum += ele;
// });

// console.log(sum);

// // const modifiedArray = nums.map(function(element,index,arr) {
// //     return ele;
// // });

// const nums1 = nums.map((ele) => ele * 2);
// console.log(nums1);

// const nums2 = nums.filter(function (ele) {
//   return true;
// });

// console.log(nums2);

// //Find the maximum element of the array
// const number = [10, 20, 3, 9.0, 0, 40, 6];

// const mxNumber = number.reduce(function (mx, num) {
//   return Math.max(num, mx);
// }, number[0]);

// console.log(mxNumber);

// const mp = number.reduce(function (acc, ele) {
//   if (!acc.hasOwnProperty(ele)) {
//     acc[ele] = 1;
//   } else {
//     acc[ele]++;
//   }
//   return acc;
// }, {});

// console.log(mp);

// let f = number.every((ele) => typeof ele == "number");

// console.log(f);

// // find returns the element that satisfies the starting number

// number.sort((a, b) => {
//   return a - b;
// });

// console.log(number);

// const companies = new Set();
// console.log(companies);

// const setOfNumber = new Set(number);
// console.log(setOfNumber);

// for (let val of setOfNumber) {
//   console.log(val);
// }

// console.log(setOfNumber.has(34));

// let pattern = "love";
// let regEx = new RegExp(pattern);

// regEx = /love/gi;

// const str = "I Love JavaScript love Love LOVE 3 4 4";
// let res = regEx.test(str);

// console.log(res);

// res = str.match(regEx);
// res = str.search(regEx);

// let replacedTxt = str.replace(/\d/, "Guru");

// console.log(replacedTxt);

// console.log(res);

// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// const repSen = sentence.replace(/[@#$%^&*!.;?]/gi, "");

// arr = repSen.split(" ");

// console.log(repSen);

// mp1 = new Map();

// for (let val of arr) {
//   console.log(val);
//   mp1.set(val, (mp1.get(val) || 0) + 1);
// }

// console.log(mp1);

// paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

// let arrPar = paragraph.split(" ");

// arrPar.sort();

// console.log(arr);

// const resArr = [...mp1.entries()].sort((a,b) => b[1] - a[1]);


// console.log(resArr.slice(0,10));

// data = ' He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month. '

// const amt = data.match(/[\d+]/gi);

// console.log(amt);

// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ) // log output green red and yellow text

// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)

//   const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     ,
//     "Name":"GUru"
//     }`

// const userObj = JSON.parse(usersText, (key, value) => {
//     let newValue = typeof value === 'string' && key != 'email' ? value.toUpperCase() : value
//     return newValue
// })

// console.log(userObj);


// let user1 = {
//     firstName : 'Guru',
//     lastName : 'Vamshi',
//     country : 'Indian',
//     email : 'guruvamshi1718@gmail.com',
//     arr : ['skvb',124,"isjvn"]
// }


// const txt = JSON.stringify(user1, ['firstName','lastName','arr'],1);

// console.log(txt);


// const txt1 = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// const obj = JSON.parse(txt1, undefined, 3);

// const strTxt = JSON.stringify(obj, undefined , 4);

// console.log(obj);

// let len = 0;
// let nm
// for(let key in obj) {
//     value = obj[key]
//     calLen  = value.skills.length
//     if(calLen > len) {
//         len = calLen
//         nm = key
//     }
// }

// localStorage.setItem("name" , "Guru");


const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function fetchData() {

    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        console.log(countries);
        let arr = []
        for(let key in countries) {
            let country = countries[key]
            const {name , area} = country
            arr.push([name,area]);
        } 
        console.log(arr);
        arr.sort((a,b) => b[1] - a[1]);
        console.log(arr.slice(0,10));
    } catch(err) {
        console.log(err);
    }

}

// fetchData();


function One(a) {
    function Two(b) {
        function Three(c) {
            return a + b + c
        }
        return Three
    }
    return Two
}

console.log(One(1)(2)(3));
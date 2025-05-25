// Promises Interview Questions 

// 1 Question

console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// });

// promise1.then((data) => console.log(data));



// Output 
// start
// 1
// End
// 2

// Event loop Will execute the Syncronous function, reoslve() is a async funciton it wil completed aftet the synchronous Code

// 2nd question 

// Promise.resolve("Guru")
// .then((data) => {
//     console.log("hello");
//     console.log(data);
// })
// .then((data) => {
//     console.log(data);
// })


// 3rd Question 

// Promise.reject("Data Not Found")
// .catch((data) => {
//     console.log(data);
//     throw new Error("Guru");
//     return new Error("Guru"); 
// })
// .then((data) => {
//     console.log("In then Block")
//     console.log(data);
// })
// .catch((res) => {
//     console.log(res)
//     console.log("In Catch Block");
//     }
// );







console.log("End");
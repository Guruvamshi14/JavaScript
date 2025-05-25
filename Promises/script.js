
// Synchronous Code and Asyncronous Code

console.log("Start");

// function ImportantAction(name, callback) {
//     setTimeout(() => {
//         callback(`Hello ${name}`);
//     }, 3000);
// }

// function StartHTMLCSS(name, callback) {
//     setTimeout(() => {
//         callback(`${name} Started Learning HTML & CSS`);
//     });
// }
 
// function StartJS(name, callback) {
//     setTimeout (() => {
//         callback(`${name} Started Learning JS`);
//     }, 100);
// }


// function StartReact(name, callback) {
//     setTimeout (() => {
//         callback(`${name} Started Learning React`);
//     }, 100);
// }



// let message = ImportantAction("Guru", (message) => {
//     console.log(message)
//     // console.log(renv);
//     StartHTMLCSS("Guru", (message) => {
//         console.log(message);
//         StartJS('Guru', (message) => {
//             console.log(message);
//             StartReact("Guru", (message) => {
//                 console.log(message);
//             });
//         });
//     });
// });

// Here The fucntions are executing in a sequence

// We can see that It looks like pyramid , Some times it is also called as Pryamid of Doom or Call back Hello

console.log("Finish");


//promise is used to eliminate the Promise

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = false;

//         if (result) resolve('Started Learning React');
//         // else reject(new Error("Please start learning React"));
//         else reject("Please start learning React");

//     }, 2000)
// });

// console.log(sub);

// sub
//     .then((data) => {
//     console.log(data)
//     })
//     .catch((data) => {
//         console.log(data);
//     })

// const sub = Promise.resolve("hello");
// console.log(sub);
// sub.then((data) => console.log(data));

// console.log("End");

//let us use the Promise for the above fucntion 

function ImportantAction(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, );
    })
}

function StartHTMLCSS(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} Started Learning HTML & CSS`);
        }, );
    })
}

function StartJS(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`${name} Started Learning JS`);
        }, );
    });
}

// ImportantAction("Guru").then((data) => {
//     console.log(data);
//     StartHTMLCSS("Guru").then((message) => {
//         console.log(message);
//         StartJS("Guru").then((message) => {
//             console.log(message);
//         })
//     })
// }).catch((data) => console.log(data));

// But It also looks like the pyramid Structure.

// Promise Chaining => TO avoid the Pyramid like Structruen

// ImportantAction("Guru")
//     .then ((res) => {
//         console.log(res);
//         return StartHTMLCSS("Guru");
//     })
//     .then((res) => {
//         console.log(res);
//         return StartJS("Guru");
//     }).then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.log(err));


// Promises COmbimantors 

// Promise.all([ImportantAction("Guru"),StartHTMLCSS("Guru"),StartJS("Guru")])
// .then((data) => {
//     console.log("hbwvs");
//     console.log(data)
//     })
// .catch((err) => console.log(new Error(err)));


// Promise.race([ImportantAction("Guru"),StartHTMLCSS("Guru"),StartJS("Guru")])
// .then((data) => console.log(data))
// .catch((err) => console.log(new Error(err)));

// It will the first promise whether that is resolved or rejected


Promise.allSettled([ImportantAction("Guru"),StartHTMLCSS("Guru"),StartJS("Guru")])
.then((data) => {
    console.log("Hello krkjennvr")
    console.log(data);  // It gives an array
})
.catch((err) => console.log(new Error(err)));


// It is used to give every promise whether it is rejected or resolved


// Promise.any([ImportantAction("Guru"),StartHTMLCSS("Guru"),StartJS("Guru")])
// .then((data) => {
//     console.log("Hello krkjennvr")
//     console.log(data);  // It gives an array
// })
// .catch((err) => console.log(new Error(err)));

// Promise.any will return a promise that is first resolved among all the promises.
// If all the promises fails then it will return the aggregate Error.



// Async and await is the methos to these type of Operations

// const result = async() => {
//     try {
//         const message1 = await ImportantAction("Guru");
//         const message2 = await StartHTMLCSS("Guru");
//         const message3 = await StartJS("Guru");
//         console.log(message1);
//         console.log(message2);
//         console.log(message3);
//     }
//     catch(err) {
//         console.log(err);
//     }

// }

// console.log(result());




console.log('End');
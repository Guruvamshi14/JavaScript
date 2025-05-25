const person = {
    name : "Guru",
    printName : function () {
        console.log(`Hello ${this.name}`);
    }
}

person.printName();

// const vamshi = {
//     name : "Vamshi"
// }

const vamshi = Object.create(person);

vamshi.name = "Vamshi";

vamshi.printName()
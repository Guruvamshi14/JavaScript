const name = {
    firstName : "Guru",
    lastName : "Vashi",
};

let printName = function (homeTown, jerseyNumber) {
    console.log(`${this.firstName}  ${this.lastName}`)
    console.log(homeTown + " " + jerseyNumber);
}

const name1 = {
    firstName : "AB",
    lastName : "Devillers"
}

// Function borrowing 

printName.call(name, "India", 14);
printName.call(name1, "SA", 17);

printName.apply(name1, ["SA", 17]);


const guruDetails = printName.bind(name, "India", 14);
console.log(guruDetails);
guruDetails();
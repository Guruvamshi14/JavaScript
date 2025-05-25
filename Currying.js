
function Multiply(n1, n2) {
    return n1 * n2;
}


// Function Currying can be done in two ways 

const MultiplyBy3 = Multiply.bind(this, 3);
// console.log(MultiplyBy3(5));

// Through Clouser


const Addtion = function(n1) {
    return function (n2) {
        return n1 + n2;
    }
}

const AddtionBy3 = Addtion(3);
// console.log(AddtionBy3(6));
// console.log(Addtion(5)(3));

function sum(n1) {
    if (n1 === undefined)
        console.log("Hello WOrld");
   console.log(n1);
}

console.log(sum());
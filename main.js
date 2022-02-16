var name = 6;
let first = "john";
const last = "doe";

let number1 = 4;
let number2 = 5;

function add(a, b) {
    return a+b;
}
// console.log(add(number1, number2));

let color1 = "red";
let background = "gray";



function render(x, y) {
    if(color1 == "red" && background == "gray") {
        return true;
    }
}

let array = [1, 2, 3, 4, 5];

array.push(6);
array.unshift(0);
array.pop();
array.shift();
array.splice(1, 0, 7);
array.splice(1, 1);

console.log(array);

// objects = \/
let person = {
    firstName: "John",
    lastName: "Doe",
    likes: ["Chocolate", "Ice Cream", "Candy", "Taxes"]
}

person.firstName = "Mary";

console.log(person.firstName);
console.log(person.likes.toString());

// primitives = numbers, string, null, undefined, boolean, symbol. 
var number = 15;
let first = "Andrew";
const last = "bryan";

function add(first, last) {
    return first+" "+last;
}
   
console.log(add(first, last))

let array = [1, 3, 5, 7, 9];

let geek = {
    firstName: "Andrew",
    lastName: "Bryan",
    likes: ["computers", "games", "guns"]
}
// also can use console.log(geek["firstName"]) geek["likes"].toString()
console.log(geek.firstName)
console.log(geek.lastName)
console.log(geek.likes.toString());

let subtract = (a, b) => {

}

let house = {
    sq: 2300,
    exterior: "brick",
    interior: "white",
    roof: "gable", 
}

function cookieCutter(example){
    let house = {};
    house.sq = example.sq;
    house.exterior = example.exterior;
    house.interior = example.interior;
    house.roof = example.roof;
    return house;    
}

console.log(cookieCutter(house))

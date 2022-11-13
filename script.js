console.log("hello");


function calculateDogAge(age) {
    return 7 * age
}

let dog1 = calculateDogAge(5)
let dog2 = calculateDogAge(8)

if (dog1 > dog2) {
    console.log("dog1 is older than dog2  and his age is" + dog1 + " based on dog years")
} else if (dog2 > dog1) {
    console.log("dog2 is older than dog1  and his age is " + dog2 + " based on dog years")
} else {
    console.log("their are same")
}
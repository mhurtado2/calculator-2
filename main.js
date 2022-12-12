
const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let resultAdd = add(17, 9)
console.log(resultAdd)


resultAdd = add(-13, -7)
console.log(resultAdd)


resultAdd = add(4, 58)
console.log(resultAdd)



const subtract = (firstNumber, secondNumber) => {
    const sum = firstNumber - secondNumber
    return sum
}

let resultSub = subtract(50, 9)
console.log(resultSub)


resultSub = subtract(-19, -7)
console.log(resultSub)


resultSub = subtract(9, 58)
console.log(resultSub)



const divide = (firstNumber, secondNumber) => {
    const sum = firstNumber / secondNumber
    return sum
}

let resultDivide = divide(60, 10)
console.log(resultDivide)


resultDivide = divide(-20, -4)
console.log(resultDivide)


resultDivide = divide(6, 54)
console.log(resultDivide)



const squareOne = (firstNumber) => {
    const squareFirstNumber = Math.pow(firstNumber, 2)
    return squareFirstNumber
}

let resultFirstSquare = squareOne(60)
console.log(resultFirstSquare)


const squareTwo = (secondNumber) => {
    const squareSecondNumber = Math.pow(secondNumber, 2)
    return squareSecondNumber
}

let resultSecondSquare = squareTwo(10)

console.log(resultSecondSquare)

/*
A quarter of the animals on a farm have four legs. 
The remaining three quarters of the animals have two legs. 
If there are 60 legs overall
 how many animals are there on the farm?
*/


// write a variable that shows only a quarter of animals on farm have 4 leg
/*
let anifourLegged = animals * (.25) * 4
anifourLegged = (.25a * 4)

//remaining 3/4 have two legs
let anitwoLegged = animals * (.75) * 2
anitwoLegged = (.75a * 2)

//60 legs overall
let Legs = 60

(.25a * 4) + (.75a * 2)  = 60
(1a) + (1.5a) = 60
2.5a = 60
a = 60/2.5
*/

const divideAnimals = (firstNumber, secondNumber) => {
    const sum = firstNumber / secondNumber
    return sum
}

let resultDivideAnimals = divideAnimals(60, 2.5)
console.log(resultDivideAnimals)
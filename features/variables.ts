let apples: number = 5
let fast: string = 'speed'
let hasValue: boolean = false

let nothingMuch: null = null
let nothing: undefined = undefined

let now: Date = new Date()

//Array

let colors: string[] = ["red","green","blue"]
let num: number[] = [1,2,3];
let truth: boolean[] = [true, false, true]

//class

class Car {

}

let car: Car = new Car()

//Object literals

const points: {a: number; b: number; c: string} = {
    a: 35,
    b: 10,
    c: "Hello world"
}

//Functions

const logNumbers: (i: number) => void = (i: number) => {
    console.log(i)
}

//When to use annotation
//1)  Funciton that returns the 'any' type

const json  = '{"x": 10, "y": 20}'
const coordinate: {x: number; y: number} = JSON.parse(json)
console.log(coordinate) // {x:10, y: 20}

//2) when we declare a variable an one line and initialize it later
let words: string[] = ["red", "green", "blue"]
let foundWords: boolean

for(let i = 0; i < words.length; i++ ){
    if(words[i] === 'green'){
        foundWords =  true
    }
}
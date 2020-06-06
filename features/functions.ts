const add = (a: number, b: number): number => {
    return a + b
}

const sub = (a: number, b: number): number => {
    return a - b
}

function devide (a: number, b: number): number{
    return a / b
}

const multiply = (a: number, b: number):number => {
    return a * b
}

//Destructuring

const todaysWeather: {date: Date, weather: string} = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}) => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)
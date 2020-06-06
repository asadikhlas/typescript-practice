const carMakers: string[] = ['Ford', 'toyota', 'Chevy'];

const cardMakeBy: string[][] = [['abc'], ['fa'], ['fas']];

const newArray: (string | number)[] = [1, 2, 'Asad'];

//Help with inference when extracting values
const car: string  = carMakers[0]
const mycar: string = carMakers.pop()

//Prevent incompatible values
carMakers.push(100);

//Help with array helpers
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
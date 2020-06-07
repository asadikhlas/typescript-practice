class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  driveTwo(): void {
    this.drive();
    this.honk();
  }
}

const cars = new Car(4, 'red');
cars.driveTwo();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

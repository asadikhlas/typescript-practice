class Vehicle {
  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  driveTwo(): void {
    this.drive();
  }
}

const cars = new Car();
cars.driveTwo();
cars.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

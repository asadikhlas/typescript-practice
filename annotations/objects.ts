const profile = {
  name: 'Asad',
  age: 23,
  coords: {
    lat: 0,
    lng: 25,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

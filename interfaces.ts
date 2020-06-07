const oldCivic = {
    name: 'civic',
    year: 2000,
    broken :true
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`vehicle name: ${vehicle.name}`)
    console.log(`vehicle year: ${vehicle.year}`)
    console.log(`broken? ${vehicle.broken}`)

}

printVehicle(oldCivic)
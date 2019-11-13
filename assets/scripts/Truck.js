import Transport from './Transport.js';

const DEFAULT_TRUCK = {
  id: 'smrta-asdad-deead',
  model: 'MAN TGX D38',
  licensePlate: 'AA1232OO',
  producedYear: '2018',
  capacity: '12000',
  averageSpeed: '110',
  typeOfGas: 'Diesel'
};

export default class Truck extends Transport {
  constructor(
    id = DEFAULT_TRUCK.id, 
    model = DEFAULT_TRUCK.model, 
    producedYear = DEFAULT_TRUCK.producedYear,
    capacity = DEFAULT_TRUCK.capacity,
    averageSpeed = DEFAULT_TRUCK.averageSpeed,
    licensePlate = DEFAULT_TRUCK.averageSpeed,
    typeOfGas = DEFAULT_TRUCK.typeOfGas
    ) {
    super(id, model ,producedYear, capacity, averageSpeed)
    this._licensePlate = licensePlate;
    this._typeOfGas = typeOfGas;
  }
  get showAverageSpeed() {
    return `${this._averageSpeed} km`
  }

}


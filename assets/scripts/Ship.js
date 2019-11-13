import Transport from './Transport.js';

export const DEFAULT_SHIP = {
  id: 'xxxxx-qqqqq-aaaaa',
  model: 'Combo',
  name: 'JS Band Ship',
  producedYear: '2019',
  capacity: '200000',
  averageSpeed: '20',
  countOfTeam: '83'
};


export default class Ship extends Transport {
  constructor(
     id = DEFAULT_SHIP.id,
     model = DEFAULT_SHIP.model, 
     name = DEFAULT_SHIP.name, 
     producedYear = DEFAULT_SHIP.producedYear, 
     capacity = DEFAULT_SHIP.capacity, 
     averageSpeed = DEFAULT_SHIP.averageSpeed, 
     countOfTeam = DEFAULT_SHIP.countOfTeam
     ) {
    super(id, model ,producedYear, capacity, averageSpeed)
    this._countOfTeam = countOfTeam;
    this._name = name;

  }

  get showAverageSpeed() {
    return `${this._averageSpeed} nm`
  }
}

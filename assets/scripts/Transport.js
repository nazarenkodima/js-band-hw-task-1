
export default class Transport {
  constructor(id, model, producedYear, capacity, averageSpeed) {
    this._id = id;
    this._model = model;
    this._producedYear = producedYear;
    this._capacity = capacity;
    this._averageSpeed = averageSpeed;
  }

  get showCapacityInPounds() {
    const pound = 2.2046226218;
    const capacityInPounds = this._capacity * pound;

    return `${capacityInPounds.toFixed()}lbs`
  }


}



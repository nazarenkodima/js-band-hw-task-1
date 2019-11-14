export default class Cost {
  constructor(model, costByKilogram, costByDistance) {
    this._model = model;
    this._costByKilogram = costByKilogram;
    this._costByDistance = costByDistance;
  }
}
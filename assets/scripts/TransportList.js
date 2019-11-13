import Truck from './Truck.js';
import Ship from './Ship.js';

export default class TransportList {
  constructor() {

    this.transportList = document.querySelector('.transport-list');

    const addTruckButton = document.getElementById('add-truck');
    const addShipButton = document.getElementById('add-ship');

    addTruckButton.addEventListener('click', this.addTruck.bind(this));
    addShipButton.addEventListener('click', this.addShip.bind(this));

    this.render()
  }

  addShip() {
    const id = document.querySelector('.ship-id').value;
    const model = document.querySelector('.ship-model').value;
    const name = document.querySelector('.ship-name').value;
    const producedYear = document.querySelector('.ship-producedYear').value;
    const capacity = document.querySelector('.ship-capacity').value;
    const averageSpeed = document.querySelector('.ship-averageSpeed').value;
    const countOfTeam = document.querySelector('.ship-countOfTeam').value;
    const shipInputs = document.querySelectorAll('.ship-input');

    let ship;

    shipInputs.forEach(input => { 
      if(!input.value.trim()) {
        ship = new Ship();
      } else {
        ship = new Ship(id, model, name, producedYear, capacity, averageSpeed, countOfTeam);
      }
    })
  
    console.log(`Average speed: ${ship.showAverageSpeed}`)
    console.log(`Capacity in pound: ${ship.showCapacityInPounds}`)
  
    shipInputs.forEach(input => { 
      input.value = '';
    })
  
    const li = document.createElement('li');
    li.insertAdjacentHTML('afterbegin', `
      <span>ID:</span> ${ship._id}
      <span>Model: </span>${ship._model}
      <span>Type:</span> ${ship._name}
      <span>Produced year:</span> ${ship._producedYear}
      <span>Capacity:</span> ${ship._capacity}kg
      <span>Average speed:</span> ${ship._averageSpeed}km
      <span>Count of Team:</span> ${ship._countOfTeam}
    `);
  
    this.transportList.appendChild(li)
  
    localStorage.setItem('transport', JSON.stringify(this.transportList.innerHTML))
  }

  addTruck() {
    const id = document.querySelector('.truck-id').value;
    const model = document.querySelector('.truck-model').value;
    const producedYear = document.querySelector('.truck-producedYear').value;
    const capacity = document.querySelector('.truck-capacity').value;
    const averageSpeed = document.querySelector('.truck-averageSpeed').value;
    const licensePlate = document.querySelector('.truck-licensePlate').value;
    const typeOfGas = document.querySelector('.truck-typeOfGas').value;
    const truckInputs = document.querySelectorAll('.truck-input');

    let truck;

    truckInputs.forEach(input => { 
      if(!input.value.trim()) {
        truck = new Truck();
      } else {
        truck = new Truck(id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas);

      }
    })

    console.log(`Average speed: ${truck.showAverageSpeed}`)
    console.log(`Capacity in pound: ${truck.showCapacityInPounds}`)
  
    truckInputs.forEach(input => { 
      input.value = '';
    })
  
    const li = document.createElement('li');
    li.insertAdjacentHTML('afterbegin', `
      <span>ID:</span> ${truck._id}
      <span>Model:</span> ${truck._model}
      <span>Produced year:</span> ${truck._producedYear}
      <span>Capacity:</span> ${truck._capacity}kg
      <span>Average speed:</span> ${truck._averageSpeed}km
      <span>License plate:</span> ${truck._licensePlate}
      <span>Type of gas:</span> ${truck._typeOfGas}
    `);
  
    this.transportList.appendChild(li)
  
    localStorage.setItem('transport', JSON.stringify(this.transportList.innerHTML))
  }

  render() {
    this.transportList.innerHTML = '';

    if (localStorage.getItem('transport') !== null) {
      const updatedTransportList = localStorage.getItem('transport');
        this.transportList.innerHTML =  JSON.parse(updatedTransportList);
    }
    
  }
}
import Cost from './Cost.js';

export default class CostList {
  constructor() {

    this.costList = document.querySelector('.cost-list');

    const addCostButton = document.getElementById('add-cost');

    addCostButton.addEventListener('click', this.addCost.bind(this));

    this.render()
  }

  addCost() {
    const model = document.querySelector('.model').value;
    const costByKilogram = document.querySelector('.costByKilogram').value;
    const costByDistance = document.querySelector('.costByDistance').value;
    const costInputs = document.querySelectorAll('.cost-input');

    const cost = new Cost(model, costByKilogram, costByDistance);

    costInputs.forEach(input => { 
      input.value = '';
    })

    const li = document.createElement('li');
    li.insertAdjacentHTML('afterbegin', `
      <span>Model:</span> ${cost._model}
      <span>Cost by kilogram:</span> ${cost._costByKilogram}
      <span>Cost by distance:</span> ${cost._costByDistance}
    `);
  
    this.costList .appendChild(li)
  
    localStorage.setItem('cost', JSON.stringify(this.costList.innerHTML))

  }

  render() {
    this.costList.innerHTML = '';

    if (localStorage.getItem('cost') !== null) {
      const updatedCostList = localStorage.getItem('cost');
        this.costList.innerHTML =  JSON.parse(updatedCostList);
    }
    
  }
}
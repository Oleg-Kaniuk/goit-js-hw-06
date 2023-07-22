const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
// console.dir(ingredientsList);

const elements = ingredients.map(elem => {
  const itemLi = document.createElement('li');
  itemLi.textContent = elem;
  itemLi.classList.add('item');
  return itemLi;
}); 

ingredientsList.append(...elements);







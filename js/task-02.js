const ingredients =
[
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('.js-ingr-picker');

const elements = ingredients.map(element => {
    const ingredientsElement = document.createElement('li');
    ingredientsElement.textContent = element;
    return ingredientsElement;
});
 
console.log(elements);

ingredientsList.append(...elements);


// const arrayEl = document.querySelector('.js-ingr-picker');

// const elements = ingredients.map(item => {
//   const liEl = document.createElement('li');
//   liEl.textContent = item;
//   return liEl;
// });

// arrayEl.append(...elements);

// console.log(elements);


 


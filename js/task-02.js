const ingredients =
[
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arrayEl = document.querySelector('ingredients');

const elements = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  return liEl;
});

arrayEl.append(...elements);

// console.log(elements);



 


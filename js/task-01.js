const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach((category) => {
  console.log(`Категория: ${category.children[0].textContent}`);
  console.log(`Количество элементов: ${category.children[1].children.length}`);
});
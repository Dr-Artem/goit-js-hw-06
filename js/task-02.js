const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsHtml = document.getElementById('ingredients')

ingredients.forEach((ingredient) => {
	const liEl = document.createElement('li');
	liEl.classList.add('item')
	liEl.textContent = ingredient;
	ingredientsHtml.append(liEl)
})
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const newList = ingredients.map((name) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = name;

  return liElement;
});

ingredientsList.append(...newList);

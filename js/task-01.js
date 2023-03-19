const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((element) => {
  const categoryNameNode = element.firstElementChild;
  const elements = categoryNameNode.nextElementSibling;

  console.log("Category: ", categoryNameNode.textContent);
  console.log("Elements: ", elements.childElementCount);
});

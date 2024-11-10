// Example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let myPara = document.getElementById("myParagraph");
    myPara.textContent = "Text has been changed";
  });

// Example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
});

// Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Egg";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
});

// Example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

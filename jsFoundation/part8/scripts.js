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
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
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

// Example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Event Handling in the DOM");
  });

// Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  alert(`You Clicked on: ${event.target.textContent}`);
  event.target.classList.add("highlight");
});

// Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //prevent the default submit behaviour
    let feedbackInput = document.getElementById("feedbackInput");
    let feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.textContent = `Feedback is: ${feedbackInput.value}`;
    // Note the use of "value" here instead of "textContent" for the input element
    feedbackDisplay.style.fontSize = "25px";
    feedbackDisplay.classList.add("highlight");
  });

// Example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

// Example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
    descriptionText.style.border = "4px solid pink";
  });

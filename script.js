const checklist = document.getElementsByClassName("checklist")[0];

const listicon = document.getElementById("listicon");

const items = document.getElementById("items");

const userInput = document.getElementById("userInput");

listicon.addEventListener("click", function () {
  items.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

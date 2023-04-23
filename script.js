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

function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;

  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });

  items.insertAdjacentElement("beforeend", h2);

  userInput.value = "";
}

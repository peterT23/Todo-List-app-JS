const btnAdd = document.querySelector(".add-task");
const inputData = document.querySelector("#input-box");
const newUlDisplay = document.querySelector("#list-container");

console.log("inputdata", inputData);

btnAdd.addEventListener("click", () => {
  if (inputData.value === "") {
    alert("You must type your task");
  } else {
    let newTaskDisplay = document.createElement("li");
    newTaskDisplay.innerHTML = inputData.value;
    newUlDisplay.appendChild(newTaskDisplay);
    let spanX = document.createElement("span");
    spanX.innerHTML = "\u00d7";
    newTaskDisplay.appendChild(spanX);
  }
  inputData.value = "";
  saveData();
});

newUlDisplay.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target);
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", newUlDisplay.innerHTML);
}

function showData() {
  newUlDisplay.innerHTML = localStorage.getItem("data");
}
showData();

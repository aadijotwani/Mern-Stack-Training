let button = document.getElementById("myButton");

function showMessage() {
  alert("You clicked the button");
  button.removeEventListener("click", showMessage);
}

button.addEventListener("click", showMessage);

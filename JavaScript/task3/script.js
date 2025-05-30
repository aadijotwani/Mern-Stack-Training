function letsDo() {
  const div = document.getElementById("abc");

  // div.style.backgroundColor="red"

  // div.classList.add("a")
  // div.classList.add("b")
  // div.classList.remove("b")

  div.classList.toggle("c");
}

function changecolor(color) {
  const div = document.getElementById("abc");
  div.style.backgroundColor = color;
}

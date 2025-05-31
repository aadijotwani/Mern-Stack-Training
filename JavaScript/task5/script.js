function bulbColor(color) {
  const inputColor = document.getElementById("circle");

  inputColor.style.backgroundColor = color;
}

const rb = document.getElementById("red");
const gb = document.getElementById("green");
const bb = document.getElementById("blue");

rb.addEventListener("mouseover", () => {
  bulbColor("red");
});

gb.addEventListener("mouseover", () => {
  bulbColor("green");
});

bb.addEventListener("mouseover", () => {
  bulbColor("blue");
});

rb.addEventListener("mouseout", () => {
  bulbColor("white");
});

gb.addEventListener("mouseout", () => {
  bulbColor("white");
});

bb.addEventListener("mouseout", () => {
  bulbColor("white");
});


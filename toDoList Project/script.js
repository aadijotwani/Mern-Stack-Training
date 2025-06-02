function AddTask() {
  const newTask = document.getElementById("task").value.trim();

  const d = document.createElement("div");
  d.classList.add(
    "container",
    "border",
    "py-2",
    "px-4",
    "rounded",
    "border-success",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mt-2"
  );

  const s = document.createElement("span");
  s.innerText = newTask;

  const b = document.createElement("button");
  b.classList.add("btn", "btn-danger");
  b.innerText = "Delete";
  b.onclick = () => d.remove();

  d.appendChild(s);
  d.appendChild(b);

  document.getElementById("taskList").appendChild(d);
  document.getElementById("task").value = "";
}

function addData() {
  const data = JSON.parse(localStorage.getItem("Data"));
  const List = document.getElementById("taskList");

  data.forEach((Element) => {
    const d = document.createElement("div");

    d.innerHTML = `
            <div class="d-grid mt-3 container border rounded shadow">
                <div class="d-flex gap-5 align-items-center">
                    <h4>Name :</h4>
                    <span>${Element.Name}</span>
                </div>
                <div class="d-flex gap-5 align-items-center">
                    <h4>Phone :</h4>
                    <span>${Element.Phone}</span>
                </div>
                <div class="d-flex gap-5 align-items-center">
                    <h4>Name :</h4>
                    <span>${Element.Email}</span>
                </div>
            </div>
        `;

    const b = document.createElement("button");
    b.classList.add("btn", "btn-danger");
    b.innerText = "Delete";
    b.onclick = () => d.remove();

    List.appendChild(d);
    List.appendChild(b);
    
  });


}



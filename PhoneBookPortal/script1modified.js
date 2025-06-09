const data = JSON.parse(localStorage.getItem("Data"));
const  List = document.getElementById("taskList");

data.forEach((Element) => {
    const d = document.createElement("tr");
    d.innerHTML = `
            <th class="border w-25">${Element.Name}</th>

            <th class="border w-25">${Element.Phone}</th>

            <th class="border w-">${Element.Email}</th>
    `;

    List.appendChild(d);
});

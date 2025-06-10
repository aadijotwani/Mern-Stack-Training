const data = JSON.parse(localStorage.getItem("Data"));
const  List = document.getElementById("taskList");

data.forEach((Element) => {
    const d = document.createElement("tr");
    d.innerHTML = `
            <th class=" w-25">${Element.Name}</th>

            <th class=" w-25">${Element.Phone}</th>

            <th class=" w-25">${Element.Email}</th>

            <th> <button class="bg-danger rounded-2"> Delete </button> </th>

    `;

    d.classList.add("text-dark", "text-center");
    // Add event listener to the delete button
    d.querySelector("button").addEventListener("click", function() {
        d.remove();
    });

    List.appendChild(d);
});




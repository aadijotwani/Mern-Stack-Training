function Submit()
{
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    let tempdata = JSON.parse(localStorage.getItem("Data")) || [];

    tempdata.push({
        Name: name,
        Phone: phone,
        Email: email, 
    })

    const Data = JSON.stringify(tempdata);
    localStorage.setItem("Data", Data);

    reset();
}


function reset() {
    document.querySelectorAll("input").forEach((Element) => (Element.value = ""));
}
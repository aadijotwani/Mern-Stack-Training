function Submit() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  if (!nm || !em || !ph) {
    alert("All Fields Requierd !!!!");
    document
      .querySelectorAll("input")
      .forEach((element) => (element.value = ""));
    return;
  }

  
  let tempdata = JSON.parse(localStorage.getItem("Data")) || [];
  tempdata.push({
    Name: nm,
    Email: em,
    Phone: ph,
  });

  const Data = JSON.stringify(tempdata);
  localStorage.setItem("Data", Data);

  reset();
}

function reset() {
  document.querySelectorAll("input").forEach((element) => (element.value = ""));
}



function validate()
{
    const nm = document.getElementById("name").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phone").value.trim();


}
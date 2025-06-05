function Submit() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  if (!!isEmptyCheck()) {
    return;
  }

  if (!!validate()) {
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

function validate() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  document
    .querySelectorAll(".error")
    .forEach((element) => (element.value = ""));

  let isValid = "false";

  if (!/^[a-z \s A-Z]+$/.test(nm) || nm.length < 3) {
    document.getElementById("nameError").innerText =
      "Only Alphabets and Spaces are allowed, Must be Atleast 3 charecters";
    isValid = true;
  }

  if (
    !/^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)
  ) {
    document.getElementById("emailError").innerText =
      "Please enter a valid Email ID";
    isValid = true;
  }

  if (!/^[6-9]\d{9}$/.test(ph) || ph.length != 10) {
    document.getElementById("phoneError").innerText =
      "Please Enter a valid Phone Number";
    isValid = true;
  }

  return isValid;
}

function isEmptyCheck() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  let isValid = "false";

  if (!nm) {
    alert("All Fields Requierd !!!!");
    document.getElementById("nameError").innerText =
      "WARNING!! Please Fill the Field:";
    isValid = true;
  } 
  
  if (!em) {
    alert("All Fields Requierd !!!!");
    document.getElementById("emailError").innerText =
      "WARNING!! Please Fill the Field:";
    isValid = true;
  }

  if (!ph) {
    alert("All Fields Requierd !!!!");
    document.getElementById("phoneError").innerText =
      "WARNING!! Please Fill the Field:";
    isValid =  true;
  }

  if(isValid){
  return isValid;
  }
  return isValid;
}

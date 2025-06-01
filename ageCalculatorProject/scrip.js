function Calculate() {
  const dob = document.getElementById("DOB");
  const date = document.getElementById("currentDate").value;

  dob.value.shift(2);
  console.log(dob);
}

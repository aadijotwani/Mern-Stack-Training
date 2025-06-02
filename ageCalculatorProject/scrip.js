const date = new Date();
const curDate = `${String(date.getDate()).padStart(2, "0")}-${String(
  date.getMonth()
).padStart(2, "0")}-${date.getFullYear()}`;
//const curDate = date.toISOString().slice(0,10)
document.getElementById("currentDate").innerText = curDate;

function Calculate() {
  const dob = document.getElementById("DOB").value.split("-");

  const birthYear = Number(dob[0]);
  const birthMonth = Number(dob[1]);
  const birthDay = Number(dob[2]);

  const today = new Date();
  let year = today.getFullYear() - birthYear;
  let month = today.getMonth() + 1 - birthMonth;
  let day = today.getDate() - birthDay;

  // Adjust day and month if needed
  if (day < 0) {
    month--;
    day += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // last day of previous month
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  const AgeYear = year;
  const AgeMonth = month;
  const AgeDay = day;

  // Display the result
  document.getElementById("Age").innerText = `Age: ${AgeYear} years, ${AgeMonth} months, ${AgeDay} days`;
}

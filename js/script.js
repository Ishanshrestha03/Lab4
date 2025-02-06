function calculateSquare() {
  const number = document.getElementById("numberInput").value;
  if (number === "") {
    alert("Enter a number:");
    return;
  }
  const square = number * number;
  document.getElementById(
    "result"
  ).innerText = `Square of ${number} is ${square}`;
}

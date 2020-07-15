var person = prompt("Please enter your name", "Suhail Nawaz");

if (person != null) {
  document.getElementById("Question-01").innerHTML =
  "Hello " + person + "! How are you today?";
}

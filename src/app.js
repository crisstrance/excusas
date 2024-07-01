document.addEventListener("DOMContentLoaded", function() {
  generateExcuse();
});

function generateExcuse() {
  let who = ["Mi perro", "Mi abuela", "El cartero", "Mi pajarito"];
  let action = ["comió", "meó", "rompió", "estalló"];
  let what = ["mi tarea", "mi móvil", "el auto"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicios",
    "durante el almuerzo",
    "cuando miraba series",
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  document.getElementById("excuse").innerHTML = excuse;
}

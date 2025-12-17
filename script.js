//Variabili che richiamano gli elementi HTML
const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("bottone");

//Creazione della funzione callback su id bottone
bottone.addEventListener("click", function() {});


//Dichiarazione della funzione da utilizzare come callback
function attivaBottone() {
  if (lampadina.src.includes("white_lamp.png")) {
    lampadina.src = "img/yellow_lamp.png"; 
  } if (lampadina.src.includes("yellow_lamp.png")) {
    lampadina.src = "img/white_lamp.png"; 
  }

  if (bottone.textContent.includes("Accendi")) {
    bottone.textContent = "Spegni";
  } else if (bottone.textContent.includes("Spegni")) {
    bottone.textContent = "Accendi";
}; 
}
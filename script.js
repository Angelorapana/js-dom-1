
//Variabili che richiamano gli elementi HTML
const lampadinaEl = document.getElementById("lampadina");
const bottoneEl = document.getElementById("bottone");

//Creazione della funzione callback su id bottone
bottoneEl.addEventListener("click", function() {});

//Dichiarazione della funzione da utilizzare come callback
function attivaBottone() {

  if (lampadinaEl.src.includes("white_lamp.png")) {lampadinaEl.src = "img/yellow_lamp.png";} 

  else if (lampadinaEl.src.includes("yellow_lamp.png")) {lampadinaEl.src = "img/white_lamp.png";}

  if (bottoneEl.textContent.includes("Accendi")) {bottoneEl.textContent = "Spegni";} 

  else if (bottoneEl.textContent.includes("Spegni")) {bottoneEl.textContent = "Accendi";} 

  if (bottoneEl.classList.contains("btn-info")) {bottoneEl.classList.remove("btn-info"); bottoneEl.classList.add("btn-warning");} 

  else if (bottoneEl.classList.contains("btn-warning")) {bottoneEl.classList.remove("btn-warning"); bottoneEl.classList.add("btn-info");}

}



//Output finale ( invocazione della funzione su id bottone)
bottoneEl.addEventListener("click", attivaBottone);
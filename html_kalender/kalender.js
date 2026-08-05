// Überschrift aus der HTML-Datei auswählen
let headline = document.getElementById("Mainheadline");

// Das heutige Datum speichern
let today = new Date();

// Tag, Monat und Jahr aus dem heutigen Datum herauslesen
// padStart sorgt dafür, dass z. B. aus 5 -> 05 wird.
let day = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0");
// +1, weil JavaScript die Monate von 0 bis 11 zählt.
let year = today.getFullYear();

// Überschrift des Kalenders setzen
headline.textContent = "Kalenderblatt vom " + day + "." + month + "." + year;

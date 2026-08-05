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
let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "oktober", "November", "Dezember"];

// Überschrift des Kalenders setzen mit dem aktuellen Datum
headline.textContent = "Kalenderblatt vom " + day + "." + month + "." + year;

let dayText = document.getElementById("day1");
dayText.textContent = today.getDate();

let monthText = document.getElementById("month1")
monthText.textContent = months[today.getMonth()];

let yearText = document.getElementById("year1");
yearText.textContent = today.getFullYear();


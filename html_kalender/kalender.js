let headline = document.getElementById("Mainheadline");

let today = new Date();
let day = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth()+1).padStart(2, "0");
let year = today.getFullYear();

console.log(day);
console.log(month);
console.log(year);
headline.textContent = "Kalenderblatt vom "+ day + "." + month + "." + year;
let kalenderInhalt = document.getElementById ("kalenderInhalt");

let actualMonth = today.getMonth();
let actualYear = today.getFullYear();
let numberOfDays = new Date (
    actualYear,
    actualMonth +1,
    0
) .getDate();
console.log("Anzahl der Tage", numberOfDays);
let firstWeekday = new Date(
    actualYear,
    actualMonth,
    1
).getDay();
console.log("Erster Wochentag", firstWeekday);
if (firstWeekday ==0) {
    firstWeekday = 7;
}
console.log ("Angepasster Wochentag:", firstWeekday);
let row = document.createElement ("tr");
kalenderInhalt.appendChild (row);

let tableCell = document.createElement ("td");
row.appendChild (tableCell);

tableCell.textContent = 1;
for (let day = 1; day <=numberOfDays; day++) {      //(i;i=;i++) Variablen für i eingefügt. day auch den Wert "1" gegeben
    let tableCell = document.createElement("td");   //Erstelle eine neue tabellenzelle und speichere sie in "tableCell" (td)
    tableCell.textContent = day;                    //schreibt text in die html datei und zwar den wert von "Day" in (td)
    row.appendChild = tableCell;                    // Füge die Tabellenzelle in die Tabellenzeile ein.
    if (day % 7 == 0 && day != numberOfDays) {
        row= document.createElement ("tr");
        kalenderInhalt.appendChild(row);
    }
}
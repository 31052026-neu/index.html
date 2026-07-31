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

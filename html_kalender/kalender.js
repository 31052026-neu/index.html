// Das HTML-Element mit der ID "Mainheadline" auswählen
// und in der Variable "headline" speichern.
let headline = document.getElementById("Mainheadline");

// Das aktuelle Datum und die aktuelle Uhrzeit
// in einem Date-Objekt speichern.
let today = new Date();

// Den aktuellen Tag des Monats auslesen (1–31),
// in einen String umwandeln und bei Bedarf
// eine führende 0 ergänzen.
let day = String(today.getDate()).padStart(2, "0");

// Den aktuellen Monat auslesen.
// getMonth() liefert Werte von 0 bis 11.
// Deshalb wird +1 gerechnet, damit daraus 1 bis 12 wird.
// Danach wird der Monat in einen String umgewandelt
// und bei Bedarf eine führende 0 ergänzt.
let month = String(today.getMonth() + 1).padStart(2, "0");

// Den aktuellen Tag und Monat zu einem Text
// im Format "TT.MM" zusammensetzen.
// Dieses Format wird später mit den Feiertagen verglichen.
let currentDate = day + "." + month;

// Das aktuelle Jahr auslesen, zum Beispiel 2026.
let year = today.getFullYear();

// Array mit allen Monatsnamen.
// Der Index entspricht dem Wert von getMonth().
// Index 0 ist Januar, Index 1 ist Februar usw.
let months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "oktober",
  "November",
  "Dezember",
];

// Array mit allen Wochentagen.
// Der Index entspricht dem Wert von getDay().
// Index 0 ist Sonntag, Index 1 ist Montag usw.
let days = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

// Array mit der Anzahl der Tage jedes Monats.
// Der Index entspricht ebenfalls dem Wert von getMonth().
// Index 0 enthält die Tage des Januars,
// Index 1 die Tage des Februars usw.
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Array mit den festen gesetzlichen Feiertagen in Hessen.
// Die Feiertage sind im Format "TT.MM" gespeichert,
// damit sie mit der Variable "currentDate" verglichen werden können.
let holidays = ["01.01", "01.05", "03.10", "25.12", "26.12"];

// Array mit den möglichen Vorkommen
// eines Wochentags innerhalb eines Monats.
let weekDayTimes = ["erste", "zweite", "dritte", "vierte"];

// Den Text der Überschrift auf das aktuelle Datum setzen.
// Die einzelnen Werte werden mit Punkten verbunden.
headline.textContent = "Kalenderblatt vom " + day + "." + month + "." + year;

// Das HTML-Element mit der ID "day1" auswählen
// und in der Variable "dayText" speichern.
let dayText = document.getElementById("day1");

// Den aktuellen Kalendertag in das HTML-Element schreiben.
// getDate() liefert den Tag des Monats von 1 bis 31.
dayText.textContent = today.getDate();

// Alle HTML-Elemente mit der Klasse "weekDays" auswählen.
// Das Ergebnis ist eine HTMLCollection mit möglicherweise mehreren Elementen.
let daysText = document.getElementsByClassName("weekDays");

// Jedes Element der HTMLCollection durchlaufen.
// i beginnt bei 0 und wird nach jedem Durchlauf um 1 erhöht.
// Die Schleife läuft, solange i kleiner als die Anzahl der Elemente ist.
for (let i = 0; i < daysText.length; i++) {
  // Den aktuellen Wochentag, zum Beispiel Donnerstag,
  // in jedes Element mit der Klasse "weekDays" schreiben.
  // getDay() liefert den passenden Index für das Array "days".
  daysText[i].textContent = days[today.getDay()];
}

// Den Zahlenwert des aktuellen Wochentags
// in der Konsole ausgeben.
// 0 = Sonntag, 1 = Montag, ..., 6 = Samstag.
console.log(today.getDay());

// Das HTML-Element mit der ID "month1" auswählen
// und in der Variable "monthText" speichern.
let monthText = document.getElementById("month1");

// Den Namen des aktuellen Monats in das HTML-Element schreiben.
// getMonth() liefert den passenden Index für das Array "months".
monthText.textContent = months[today.getMonth()];

// Das HTML-Element mit der ID "year1" auswählen
// und in der Variable "yearText" speichern.
let yearText = document.getElementById("year1");

// Das aktuelle Jahr in das HTML-Element schreiben.
yearText.textContent = today.getFullYear();

// Das HTML-Element mit der ID "weekDayTimes" auswählen
// und in der Variable "weekDayTimesText" speichern.
let weekDayTimesText = document.getElementById("weekDayTimes");

// Berechnen, der wievielte gleiche Wochentag des Monats heute ist.
// today.getDate() liefert den aktuellen Kalendertag.
// Der Kalendertag wird durch 7 geteilt.
// Math.ceil() rundet das Ergebnis auf die nächste ganze Zahl auf.
// -1 wird gerechnet, weil Arrays bei Index 0 beginnen.
// Der gefundene Text wird anschließend im HTML angezeigt.
weekDayTimesText.textContent = weekDayTimes[Math.ceil(today.getDate() / 7) - 1];

// Eine Variable erstellen, in der der aktuelle Tag des Jahres berechnet wird.
// Die Berechnung beginnt bei 0.
let dayOfYear = 0;

// Den aktuellen Monat als Zahl speichern.
// Januar ist 0, Februar ist 1, ..., Dezember ist 11.
let currentMonth = today.getMonth();

// Alle Monate durchlaufen, die vor dem aktuellen Monat liegen.
// Die Schleife beginnt bei Januar und endet vor dem aktuellen Monat.
for (let i = 0; i < currentMonth; i++) {
  // Die Anzahl der Tage des jeweiligen vergangenen Monats
  // zur bisherigen Summe hinzufügen.
  dayOfYear = dayOfYear + monthDays[i];
}

// Den aktuellen Kalendertag zur bisherigen Summe hinzufügen.
// Dadurch entsteht der aktuelle Tag des Jahres.
dayOfYear = dayOfYear + today.getDate();

// Das HTML-Element mit der ID "dayOfYear" auswählen
// und in der Variable "dayOfYearText" speichern.
let dayOfYearText = document.getElementById("dayOfYear");

// Den berechneten Tag des Jahres im HTML anzeigen.
dayOfYearText.textContent = dayOfYear;

// Berechnen, wie viele Tage bis zum Jahresende übrig sind.
// Dazu wird der aktuelle Tag des Jahres von 365 abgezogen.
let remainingDays = 365 - dayOfYear;

// Das HTML-Element mit der ID "remainingDays" auswählen
// und in der Variable "remainingDaysText" speichern.
let remainingDaysText = document.getElementById("remainingDays");

// Die berechnete Anzahl der verbleibenden Tage
// im HTML-Element anzeigen.
remainingDaysText.textContent = remainingDays;

// Das HTML-Element mit der ID "monthlyDays" auswählen
// und in der Variable "monthlyDaysText" speichern.
let monthlyDaysText = document.getElementById("monthlyDays");

// Mit dem aktuellen Monat als Index auf das Array "monthDays" zugreifen.
// Dadurch wird die Anzahl der Tage des aktuellen Monats
// im HTML-Element angezeigt.
monthlyDaysText.textContent = monthDays[currentMonth];

// Das HTML-Element mit der ID "holidays" auswählen
// und in der Variable "holidaysText" speichern.
let holidaysText = document.getElementById("holidays");

// Prüfen, ob das aktuelle Datum im Array "holidays" enthalten ist.
// includes() gibt true zurück, wenn das Datum gefunden wurde,
// und false, wenn es nicht gefunden wurde.
if (holidays.includes(currentDate)) {
  // Dieser Bereich wird ausgeführt, wenn das Datum gefunden wurde.
  // Den entsprechenden Text im HTML-Element anzeigen.
  holidaysText.textContent = "heute ist ein Feiertag";
} else {
  // Dieser Bereich wird ausgeführt, wenn das Datum nicht gefunden wurde.
  // Den entsprechenden Text im HTML-Element anzeigen.
  holidaysText.textContent = "Heute ist kein Feiertag";
}

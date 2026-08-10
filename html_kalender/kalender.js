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

// Array was sagt, ob der wochentag der erst,zweite,... ect. ist, worauf ich dann später im Code dann zugreife.
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
// Das HTML-Element mit der ID "month1" auswählen
// und in der Variable "monthText" speichern.
let monthText = document.getElementsByClassName("month1");
for (let i = 0; i < monthText.length; i++) {
  monthText[i].textContent = months[today.getMonth()];
}

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

monthText.textContent = months[today.getMonth()];
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
// bis hier hin ist alles für den obrigen Text

// Das HTML-Element auswählen, in das der Kalender eingefügt werden soll
let calenderContent = document.getElementById("calenderContent");

// Aus dem Array die Anzahl der Tage des aktuellen Monats holen
let numbersOfDays = monthDays[currentMonth];

// Den Wochentag des 1. Tages des Monats bestimmen
// getDay() liefert: 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
let firstWeekday = new Date(year, currentMonth, 1).getDay();

// Falls der erste Tag ein Sonntag ist (0),
// wird er auf 7 gesetzt, damit Montag = 1 und Sonntag = 7 ist
if (firstWeekday === 0) {
  firstWeekday = 7;
}

// Die erste Tabellenzeile (<tr>) für den Kalender erstellen
let row = document.createElement("tr");

// Die erste Zeile in die Tabelle einfügen
calenderContent.appendChild(row);

let previousMonth = currentMonth - 1;

if (previousMonth < 0) {
  previousMonth = 11;
}
/* hier holt er die Anzahl der Tage aus meinem erstellten Array und deklariert "daysInPreviousMonth
"damit */
let daysInPreviousMonth = monthDays[previousMonth];
/*sagt an welche stelle die Zelle des vorhereigen Monat gesehen von der ersten Zelle des aktuellen
monats beginnen soll.  */
let previousMonthCells = firstWeekday - 1;
/* hier wird gesagt an welchem Tag das angezeigte vom letzten Monat der erste 
in der Zeile sein soll.  */
let startPreviousMonth = daysInPreviousMonth - previousMonthCells + 1;
/* hier macht man eine for-Schleife um bis zum aktuellen monat die Tage des
 letzten monats anzuzeigen */
for (let i = startPreviousMonth; i <= daysInPreviousMonth; i++) {
  let previousMonthCell = document.createElement("td");

  previousMonthCell.textContent = i;
  previousMonthCell.classList.add("previousMonth");
  row.appendChild(previousMonthCell);
}
// Alle Kalendertage des Monats durchlaufen
for (let i = 1; i <= numbersOfDays; i++) {
  // Eine neue Tabellenzelle (<td>) erstellen
  let tableCell = document.createElement("td");
  if (i === today.getDate()) {
    tableCell.classList.add("heute");
    //wenn "i" bei dem heutigen Tag angekommen ist dann erzeuge eine neue Zelle
  }
  //hier sage ich, dass die Variable "cellPositon" beim ersten startet und muss um eins zurrückgezählt werden
  //da wenn ich immer um eins erweitern will, wird er immer einen tag voraus liegen,
  //deswegen müssen wir zurrück rechnen und dann i++ arbeiten lassen.
  let cellPosition = firstWeekday - 1 + i;
  //hier sagt man " wenn der Restwert 6 ist dann füge eine Zelle namens wochenende_1 hinzu "
  if (cellPosition % 7 == 6) {
    tableCell.classList.add("wochenende_1");
  }
  //hier sage ich füge jedesmal eine Zelle hinzu, wenn der Rest wert 0 ist.
  if (cellPosition % 7 == 0) {
    tableCell.classList.add("wochenende_2");
  }
  //hängt tableCell als Kind an row an. Fügt dem gewünschten Element ein anderes Element hinzu
  row.appendChild(tableCell);
  // so schreibe ich die aktuelle Tageszahl in die Zelle
  tableCell.textContent = i;
  // Wenn die Zellenposition ohne Rest durch 7 teilbar ist (Sonntag)
  // und der aktuelle Tag "i" nicht der letzte Tag des Monats ist,
  // wird eine neue Tabellenzeile erstellt.
  if (cellPosition % 7 === 0 && i !== numbersOfDays) {
    /* hier soll row eine neue Zeile erstellen */
    row = document.createElement("tr");
    /* damit füge ich meinem Kalender die zeile hinzu */
    calenderContent.appendChild(row);
  }
}

/* hier muss ich -1 rechnen damit i richtig um eins hochzählt ansonsten wäre 
Lastposition um eine platz vorgerrückt. */
let lastPosition = firstWeekday - 1 + numbersOfDays;
/* hier erstelle ich eine Variable namens "remainingCelss", man rechnet von ganz innen 
nach außen.
ich muss also erstmal die letzte position vom Kalender % 7,
Dann rechne ich 7 minus dem Ergebnis aus der inneren Klammer, das Ergebnis
sagt mir auf Welche Postion der Woche z.b "Montag" liegt. Dann rechne ich das Ergebis minus
der 7, um die Anzahl der restlichen Kästchen zu bekommen.  das letzte % 7 sagt quasi nur,
dass javascript nicht denken soll, dass wenn er z.b 7 - 0 rechnet mir dann 7 zellen gibt,
sondern dann 0.
*/
let remainingCells = (7 - (lastPosition % 7)) % 7;

/* jetzt muss ich das in einer schleife angeben, dass er solange Zellen des nächsten Monats 
erstellen soll, bis kleiner gleich "remainingCells"*/
for (let i = 1; i <= remainingCells; i++) {
  /*  hier erstelle ich eine Variable und lasse sie ein td Element erstellen */
  let nextMonthCell = document.createElement("td");
  /*  jetzt soll der aktuelle Wert von i eingefügt werden */
  nextMonthCell.textContent = i;
  /* damit bekommt "nextMonthCell" eine Klasse für CSS 
  wird gemacht, damit man nach belieben dann in der CSS datei  die Klasse bearbeiten kann */
  nextMonthCell.classList.add("nextMonth");
  /* jetzt füge ich die erstellte Zelle der Zeile hinzu. */
  row.appendChild(nextMonthCell);
}

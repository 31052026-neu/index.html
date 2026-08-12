let heute = new Date();
let tag = heute.getDate();

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let monat = monate[heute.getMonth()];

let seitenName = tag + "._" + monat;

let apiUrl =
  "https://de.wikipedia.org/w/api.php" +
  "?action=parse" +
  "&page=" +
  encodeURIComponent(seitenName) +
  "&prop=sections" +
  "&format=json" +
  "&origin=*";

fetch(apiUrl)
  .then(function (antwort) {
    return antwort.json();
  })
  .then(function (daten) {
    for (let i = 0; i < daten.parse.sections.length; i++) {
      console.log(daten.parse.sections[i].line);

      if (daten.parse.sections[i].line === "Ereignisse") {
        let ereignisIndex = daten.parse.sections[i].index;

        console.log(ereignisIndex);

        let ereignisUrl =
          "https://de.wikipedia.org/w/api.php" +
          "?action=parse" +
          "&page=" +
          encodeURIComponent(seitenName) +
          "&prop=text" +
          "&section=" +
          ereignisIndex +
          "&format=json" +
          "&origin=*";

        fetch(ereignisUrl)
          .then(function (antwort) {
            return antwort.json();
          })
          .then(function (daten) {
            let parser = new DOMParser();

            let htmlDokument = parser.parseFromString(
              daten.parse.text["*"],
              "text/html",
            );

            let ereignisse = htmlDokument.querySelectorAll("li");

            console.log(ereignisse);

            let ereignisListe = document.getElementById("ereignis");

            for (let i = 0; i < 5; i++) {
              let zufallsIndex = Math.floor(Math.random() * ereignisse.length);
              let ereignis = ereignisse[zufallsIndex];
              let neuesLi = document.createElement("li");
              neuesLi.textContent = ereignisse[i].textContent;
              ereignisListe.appendChild(neuesLi);
            }
          });
      }
    }
  });

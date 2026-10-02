// Preise und Leistungen sind ein Vorschlag – bitte prüfen und anpassen.
export const pakete: { name: string; preis: string; fuer: string; empfehlung?: boolean; leistungen: string[] }[] = [
  {
    name: "Start",
    preis: "490 €",
    fuer: "Sie brauchen eine Seite, auf der Kunden das Wichtigste finden.",
    leistungen: [
      "Eine Seite mit bis zu 5 Abschnitten",
      "Funktioniert auf Handy, Tablet und PC",
      "Kontaktformular – Anfragen landen in Ihrem Postfach",
      "Impressum und Datenschutzerklärung inklusive",
      "1 Korrekturrunde",
    ],
  },
  {
    name: "Betrieb",
    preis: "990 €",
    fuer: "Sie wollen in Ihrer Region auf Google gefunden werden.",
    empfehlung: true,
    leistungen: [
      "Bis zu 5 Unterseiten",
      "Alles aus „Start“",
      "Eintrag auf Google Maps eingerichtet",
      "Für Google vorbereitet: Seitentitel, Beschreibungen, kurze Ladezeit",
      "2 Korrekturrunden",
    ],
  },
  {
    name: "Plus",
    preis: "1.690 €",
    fuer: "Sie haben viel zu zeigen: Leistungen, Projekte, Neuigkeiten.",
    leistungen: [
      "Bis zu 10 Unterseiten",
      "Alles aus „Betrieb“",
      "Bereich für Neuigkeiten oder Fotos",
      "Wir schreiben die Texte gemeinsam",
      "3 Korrekturrunden",
    ],
  },
];

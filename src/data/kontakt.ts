// Zentrale Kontaktdaten – werden im Kontaktbereich (und später im Impressum) verwendet.
// Alles mit PLATZHALTER ersetzen. Solange noch Platzhalter drin sind, zeigt der
// Kontaktbereich im Dev-Server einen gelben Hinweis (auf der fertigen Seite nicht).

export const kontakt = {
  name: "Gabriele Sicari",
  email: "PLATZHALTER@deinedomain.at",
  // So wie die Nummer angezeigt werden soll, z. B. "+43 660 123 45 67"
  telefon: "+43 PLATZHALTER",
  // true = WhatsApp-Button mit derselben Nummer anzeigen
  whatsapp: true,
  region: "Vorarlberg",
  erreichbarkeit: "Mo–Fr, 8–18 Uhr (PLATZHALTER)",
  // Leer lassen ("") = kein Antwortversprechen anzeigen
  antwortzeit: "innerhalb von 24 Stunden (werktags)",
  // true = Hinweis „Gerne komme ich auch bei Ihnen vorbei“
  vorOrt: true,
  // Optional: Link zu Cal.com, Calendly o. Ä. – leer = kein „Termin buchen“-Button
  terminLink: "",
  // Adresse, an die das Formular sendet (z. B. https://api.web3forms.com/submit).
  // Leer = Absende-Button ist deaktiviert.
  formAction: "",
  // Zusätzliche versteckte Felder, die der Formular-Dienst braucht (z. B. { access_key: "..." })
  formFelder: {} as Record<string, string>,
};

// Nur Ziffern (mit führendem +) für tel:-Links, ohne + für wa.me
export const telefonLink = "tel:" + kontakt.telefon.replace(/[^\d+]/g, "");
export const whatsappLink = "https://wa.me/" + kontakt.telefon.replace(/\D/g, "");

export const offeneFelder = Object.entries(kontakt)
  .filter(([, wert]) => typeof wert === "string" && wert.includes("PLATZHALTER"))
  .map(([feld]) => feld)
  .concat(kontakt.formAction ? [] : ["formAction"]);

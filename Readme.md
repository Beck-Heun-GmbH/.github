<div align="center">
  <img src="assets/img/logo-claim.png" alt="Beck+Heun – Beste Werte fürs Haus" width="320">
</div>

# Website der Beck+Heun GmbH

Statische Website, versioniert in Git und über GitHub Pages veröffentlicht.
Kein Build, kein Framework, keine externen Abhängigkeiten – reines HTML, CSS und
etwas JavaScript. Jede Änderung ist ein Commit.

## Struktur

```
index.html              Startseite (alle Inhalte)
404.html                Fehlerseite
assets/css/style.css    Gestaltung, Design-Tokens am Dateianfang
assets/js/site.js       Kleinigkeiten: aktive Navigation, Jahr im Footer
assets/img/             Logo-Varianten (RGB, positiv und negativ)
.nojekyll               schaltet die Jekyll-Verarbeitung auf GitHub Pages ab
```

## Lokal ansehen

```bash
python3 -m http.server 8000
# danach http://localhost:8000 im Browser öffnen
```

Ein einfacher Doppelklick auf `index.html` funktioniert auch, der lokale Server
entspricht aber dem späteren Verhalten auf GitHub Pages.

## Veröffentlichen

*Settings → Pages → Build and deployment*: Source `Deploy from a branch`,
Branch `main`, Ordner `/ (root)`. Nach dem ersten Deployment liegt die Seite
unter `https://beck-heun-gmbh.github.io/Beck-Heun-GmbH/`.

Zwei Dinge sind dabei zu beachten:

- **Sichtbarkeit:** GitHub Pages aus einem *privaten* Repository ist nur in
  kostenpflichtigen Plänen (Pro, Team, Enterprise) verfügbar und die Seite ist
  dann nur für Mitglieder mit Zugriff erreichbar. Für eine öffentlich
  erreichbare Seite muss das Repository öffentlich sein.
- **Eigene Domain:** Für eine Adresse wie `www.beck-heun.de` oder
  `neu.beck-heun.de` eine Datei `CNAME` mit genau dieser Domain im
  Wurzelverzeichnis anlegen und den DNS-Eintrag beim Provider setzen
  (*Settings → Pages → Custom domain*).

> **Pflichtangaben:** Sobald die Seite öffentlich erreichbar ist, braucht sie
> ein Impressum und eine Datenschutzerklärung. Im Footer sind die Links
> angelegt, sie zeigen bisher auf `beck-heun.de` – bitte auf die richtigen
> Zielseiten setzen oder eigene Seiten im Repository ergänzen.

## Inhalte pflegen

Alle Texte stehen direkt in `index.html`. An den Stellen, an denen
Unternehmensangaben noch geprüft oder ergänzt werden müssen, steht im Quelltext
ein Kommentar `<!-- INHALT PRÜFEN: … -->`:

```bash
grep -n "INHALT PRÜFEN" index.html
```

Betroffen sind: der Unternehmensabsatz, die Produktkategorien, mögliche
Kennwerte bei der Energieeffizienz, die Ziel-URLs im Servicebereich, die
zentralen Kontaktdaten sowie Impressum und Datenschutz.

Produktnamen und Kennzahlen sind bewusst **nicht** eingesetzt, solange sie nicht
belegt sind – dort stehen Kategorien statt erfundener Bezeichnungen.

## Gestaltung

Die Seite folgt dem Corporate Design Manual (Stand 01/2020). Die Farbwerte
liegen als CSS-Variablen am Anfang von `assets/css/style.css`:

| Variable | Wert | Einsatz |
|---|---|---|
| `--bh-gruen` | `#BCD5BF` | Primärfarbe, große Flächen |
| `--bh-hellgruen` | `#EBF5EC` | Primärfarbe, ruhige Flächen |
| `--bh-grau` | `#394348` | Text, Piktogramme, Buttons |
| `--bh-rot` | `#CD1719` | nur Wortbildmarke |
| `--bh-blau` | `#004D9D` | nur Wortbildmarke, Fokusrahmen |

Die kantigen Flächen im Hero setzen das Designkonzept um: alle Flächen sind um
denselben Winkel geschert, ihre Kanten laufen deshalb parallel und folgen einer
gemeinsamen Fluchtrichtung.

**Hausschrift:** Die Klint Pro ist nicht als Webfont eingebunden – dafür ist
eine Webfont-Lizenz nötig. Aktuell greift ein Systemschrift-Stack mit Calibri
an erster Stelle. Sobald die Lizenz vorliegt: die `woff2`-Dateien nach
`assets/fonts/` legen und die `@font-face`-Blöcke in `style.css` aktivieren –
mehr ist nicht zu tun.

**Piktogramme:** Die Icons in den Produktkarten sind Platzhalter im Beck+Heun
Grau. Die offiziellen Piktogramme stellt das Marketing bereit.

## Technisches

- Responsiv ab 320 px, Navigation unter 900 px als Menü (funktioniert ohne JavaScript).
- Ohne JavaScript sind alle Inhalte und die Navigation vollständig nutzbar.
- Zugänglichkeit: Sprungmarke zum Inhalt, sichtbare Fokusrahmen, Textkontraste
  mindestens 6:1, `prefers-reduced-motion` wird berücksichtigt.
- Keine externen Ressourcen: keine CDNs, keine Fonts von Dritten, keine Tracker
  – dadurch entfällt auch die Cookie-Frage.
- Eine Druckversion ist in `style.css` hinterlegt.

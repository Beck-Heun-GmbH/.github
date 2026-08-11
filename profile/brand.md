<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/wortbildmarke-negativ.png">
  <img src="assets/wortbildmarke.png" alt="Beck+Heun" width="300">
</picture>

<br><br>

# Marke & Corporate Design

<sub>Kurzfassung des Corporate Design Manuals (Stand 01/2020) für digitale Anwendungen</sub>

</div>

<br>

Diese Seite ist eine Arbeitshilfe für digitale Medien. Verbindlich ist das
vollständige Corporate Design Manual – erhältlich über das Marketing.
Der Einsatz eigenmächtig veränderter oder nicht durch das Marketing
bereitgestellter Daten ist nicht zulässig.

<br>

## Logo

Das Logo kommuniziert den Absender und kennzeichnet alle Medien und Produkte
von Beck+Heun. Es gibt vier Varianten mit klar getrennten Einsatzbereichen:

| Variante | Einsatz | Mindestbreite |
|---|---|---|
| **Wortbildmarke mit Claim** | Standard für die gesamte Kommunikation | 24 mm |
| **Wortbildmarke** | wenn die Fläche für den Claim nicht ausreicht | 20 mm |
| **Bildmarke** (Fuchs) | flexibel, z. B. Arbeitskleidung, Werbeartikel | 6 mm |
| **Fuchskopf** | nur sehr kleine Flächen: Avatare, Favicons, App-Icons | 3 mm |

Jede Variante existiert farbig, einfarbig (SW) und einfarbig negativ. Die
einfarbigen Versionen kommen zum Einsatz, wenn die farbige Version z. B. aus
produktionstechnischen Gründen nicht möglich ist.

### Mindestabstände

- **Wortbildmarke:** zu allen Seiten mindestens die Höhe des „H“ aus der Wortmarke.
- **Bildmarke und Fuchskopf:** zu allen Seiten mindestens die Höhe des Fuchskopfes.
- **Sonderfall:** auf besonders kleinen Flächen (Kugelschreiber, USB-Sticks)
  darf der halbierte Mindestabstand verwendet werden.

Innerhalb dieser Abstände darf das Logo frei im Format platziert werden –
generell im Satzspiegel, bei Formaten ohne Satzspiegel gelten die Mindestabstände.

### Dateien in diesem Repository

Nur die für Web und Bildschirm benötigten RGB-Varianten liegen hier
(`profile/assets/`). Druckdaten (CMYK, HKS, RAL, EPS/TIFF) stellt das
Marketing bereit.

| Datei | Variante |
|---|---|
| `logo-claim.png` / `logo-claim-negativ.png` | Wortbildmarke mit Claim |
| `wortbildmarke.png` / `wortbildmarke-negativ.png` | Wortbildmarke |
| `bildmarke.png` / `bildmarke-negativ.png` | Bildmarke |
| `fuchskopf.png` / `fuchskopf-negativ.png` | Fuchskopf |

<br>

## Farben

Als Primärfarben dienen zwei Grüntöne. Insbesondere auf plakativen Flächen wie
Titelseiten und Bannern ist eine primäre Verwendung der Grüntöne wichtig, um die
Abgrenzung zum Wettbewerb zu sichern. Die Farbverteilung darf von Medium zu
Medium unterschiedlich ausfallen.

| Farbe | Web | RGB | CMYK | Pantone | RAL | HKS |
|---|---|---|---|---|---|---|
| Beck+Heun Grün | `#BCD5BF` | 188 \| 213 \| 191 | 27 \| 0 \| 27 \| 8 | 558 CV | 6019 | – |
| Beck+Heun Hellgrün | `#EBF5EC` | 235 \| 245 \| 236 | 10 \| 0 \| 10 \| 0 | 5595 CV | – | – |
| Beck+Heun Grau | `#394348` | 57 \| 67 \| 72 | 25 \| 0 \| 0 \| 85 | 432 | – | 93 K |
| Beck+Heun Rot | `#CD1719` | 205 \| 23 \| 25 | 15 \| 100 \| 100 \| 0 | – | 3000 | 15 K |
| Beck+Heun Blau | `#004D9D` | 0 \| 77 \| 157 | 100 \| 72 \| 0 \| 0 | – | 5005 | 42 K |
| Schwarz | `#000000` | 0 \| 0 \| 0 | 0 \| 0 \| 0 \| 100 | – | 9005 | Schwarz |

### CSS-Variablen

```css
:root {
  --bh-gruen:     #BCD5BF;
  --bh-hellgruen: #EBF5EC;
  --bh-grau:      #394348;
  --bh-rot:       #CD1719;
  --bh-blau:      #004D9D;
  --bh-schwarz:   #000000;
}
```

<br>

## Typografie

| Schrift | Einsatz | Schnitte |
|---|---|---|
| **Klint Pro** | Hausschrift, gesamte Unternehmenskommunikation | Light, Regular, Medium, Bold, Black – je auch kursiv, zusätzlich Condensed und Extended |
| **Calibri** | ausschließlich Office-Anwendungen und Korrespondenz | Regular, Bold – je auch kursiv |

Die Schriftgrößen des Manuals sind auf DIN A4 und ein Grundlinienraster von
0,5 mm bezogen (Versalhöhe in mm):

| Ebene | Schnitt | Größe | Zeilenabstand |
|---|---|---|---|
| Headline Titelseite (Versalien) | Light oder Bold | 50,022 pt (12 mm) | 51 pt |
| Headline | Regular | 41,685 pt (10 mm) | 44 pt |
| Zwischenüberschrift | Regular | 25,011 pt (6 mm) | 25 pt |
| Zwischenüberschrift klein | Regular | 16,674 pt (4 mm) | 20 pt |
| Copy-Text | Light | 12,506 pt (3 mm) | 16 pt |
| Copy-Text klein | Light | 8,337 pt (2 mm) | 10 pt |
| Rubrizierung, Marginaltext | Light | 6,253 pt (1,5 mm) | 8 pt |

Für Web-Anwendungen ohne Klint-Pro-Lizenz ist eine Ersatzschrift mit dem
Marketing abzustimmen.

<br>

## Piktogramme

Piktogramme stehen stellvertretend für Kernkompetenzen und Themenwelten.

- Ausschließlich in **Beck+Heun Grau** (`#394348`) – andere Farben sind nicht gestattet.
- Untergrund: weiß oder grün.
- Mindestbreite 14 mm, ausreichend Weißraum zu allen Seiten.
- **Kein Schmuckelement:** Piktogramme werden zweckbezogen zur Strukturierung
  eingesetzt, nicht zur Dekoration.
- Die Dateien stellt das Marketing auf Anfrage bereit.

<br>

## Designkonzept

Das Designkonzept leitet sich direkt aus der Produktwelt ab: Form und
Perspektive der Produkte ergeben – den Fluchtpunkten folgend – einen
Flächenkanon, der variabel und prägnant ist. Ziel ist ein harmonisches
Zusammenspiel von Fläche und Weißraum.

- Flächen ausschließlich in den beiden Grüntönen oder in Weiß.
- Je nach Medium alle Farben oder nur eine einzige.
- Kombination mit Bildmotiven ist möglich, aber punktuell – Bildmotive dürfen
  für sich stehen.

<br>

<div align="center">
<img src="assets/markenband.png" alt="" width="100%">
<br><br>
<sub>Rückfragen und weiterführende Informationen: Marketing / Corporate Communications, Beck+Heun GmbH</sub>
</div>

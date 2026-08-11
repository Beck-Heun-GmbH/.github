<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="profile/assets/wortbildmarke-negativ.png">
  <img src="profile/assets/wortbildmarke.png" alt="Beck+Heun" width="260">
</picture>

<br><br>

# GitHub-Profilseite der Beck+Heun GmbH

</div>

Dieses Repository enthält die öffentliche Profilseite der GitHub-Organisation
**Beck-Heun-GmbH** sowie die dafür benötigten Markendateien.

| Datei | Zweck |
|---|---|
| [`profile/README.md`](profile/README.md) | Die Profilseite – wird auf der Organisationsseite angezeigt |
| [`profile/brand.md`](profile/brand.md) | Corporate Design kompakt: Logo, Farben, Typografie, Piktogramme |
| `profile/assets/` | Logo-Varianten (RGB, positiv und negativ), Farbfelder, Markenband |

## Damit die Profilseite erscheint

GitHub zeigt eine Organisations-Profilseite nur an, wenn zwei Bedingungen erfüllt
sind. Beides muss noch eingerichtet werden:

1. **Das Repository muss `.github` heißen.**
   Aktuell heißt es `Beck-Heun-GmbH`. Ein Repository, das wie die Organisation
   heißt, wird von GitHub *nicht* als Profil-Repository erkannt – das gilt nur
   für persönliche Konten. Umbenennen unter *Settings → General → Repository name*
   auf `.github`.

2. **Das Repository muss öffentlich sein.**
   Aktuell ist es privat, damit bleibt die Profilseite unsichtbar. Umstellen
   unter *Settings → General → Danger Zone → Change repository visibility*.

Danach ist die Seite unter <https://github.com/Beck-Heun-GmbH> zu sehen.

> **Vor dem Öffentlichmachen prüfen:** Alles in diesem Repository wird damit
> dauerhaft öffentlich – auch die Historie. Enthalten sind bewusst nur die
> Web-Logos (RGB) und die Farb- und Schriftangaben aus dem Corporate Design
> Manual. Druckdaten (EPS, TIFF, CMYK/HKS/RAL) und das Manual selbst liegen
> nicht hier. Personen- und Kundendaten enthält das Repository nicht; das soll
> so bleiben.

## Noch zu ergänzen

In [`profile/README.md`](profile/README.md) stehen an drei Stellen
`TODO`-Kommentare (im gerenderten Text unsichtbar):

- die Unternehmensbeschreibung gegen die aktuelle Darstellung auf beck-heun.de abgleichen,
- die Themen-/Projekttabellen an die real geplanten Inhalte anpassen,
- ein funktionsbezogenes Kontaktpostfach eintragen, falls vorhanden.

## Organisationsprofil abrunden

Ergänzend zur Seite selbst – jeweils unter *Organization settings → Profile*:

- **Avatar:** `profile/assets/fuchskopf.png`. Der Fuchskopf ist im Corporate
  Design genau für Avatare, Favicons und App-Icons vorgesehen.
- **Description:** `Systemlösungen für den Fensteranschluss. Beste Werte fürs Haus.`
- **URL:** `https://www.beck-heun.de`
- **Location:** `Mengerskirchen, Deutschland`

## Änderungen

Die Seite ist reines Markdown mit etwas HTML für Layout und Dark-Mode-Logos
(`<picture>` mit `prefers-color-scheme`). Änderungen an `profile/README.md`
sind nach dem Merge nach `main` sofort auf der Profilseite sichtbar – ein
Vorschau-Schritt ist nicht vorgesehen, deshalb lohnt der Blick in die
Dateivorschau des Pull Requests.

Bei Fragen zur Marke: Marketing / Corporate Communications.

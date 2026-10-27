# 11 Typografie

Schrift in p5.js: Schriften wählen und laden, Text ausrichten und animieren.

Eine Einführung in Begriffe wie Baseline, Kerning und Variable Fonts findest du in der [typography-primer.md](typography-primer.md).

## Lernziele

- Du kannst Text mit `text()`, `textSize()` und `textFont()` zeichnen.
- Du kannst Text horizontal und vertikal ausrichten.
- Du kannst eigene Schriften laden.
- Du kannst Text mit Timern und Variable Fonts animieren.

## Konzepte

```javascript
textFont("Georgia");
textSize(48);
textAlign(CENTER, CENTER);   // horizontal, vertikal
text("Hallo", width / 2, height / 2);
```

### Eigene Schrift laden

```javascript
let font;

async function setup() {
  font = await loadFont("fonts/MyFont.ttf");
  textFont(font);
}
```

## Sketches

| Ordner | Inhalt |
|---|---|
| `01_Textfont` | Schrift, Grösse und Stil |
| `02_Allign` | Horizontale und vertikale Ausrichtung |
| `03_Allign Baseline` | Ausrichtung an der Baseline |
| `04_LoadFont` | Eigene Schrift laden |
| `05_Typo Load Text` | Textdatei mit `loadStrings()` laden und in Zeilen und Wörter zerlegen |
| `06_Typewriter_Animation` | Schreibmaschinen-Effekt |
| `07_Typetimer` | Schriften wechseln im Takt eines Timers (Kapitel 09) |
| `08_Typegradient` | Farbverlauf über mehrere Schriften |
| `09_Points` | `textToPoints()` macht aus der Schrift Punkte, die abwechselnd rot und weiss aufblinken |
| `10 Variable Font` | Variable Fonts: Achsen wie Gewicht per Code verändern |

## Häufige Fehler

- Eine Schrift ist nicht installiert und es greift eine Ersatzschrift, die bei anderen Geräten anders aussieht. Eigene Schriften mitliefern.
- `textAlign()` nach `text()` aufrufen, es wirkt erst für den nächsten Text.
- Schrift geladen, aber nicht mit `textFont()` aktiviert.

## Weiterführend

- [p5.js Reference: Typography](https://p5js.org/reference/)

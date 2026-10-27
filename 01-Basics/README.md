# 01 Basics

Erste Schritte mit p5.js: Leinwand, Formen, Farben und das Koordinatensystem.

## Lernziele

- Du kannst eine Leinwand erstellen und einfache Formen zeichnen.
- Du verstehst das Koordinatensystem (Ursprung oben links, y zeigt nach unten).
- Du kannst Farben und Transparenz setzen.
- Du kannst mit `push()`, `translate()`, `rotate()` und `pop()` das Koordinatensystem verschieben.

## Konzepte

### Aufbau eines Sketches

```javascript
function setup() {
  createCanvas(400, 400); // läuft einmal
}

function draw() {
  background(220); // läuft in jedem Frame
}
```

### Formen und ihre Referenzpunkte

| Funktion | Parameter | Referenzpunkt |
|---|---|---|
| `rect(x, y, w, h)` | Position, Grösse | obere linke Ecke |
| `ellipse(x, y, w, h)` | Position, Grösse | Zentrum |
| `line(x1, y1, x2, y2)` | zwei Punkte | – |
| `triangle(x1, y1, x2, y2, x3, y3)` | drei Punkte | – |
| `arc(x, y, w, h, start, stop, mode)` | wie ellipse, Winkel in Radiant | Zentrum |

### Farben

```javascript
fill(255, 0, 0, 100); // R, G, B, Alpha (0-255)
stroke(0);
strokeWeight(2);
noFill();
noStroke();
```

### Die Matrix: push, translate, rotate, pop

`translate()` und `rotate()` verändern das **Koordinatensystem**, nicht die Form. `push()` merkt sich den Zustand, `pop()` stellt ihn wieder her.

```javascript
push();
translate(200, 200);   // Ursprung wandert in die Mitte
rotate(PI / 4);        // Winkel in Radiant
rect(-50, -50, 100, 100);
pop();                 // alles wieder wie vorher
```

## Sketches

| Ordner | Inhalt |
|---|---|
| `01_1-BasicShapes` | Alle Grundformen auf einen Blick |
| `01_2-Color` | `fill`, `stroke`, Transparenz und überlappende Formen |
| `01_3-Matrix` | `push`/`pop`, `translate`, `rotate` |
| `01_4-Portrait` | Aufgabe: ein Portrait nur aus Grundformen |
| `01_5-Color-Bonus` | Bonus: `blendMode(MULTIPLY)` mit Magenta, Cyan, Gelb und Aufnahme mit p5.capture |

## Häufige Fehler

- `rect` und `ellipse` verwechseln: Der eine zeichnet ab der Ecke, der andere ab der Mitte.
- `translate()` ohne `push()`/`pop()` aufrufen. Dann summiert sich die Verschiebung in jedem Frame.
- Winkel in Grad statt in Radiant angeben. Mit `radians(90)` umrechnen oder `angleMode(DEGREES)` setzen.

## Weiterführend

- [p5.js Reference](https://p5js.org/reference/)
- [Coding Train: p5.js Tutorials](https://thecodingtrain.com/)

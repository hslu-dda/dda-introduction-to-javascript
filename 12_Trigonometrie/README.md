# 12 Trigonometrie

Sinus und Cosinus erzeugen Wellen, Kreise und Rhythmus. Mit wenig Code entstehen organische Bewegungen und Muster.

## Lernziele

- Du verstehst, dass `sin()` und `cos()` Werte zwischen -1 und 1 liefern.
- Du kannst eine Welle über Amplitude, Frequenz und Phase steuern.
- Du kannst einen Punkt auf einem Kreis bewegen (`cos` für x, `sin` für y).
- Du kannst die Werte mit `map()` in Pixel umrechnen.

## Konzepte

### Die drei Regler jeder Welle

```javascript
let y = sin(x * frequency + phase) * amplitude;
```

| Regler | Wirkung |
|---|---|
| `amplitude` | wie weit schwingt die Welle aus (Höhe) |
| `frequency` | wie viele Wellen passen in eine Strecke |
| `phase` | Verschiebung. Wenn sie mit der Zeit wächst, wandert die Welle. |

### Kreis

```javascript
let x = cx + cos(angle) * radius;
let y = cy + sin(angle) * radius;
angle += 0.03;
```

Winkel sind in **Radiant**: `TWO_PI` ist ein voller Kreis, `PI` ein halber. In `degrees()` und `radians()` umrechnen.

### Zeit als Antrieb

```javascript
let t = millis() * 0.003;   // langsamer: kleinere Zahl
```

### Werte abbilden

```javascript
let size = map(sin(t), -1, 1, 20, 150);
```

## Sketches (einfach nach komplex)

| Ordner | Inhalt |
|---|---|
| `01-Sin-Basics` | Ein Kreis schwingt mit `sin()` |
| `02-Sin-Cos-Circle` | Punkt auf dem Kreis, Hilfslinien für `cos` und `sin` |
| `03-Sine-Wave` | Eine Reihe von Punkten bildet eine fliessende Welle |
| `04-Unit-Circle-Trace` | Kreis und Welle nebeneinander: die Welle ist der y-Wert der Kreisbewegung |
| `05-Radial-Pulse` | Ring, dessen Radius pulsiert |
| `06-Lissajous` | Kurven aus zwei Frequenzen (`a`, `b`) |
| `07-Spirograph` | Ein Kreis rollt in einem Kreis und zeichnet eine Kurve |
| `08-Sine-Grid` | Raster, dessen Punkte als Wellen von der Mitte ausgehen |

## Häufige Fehler

- Grad statt Radiant: `sin(90)` ist nicht 1. Mit `radians(90)` oder `angleMode(DEGREES)`.
- Die Welle sieht zackig aus, weil die Schrittweite zu gross ist. Kleineren `spacing` nehmen.
- Wert von `sin()` direkt als Pixel benutzen: Er liegt nur zwischen -1 und 1. Mit `amplitude` multiplizieren oder `map()` nutzen.
- p5-Konstanten wie `TWO_PI` oben im Skript ausserhalb von Funktionen verwenden. Dort gibt es sie noch nicht, nimm `Math.PI * 2`.

## Weiterführend

- [Coding Train: Sine Wave](https://thecodingtrain.com/)
- [p5.js Reference: sin()](https://p5js.org/reference/p5/sin/)

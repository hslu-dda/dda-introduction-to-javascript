# 04 For-Schleifen

Eine `for`-Schleife wiederholt Code. Damit zeichnest du hundert Formen mit fünf Zeilen.

## Lernziele

- Du verstehst die drei Teile einer `for`-Schleife.
- Du kannst den Zähler `i` als Zeichenparameter benutzen (Position, Farbe, Grösse).
- Du kannst Reihen und Raster zeichnen.
- Du kannst `map()` mit dem Zähler verbinden.

## Konzepte

### Aufbau

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//   start      Bedingung   nach jedem Durchlauf
```

### Der Zähler als Parameter

```javascript
let num = 5;
let spacing = 100;
let increment = (width - 2 * spacing) / (num - 1);

for (let i = 0; i < num; i++) {
  let x = spacing + i * increment;
  ellipse(x, height / 2, 20);
}
```

### Werte abbilden mit map()

```javascript
let h = map(i, 0, num - 1, 150, 200); // i von 0..num-1 wird zu 150..200
```

### Raster

Zwei Wege: zwei verschachtelte Schleifen (siehe `05-For_10Print`), oder ein Zähler, der am Rand in die nächste Zeile springt (siehe `03-For_Rects_Raster`).

```javascript
for (let posy = 0; posy < height; posy += rectsize) {     // Zeilen
  for (let posx = 0; posx < width; posx += rectsize) {    // Kacheln in der Zeile
    rect(posx, posy, rectsize, rectsize);
  }
}
```

Die äussere Schleife läuft einmal pro Zeile, die innere für jede Kachel dieser Zeile. Mit `noLoop()` entsteht das ganze Raster in einem einzigen Frame.

## Sketches

| Ordner | Inhalt |
|---|---|
| `01-For` | Zählen und eine Reihe von Kreisen |
| `02-Emoji_forest` | Mehrere Schleifen mit Zufall zeichnen einen Wald |
| `03-For_Rects_Raster` | Raster mit Farbverlauf in HSB |
| `04-Tail` | Schweif aus Arrays: jede Position rückt eins weiter |
| `05-For_10Print` | 10 PRINT in einem Frame mit zwei verschachtelten Schleifen, Klick = neues Muster |
| `06-For_10Print_Matrix` | 10 PRINT mit `push()`, `translate()`, `rotate()`, `pop()`: jede Kachel zeichnet dieselbe Linie und wird gedreht |

## Häufige Fehler

- Endlosschleife: `i` wird nie grösser, oder die Bedingung ist immer wahr. Der Browser friert ein.
- Off-by-one: `i <= num` statt `i < num` zeichnet ein Element zu viel.
- Bei `map()` die Grenzen nicht passend zum Zähler setzen (`num - 1` statt `num`).

## Weiterführend

- [p5.js Reference: for](https://p5js.org/reference/p5/for/)

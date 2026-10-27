# 03 Conditionals

Mit `if` und `else` reagiert dein Sketch auf Situationen, zum Beispiel auf die Mausposition oder auf den Rand der Leinwand.

## Lernziele

- Du kannst mit `if`, `else if` und `else` den Programmablauf steuern.
- Du kennst Vergleichs- und logische Operatoren.
- Du kannst ein Objekt am Rand der Leinwand abprallen lassen.
- Du kannst einfache Zufallsmuster mit Bedingungen bauen.

## Konzepte

### if / else

```javascript
if (mouseX > width / 2) {
  col = color("Crimson");
} else {
  col = color("Coral");
}
```

### Operatoren

| Operator | Bedeutung |
|---|---|
| `>` `<` `>=` `<=` | grösser, kleiner |
| `===` | gleich (Wert **und** Typ) |
| `!==` | ungleich |
| `&&` | und |
| `\|\|` | oder |

### Abprallen am Rand

Die Richtung kehrt sich um, wenn der Rand erreicht ist:

```javascript
if (x > width || x < 0) {
  speedX = speedX * -1;
}
```

### Zufall mit Bedingung

```javascript
let rand = random();
if (rand > 0.5) {
  line(0, 0, size, size);
} else {
  line(0, size, size, 0);
}
```

## Sketches

| Ordner | Inhalt |
|---|---|
| `01_MousePos` | Hintergrundfarbe je nach Maus links oder rechts |
| `02_Lines` | Linien wandern über die Leinwand. Am unteren Rand springt `posY` mit einem Versatz zurück nach oben. |
| `03_Elipse`, `03_Elipse 2` | Ein Kreis wächst und schrumpft, am Rand dreht `diff` das Vorzeichen |
| `04-Mover` | Der Mover aus Kapitel 02, jetzt mit Abprallen |
| `04b-Mover Capture` | Wie 04, mit Aufnahme per p5.capture |
| `05_Rects`, `5b-rects-color` | Raster aus Rechtecken mit Zeilenumbruch am rechten Rand |
| `06_Pattern10Print` | Das klassische 10 PRINT: zufällig `/` oder `\` |
| `07_PatternClip` | Muster aus Formen mit Rotation und Clipping |

## Häufige Fehler

- `=` statt `===` im Vergleich: `=` setzt einen Wert, `===` vergleicht.
- `x > 0 && < 10` schreiben. Richtig ist `x > 0 && x < 10`.
- Abprallen: Wenn das Objekt schon ausserhalb ist und die Richtung in jedem Frame wieder umkehrt, flackert es am Rand. Setze es nach dem Umdrehen zurück an den Rand.

## Weiterführend

- [p5.js Reference: Conditions](https://p5js.org/reference/)
- [10 PRINT](https://10print.org/)

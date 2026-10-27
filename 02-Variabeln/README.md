# 02 Variablen

Mit Variablen speicherst du Werte, benennst sie und veränderst sie über die Zeit. Damit wird aus einem Bild eine Animation.

## Lernziele

- Du kannst Variablen mit `let` deklarieren, setzen und verändern.
- Du kennst die eingebauten p5-Variablen (`width`, `height`, `mouseX`, `mouseY`, `frameCount`).
- Du kannst mit `random()` Zufall einsetzen.
- Du kannst ein Objekt mit `x = x + speed` bewegen.

## Konzepte

### Deklarieren, setzen, verändern

```javascript
let x = 0;      // deklarieren und setzen
x = 50;         // neu setzen
x = x + 10;     // verändern (kurz: x += 10)
```

Eine Variable **ausserhalb** von `setup()` und `draw()` ist global und überall verfügbar.

### Eingebaute Variablen

```javascript
createCanvas(windowWidth, windowHeight);
circle(width / 2, height / 2, 50);  // Mitte
circle(mouseX, mouseY, 50);         // folgt der Maus
```

### Zufall

```javascript
random(255);        // Zahl zwischen 0 und 255
random(20, 200);    // Zahl zwischen 20 und 200
fill(random(255), random(255), random(255));
```

### Bewegung

```javascript
let x = 0;
let speedX = 5;

function draw() {
  ellipse(x, 100, 20);
  x = x + speedX;
}
```

## Sketches

| Ordner | Inhalt |
|---|---|
| `00-vars` | Variablen setzen und verrechnen |
| `01-BuildInVarsAndRandom` | `width`, `height` und `random()` |
| `02-Mouse` | Ein Kreis folgt der Maus mit `mouseX` und `mouseY` |
| `03_Vars_Pollock` | Malen mit der Maus: `map()` rechnet die Mausposition in Farbwerte um |
| `04-Mover` | Ein Kreis bewegt sich mit `speedX` und `speedY`. Er verlässt noch den Screen: Das lösen wir mit Conditionals. |

## Häufige Fehler

- `let` bei jedem Frame innerhalb von `draw()` neu schreiben. Dann beginnt der Wert immer wieder von vorne.
- Eine Variable benutzen, bevor sie deklariert wurde.
- `random()` in `setup()` und `draw()` verwechseln: In `setup()` wird nur einmal gewürfelt.

## Weiterführend

- [p5.js Reference: Variablen](https://p5js.org/reference/)

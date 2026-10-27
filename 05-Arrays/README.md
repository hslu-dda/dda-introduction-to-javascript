# 05 Arrays

Ein Array ist eine geordnete Liste von Werten. Arrays sind die Grundlage, um viele Daten zu zeichnen.

## Lernziele

- Du kannst Arrays erstellen, auslesen und verändern.
- Du kannst Elemente suchen und sortieren.
- Du kannst Arrays mit `forEach`, `map`, `filter` und `reduce` bearbeiten.
- Du kannst ein Array von Zahlen in ein Diagramm übersetzen.

## Konzepte

### Basics

```javascript
let rappers = ["Kendrick", "Stormzy", "Nas"];

rappers[0];                // "Kendrick" (Index beginnt bei 0)
rappers.length;            // 3
rappers.push("Eminem");    // am Ende hinzufügen
rappers.pop();             // am Ende entfernen
rappers.unshift("Jay-Z");  // am Anfang hinzufügen
rappers.shift();           // am Anfang entfernen
rappers.splice(1, 1);      // an Position 1 ein Element entfernen
```

### Suchen und sortieren

```javascript
rappers.indexOf("Nas");    // Position, oder -1 wenn nicht vorhanden
rappers.includes("Nas");   // true / false
rappers.sort();            // verändert das Original!
rappers.toSorted();        // sortierte Kopie
```

### Die Array-Funktionen

| Funktion | Ergebnis |
|---|---|
| `forEach(fn)` | führt `fn` für jedes Element aus |
| `map(fn)` | neues Array mit umgerechneten Werten |
| `filter(fn)` | neues Array nur mit passenden Elementen |
| `find(fn)` | erstes passendes Element, sonst `undefined` |
| `reduce(fn, start)` | ein einzelner Wert (z.B. Summe, Maximum) |

```javascript
let temps = [12, 18, 25, 31];
let warm = temps.filter(t => t > 20);        // [25, 31]
let doubled = temps.map(t => t * 2);         // [24, 36, 50, 62]
let sum = temps.reduce((a, b) => a + b, 0);  // 86
```

### Array und Grafik

`map(wert, min, max, a, b)` rechnet Datenwerte in Pixel um. Die y-Achse ist umgedreht: grosse Werte brauchen kleine y-Pixel.

## Sketches

| Ordner | Inhalt |
|---|---|
| `05_1-Array-Basics` | `push`, `pop`, `splice`, `length` mit einem Array von Rappern |
| `05_2-Array-Advanced` | `indexOf`, `includes`, `sort`, `reverse` |
| `05_3-Example-Linegraph` | Zwei Arrays als Liniendiagramm |
| `05_4-Array-Functions` | `map`, `filter`, `find`, `reduce` an Temperaturen, visualisiert in Balken |
| `05_5-Array-Fonts` | Array von Schriften, Tastendrücke verändern es |
| `05_6-Array-Colors` | Array von Farbnamen als Farbfelder, mit `startsWith` filtern |

## Häufige Fehler

- Index ausserhalb des Arrays: `arr[arr.length]` ist `undefined`, das letzte Element ist `arr[arr.length - 1]`.
- `sort()` auf Zahlen ohne Vergleichsfunktion sortiert als Text (10 kommt vor 9). Nutze `sort((a, b) => a - b)`.
- Vergessen, dass `sort()`, `reverse()` und `splice()` das Original verändern, `map()` und `filter()` aber nicht.

## Weiterführend

- [MDN: Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)

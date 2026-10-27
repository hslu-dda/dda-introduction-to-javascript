# 08 Daten laden

Bis jetzt standen die Daten im Code. Jetzt laden wir sie aus Dateien (CSV, JSON) und aus dem Internet (API).

## Lernziele

- Du kannst CSV, JSON und eine API laden.
- Du verstehst `async` / `await`.
- Du kennst den Unterschied zwischen CSV und JSON in der Konsole.
- Du kannst geladene Daten zeichnen.

## Warum d3?

Wir laden die Daten mit d3 (`d3.csv()`, `d3.json()`), obwohl p5 auch Dateien laden kann. Zwei Gründe:

1. **Schöne Datenstruktur, schöner Zugriff.** `d3.csv()` liefert ein normales JavaScript-Array von Objekten, wie in Kapitel 06. Du schreibst `d.tmax`, `data.map(...)`, `data.filter(...)` und kannst alles bisher Gelernte direkt anwenden. Die p5-Tabelle (`loadTable()`) liefert dagegen ein eigenes Table-Objekt, auf das du mit `getRow()`, `getString()` oder `getColumn()` zugreifen musst. Das ist umständlicher und passt nicht zu den Array-Funktionen.
2. **Es bleibt nützlich.** d3 ist auch nach p5 ein Werkzeug fürs **Data Wrangling**: gruppieren (`d3.group`), zusammenfassen (`d3.rollup`, `d3.mean`, `d3.sum`), Wertebereiche finden (`d3.extent`), sortieren. In den nächsten Kapiteln (Scales, Geo, Scrollytelling) arbeiten wir weiter mit d3, auch wenn wir nicht mehr mit p5 zeichnen.

```javascript
// p5-Tabelle
let table = await loadTable("data.csv", "csv", "header");
let temp = table.getRow(0).getNum("tmax");

// d3: ein Array von Objekten
let data = await d3.csv("data.csv", d3.autoType);
let temp = data[0].tmax;
let warm = data.filter(d => d.tmax > 30);
```

d3 wird mit einem Script-Tag in der `index.html` eingebunden:

```html
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
```

## Konzepte

### async / await

Das Laden dauert. `await` wartet, bis die Datei da ist, und erst dann geht es weiter. Dafür muss die Funktion `async` sein. p5 wartet, bis `setup()` fertig ist, bevor `draw()` startet.

```javascript
let data;

async function setup() {
  createCanvas(800, 400);
  data = await d3.csv("./data/daten-denkmal.csv");
  createViz();
}
```

p5 2.0 hat kein `preload()` mehr, `async` / `await` ersetzt es.

### CSV oder JSON

| | CSV | JSON |
|---|---|---|
| Aufbau | Tabelle, eine Zeile pro Eintrag | verschachtelte Objekte und Arrays |
| Zahlen | **immer Text**, ausser du übergibst `d3.autoType` | Zahlen bleiben Zahlen |
| Laden | `d3.csv(url)` | `d3.json(url)` |

Bei CSV ist `"12"` ein String. Mit `d3.csv(url, d3.autoType)` werden Zahlen und Daten automatisch umgewandelt.

### Immer zuerst die Konsole

`console.log(data)` zeigt, wie die Daten aussehen. Erst wenn du die Struktur kennst, schreibst du den Zeichencode.

### Eine API laden

Eine API liefert JSON von einer URL. Sie kann sich ändern oder ausfallen, daher lieber eine Kopie der Daten speichern, wenn das Projekt abgegeben wird. Viele freie APIs: [freepublicapis.com](https://www.freepublicapis.com/).

## Sketches

| Ordner | Inhalt |
|---|---|
| `08_1_Loading-CSV` | CSV mit `d3.csv()` laden und in der Konsole ansehen |
| `08_2_Loading-JSON` | JSON laden, hier mit p5 `loadJSON()` |
| `08_3_Loading-async-await` | CSV und JSON zusammen laden, `async` / `await` erklärt |
| `08_4_Loading-API` | Daten von einer API laden |
| `08_5_Example-Viz` | Wetterdaten als Punkte: Position und Farbe aus `tmax` mit `map()` und `lerpColor()` |

## Häufige Fehler

- `async` bei `setup()` oder `await` vor dem Laden vergessen. Dann ist `data` leer oder `undefined`.
- Falscher Pfad. Die Konsole zeigt einen 404-Fehler. Öffne die Seite über einen lokalen Server (z.B. Live Server), nicht per Doppelklick.
- Zahlen aus CSV als Text verwenden: `"10" + "5"` ergibt `"105"`. Nutze `d3.autoType`.
- Kein Script-Tag für d3 in der `index.html`: `d3 is not defined`.

## Weiterführend

- [d3-fetch (csv, json)](https://d3js.org/d3-fetch)
- [d3-array (group, rollup, extent, mean)](https://d3js.org/d3-array)
- [MDN: async function](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/async_function)

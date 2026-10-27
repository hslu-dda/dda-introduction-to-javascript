# 07 Functions

Eine Funktion gibt einem Stück Code einen Namen. Du schreibst es einmal und rufst es beliebig oft auf.

## Lernziele

- Du kannst Funktionen definieren und aufrufen.
- Du kannst Parameter übergeben und Werte mit `return` zurückgeben.
- Du kannst wiederkehrenden Zeichencode in eine eigene Funktion auslagern.
- Du kannst dieselbe Funktion mit verschiedenen Daten wiederverwenden (Small Multiples).

## Konzepte

### Definieren und aufrufen

```javascript
function sayHello() {
  console.log("hello");
}

sayHello();
```

### Parameter

```javascript
function agePerson(name, age) {
  console.log(name + " ist " + age);
}

agePerson("Mia", 24);
```

### Rückgabewert

```javascript
function double(n) {
  return n * 2;
}

let result = double(4); // 8
```

### Eine Zeichen-Funktion

```javascript
// values: Zahlen, label: Titel
// x, y: obere linke Ecke, w, h: Grösse, col: Farbe
function drawChart(values, label, x, y, w, h, col) {
  // ...
}

drawChart(dataA, "A", 10, 10, 200, 100, "red");
drawChart(dataB, "B", 230, 10, 200, 100, "blue");
```

## Sketches

| Ordner | Inhalt |
|---|---|
| `07_1-Functions-Basics` | Definieren, Parameter, Rückgabewerte |
| `07_2-Functions-Example` | `drawGras()` und `drawFlower()`, jeweils in einer Schleife aufgerufen |
| `07_3-Scatterplot-Example` | Der Scatterplot aus Kapitel 06, aufgeteilt in Funktionen |
| `07_4-Small-Multiples` | Eine Funktion `drawChart()`, mehrfach aufgerufen mit verschiedenen Daten |

## Häufige Fehler

- Funktion definieren, aber nie aufrufen. Ohne `()` passiert nichts.
- `return` vergessen und dann `undefined` bekommen.
- Nach einem `return` steht noch Code in der Funktion. Der wird nie ausgeführt.
- Eine Funktion nutzt eine globale Variable und ändert sie versehentlich. Parameter machen sie unabhängig.

## Weiterführend

- [MDN: Functions](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Functions)

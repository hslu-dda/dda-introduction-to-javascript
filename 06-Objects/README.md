# 06 Objects

Ein Objekt bündelt zusammengehörige Werte unter Namen. Ein Array von Objekten ist die Form, in der Daten fast immer vorliegen.

## Lernziele

- Du kannst Objekte erstellen und auf Eigenschaften zugreifen.
- Du kannst Objekte in Arrays speichern und durchlaufen.
- Du kannst Daten mit `map`, `filter` und `sort` bearbeiten.
- Du kannst einen Array von Objekten als Scatterplot zeichnen.

## Konzepte

### Objekt

```javascript
let akira = {
  title: "Akira",
  author: "Katsuhiro Otomo",
  "isbn-10": 3551745218,       // Namen mit Bindestrich brauchen Anführungszeichen
  genre: ["Sci-Fi", "Manga"],  // Eigenschaften können Arrays sein
  year: 1982,
};

akira.title;          // Punkt-Notation
akira["isbn-10"];     // Klammer-Notation
akira.genre[1];       // "Manga"
akira.pages = 360;    // neue Eigenschaft hinzufügen
```

### Array von Objekten

```javascript
let mangas = [
  { title: "Akira", year: 1982, pages: 360 },
  { title: "Berserk", year: 1989, pages: 480 },
];

mangas.forEach(d => console.log(d.title));
```

Der Name `d` für ein Datenelement ist üblich.

### Daten bearbeiten

```javascript
let titles = mangas.map(d => d.title);
let old = mangas.filter(d => d.year < 2000);
mangas.sort((a, b) => a.pages - b.pages);
```

### Objekte zeichnen

Jede Eigenschaft wird auf eine visuelle Eigenschaft abgebildet: `time` auf x, `sales` auf y. Die Grenzen findest du mit `min()` und `max()`.

## Sketches

| Ordner | Inhalt |
|---|---|
| `06_1-Object-Basics` | Ein Objekt (Akira): Zugriff, Ändern, Genres mit `forEach` |
| `06_2-Array-of-Objects` | Array `mangas` (u.a. Cowboy Bebop, Blame!, Battle Angel Alita, Ghost in the Shell), `map`, `filter`, `sort`, Summe der Seiten |
| `06_3-Example-Scatterplot` | Scatterplot: Erscheinungsjahr gegen Verkäufe. Die Verkäufe der letzten vier Titel sind erfunden. |

## Hinweis zu den Daten

ISBN und Seitenzahlen gehören zu einer bestimmten Ausgabe und sind nicht untereinander vergleichbar. Die Verkaufszahlen bei Ghost in the Shell, Battle Angel Alita, Blame! und Cowboy Bebop sind nur zur Demonstration ausgedacht.

## Häufige Fehler

- `d.isbn-10` schreiben. Das rechnet `d.isbn` minus 10. Richtig ist `d["isbn-10"]`.
- Bei `filter()` einen Wert statt `true`/`false` zurückgeben, oder bei `map()` das `return` vergessen.
- `sort()` verändert das Original.

## Weiterführend

- [MDN: Working with objects](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Working_with_objects)

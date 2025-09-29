// For alle Array Methods visit: https://www.w3schools.com/js/js_object_definition.asp

/*
PART I: BASICS
-----------------------------------------------------------------*/
let akira = {
    "title": "Akira",
    "author": "Katsuhiro Otomo",
    "isbn-10": 3551745218,
    "genre": ["Sci-Fi", "Manga", "Distopian"]
};

// gesammtes objekt loggen
console.log(akira);

// nur title loggen
console.log(akira.title);

// ÜBUNG: Logge "Author" und die Genres
console.log(akira.author);
console.log(akira.genre);

// "key" schreibweise: log 'isbn-10'
console.log(akira["isbn-10"]);

// Key/Value Pair zu einem Objekt hinzufügen
akira.band = 1;
console.log(akira)

// Value über Key verändern
akira.band = 2;
console.log(akira)

// Value in eine variable speichern
let authorOfAkira = akira.author;
console.log(authorOfAkira);

// Key/Value Pair löschen
delete akira.band;
console.log(akira)

// ÜBUNG: Gib "Manga" aus den genres aus (Array)
console.log(akira.genre[1])

// ÜBUNG: Nutze den forEach loop um alle Genres auszugeben
akira.genre.forEach(d => {
    console.log(d)
});

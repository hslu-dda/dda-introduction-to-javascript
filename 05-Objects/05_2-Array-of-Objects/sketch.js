// For alle Array Methods visit: https://www.w3schools.com/js/js_object_definition.asp

/*
PART II: Array of Objects
-----------------------------------------------------------------*/
let mangas = [
    {
        title: "Akira",
        author: "Katsuhiro Otomo",
        "isbn-10": 3551745218,
        genre: ["Sci-Fi", "Manga", "Distopian"],
        year: 1982,
    },
    {
        title: "Berserk",
        author: "Kentaro Miura",
        "isbn-10": "386607171X",
        genre: ["Dark Fantasy", "Epic", "Sword and Sorcery"],
        year: 1989,
    },
    {
        title: "Gipfel der Götter",
        author: "Jiro Taniguchi",
        "isbn-10": "393710271X",
        genre: ["Alpinism", "Adventure"],
        year: 2000,
    },
];

// Ausgeben
console.log(mangas);
console.log("First Manga", mangas[0]);

// ÜBUNG: Alle Objekte mit forEach ausgeben
mangas.forEach(element => {
    console.log(element)
});
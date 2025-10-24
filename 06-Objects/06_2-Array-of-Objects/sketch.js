/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
*/

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
        pages: 360
    },
    {
        title: "Berserk",
        author: "Kentaro Miura",
        "isbn-10": "386607171X",
        genre: ["Dark Fantasy", "Epic", "Sword and Sorcery"],
        year: 1989,
        pages: 480
    },
    {
        title: "Gipfel der Götter",
        author: "Jiro Taniguchi",
        "isbn-10": "393710271X",
        genre: ["Alpinism", "Adventure"],
        year: 2000,
        pages: 328
    },
];

// Ausgeben
console.log(mangas);
console.log("First Manga", mangas[0]);

// ÜBUNG: Alle Objekte mit for-loop ausgeben
for (let i = 0; i < mangas.length; i++) {
    const d = mangas[i];
    console.log(d)
    
}

// ÜBUNG: Alle Objekte mit forEach ausgeben
mangas.forEach(d => {
    console.log(d)
});

// ÜBUNG: Alle Manga Authoren mit forEach ausgeben
mangas.forEach(d => {
    console.log(d.author)
});


/*
PART III: Data Manipulations
-----------------------------------------------------------------*/
// map() creates a new array from calling a function for every array element.
// 'd' is a often used variable name for a data item of an object
let manga_titles = mangas.map(d => d.title)
console.log(manga_titles)

// Get all years as strings
let str_years = mangas.map((d) => String(d.year))
console.log(str_years)

// Get all historic mangas, this returns a new array
let historic_mangas = mangas.filter(d => {
    if(d.year < 2000){
        return d;
    }
})
console.log("historic mangas", historic_mangas)

// Sort by a numeric property
// sort expects a number as return: -1 if a comes first, 1 if b comes first, 0 if they are the same
mangas.sort((a, b) => a.pages - b.pages)
console.log(mangas)

// ÜBUNG: Count the total of all pages of the manges
let sum = 0;
mangas.forEach(d => {
    sum += d.pages;
})
console.log("Total pages", sum)
/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
For alle Array Methods visit: https://www.w3schools.com/js/js_array_methods.asp
*/

/*
PART I: BASICS
-----------------------------------------------------------------*/
let rappers = ["Denzel Curry", "Prodigy", "J. Cole", "Larry June", "Glorilla", "Lil Sims", "Wiley", "Stormzy", "JME", "Skepta"];

// array ausgeben
console.log(rappers);

// auf einzelne element zugreifen
console.log(rappers[3]);

// einzelne element in variable speichern
larry = rappers[3];
skepta = rappers[rappers.length - 1];

console.log(larry, skepta);

// elemente am ende hinzufügen
rappers.push("Pusha T");
console.log(rappers);

// ÜBUNG: FÜGE EINEN RAPPER DEINER WAHL HINZU

// elemente am ende entfernen
rappers.push("Taylor Swift");
console.log("oh no", rappers);

rappers.pop();
console.log(rappers);

// länge des arrays herausfinden
console.log("length:", rappers.length);

// elemente an einer bestimmten position hinzufügen
// position, how many deleted, elements to add
rappers.splice(2, 0, "Havoc");
console.log(rappers);

// element an einer bestimmten position entfernen
// remove stormzy
rappers.splice(8, 1);
console.log(rappers);

// ÜBUNG: ENTFERNE EINEN RAPPER DEN DU NICHT MAGST

// get a subset of the array
// start is included, end not
grime_mcs = rappers.slice(6, 10);
console.log(grime_mcs);

// combine two arrays
more_grime_mcs = ["Jammer", "AJ Tracey", "Giggs", "D Double E"];
combined_array = grime_mcs.concat(more_grime_mcs);
console.log(combined_array);

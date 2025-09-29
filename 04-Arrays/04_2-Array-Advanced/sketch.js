// For alle Array Methods visit: https://www.w3schools.com/js/js_array_methods.asp

// array definieren
rappers = ["Denzel Curry", "Prodigy", "J. Cole", "Larry June", "Glorilla", "Lil Sims", "Wiley", "Stormzy", "JME", "Skepta"];

/*
PART II: SEARCHING ARRAYS
-----------------------------------------------------------------*/

// searches for a value and returns the index position
lil_sims = rappers.indexOf("Lil Sims");
console.log(lil_sims, rappers[lil_sims]);

// check if an element is in the array
check_glorilla = rappers.includes("Glorilla");
console.log(check_glorilla);

check_cardiB = rappers.includes("Cardi B");

// ÜBUNG: Schreibe ein If Statement welches "Cardi B" zum Array "rappers" hinzufügt wenn sie nicht im Array vorhanden ist. 


/*
PART III: SORTING ARRAYS
-----------------------------------------------------------------*/

// sort
rappers.sort();
console.log(rappers);

// reverse
rappers.reverse()
console.log(rappers)

// create a sorted copy (don't change the original array)
// same with toReversed()
sorted = rappers.toSorted()
console.log(sorted, rappers)

/*
PART III: ITERATION
-----------------------------------------------------------------*/

// basic for-loop way
for (let i = 0; i < rappers.length; i++) {
  const rapper = rappers[i];
  console.log(rapper)
}

// for each
rappers.forEach(rapper => {
  console.log(rapper)
});

// with the index
rappers.forEach((rapper, i) => {
  console.log(rapper, i)
})

/*
PART III: FILTERING
-----------------------------------------------------------------*/

// The filter() method creates a new array filled with elements that pass a test provided by a function.
a_rappers = rappers.filter(rapper => {
  if (rapper.includes('a')){
    return rapper;
  }
})
console.log(a_rappers)

// The find() method returns the value of the first element that passes a test.
let fav = rappers.find(rapper => {
  return rapper == 'Prodigy'
})
console.log(fav)
/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
Array functions with color names. p5 knows all CSS color names like "Crimson" or "SkyBlue".
See: https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
and: https://www.w3schools.com/colors/colors_names.asp
For all Array Methods visit: https://www.w3schools.com/js/js_array_methods.asp
*/

let colors = ["Crimson", "Coral", "Gold", "Teal", "SlateBlue", "SkyBlue", "Salmon", "RoyalBlue", "Orchid", "Tomato", "DodgerBlue", "SeaGreen"];

// size of the swatches
let swatchW = 70;
let swatchH = 70;
let gap = 5;

function setup() {
    createCanvas(1000, 640);
    background(255);
    noStroke();
    textSize(9);
    textAlign(CENTER, TOP);

    /*
    PART I: SEARCHING ARRAYS
    -----------------------------------------------------------------*/
    // returns the index position of a value (-1 if it is not in the array)
    let tealIndex = colors.indexOf("Teal");
    console.log(tealIndex, colors[tealIndex]);

    // check if a color is in the array
    console.log(colors.includes("Gold"));
    console.log(colors.includes("HotPink"));

    // add a color only if it is not in the array yet
    if (!colors.includes("HotPink")) {
        colors.push("HotPink");
    }
    console.log(colors);

    // ÜBUNG: Add "Black" in the same way, but at the beginning of the array. Use unshift()

    /*
    PART II: DRAWING THE ARRAY
    -----------------------------------------------------------------*/
    fill(0);
    textAlign(LEFT, TOP);
    text("original", 20, 15);
    textAlign(CENTER, TOP);
    for (let i = 0; i < colors.length; i++) {
        // every color gets its own x position
        let x = 20 + i * (swatchW + gap);
        fill(colors[i]);
        rect(x, 30, swatchW, swatchH);
        fill(0);
        text(colors[i], x + swatchW / 2, 30 + swatchH + 4);
    }

    /*
    PART III: SORTING ARRAYS
    -----------------------------------------------------------------*/
    // sort alphabetically, toSorted() creates a sorted copy and keeps the original array
    let sortedColors = colors.toSorted();
    console.log(sortedColors, colors);

    fill(0);
    textAlign(LEFT, TOP);
    text("sorted alphabetically", 20, 135);
    textAlign(CENTER, TOP);
    sortedColors.forEach((c, i) => {
        let x = 20 + i * (swatchW + gap);
        fill(c);
        rect(x, 150, swatchW, swatchH);
        fill(0);
        text(c, x + swatchW / 2, 150 + swatchH + 4);
    });

    // sort by the length of the name
    // sort expects a number as return: negative if a comes first, positive if b comes first
    let byLength = colors.toSorted((a, b) => a.length - b.length);
    console.log(byLength);

    fill(0);
    textAlign(LEFT, TOP);
    text("sorted by length of the name", 20, 255);
    textAlign(CENTER, TOP);
    byLength.forEach((c, i) => {
        let x = 20 + i * (swatchW + gap);
        fill(c);
        rect(x, 270, swatchW, swatchH);
        fill(0);
        text(c, x + swatchW / 2, 270 + swatchH + 4);
    });

    /*
    PART IV: FILTERING
    -----------------------------------------------------------------*/
    // The filter() method creates a new array with all elements that pass the test
    let blues = colors.filter((c) => c.includes("Blue"));
    console.log(blues);

    fill(0);
    textAlign(LEFT, TOP);
    text("filter: all colors with 'Blue' in the name", 20, 375);
    textAlign(CENTER, TOP);
    blues.forEach((c, i) => {
        let x = 20 + i * (swatchW + gap);
        fill(c);
        rect(x, 390, swatchW, swatchH);
        fill(0);
        text(c, x + swatchW / 2, 390 + swatchH + 4);
    });

    // ÜBUNG: Filter all colors that start with an "S". Use startsWith()

    /*
    PART V: FINDING
    -----------------------------------------------------------------*/
    // The find() method returns the first element that passes the test (only one!)
    let firstShort = colors.find((c) => c.length < 5);
    console.log(firstShort);

    fill(0);
    textAlign(LEFT, TOP);
    text("find: first color with less than 5 letters", 20, 495);
    textAlign(CENTER, TOP);
    fill(firstShort);
    rect(20, 510, swatchW * 2, swatchH * 1.5);
    fill(0);
    text(firstShort, 20 + swatchW, 510 + swatchH * 1.5 + 4);

    // ÜBUNG: Find the first color that has the letter "z" in the name. What happens if there is none?
}

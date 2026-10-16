/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
Array basics with fonts. Press the keys to change the array:
C = add Comic Sans, P = add Papyrus, BACKSPACE = remove the last one, S = sort
-----------------------------------------------------------------*/

// popular fonts of the Swiss Style (International Typographic Style)
let fonts = ["Helvetica", "Helvetica Neue", "Univers", "Akzidenz-Grotesk", "Frutiger", "Avenir"];

// print the array
console.log(fonts);

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255);
    fill(0);
    textAlign(LEFT, BASELINE);

    // draw every font name in its own font
    // fonts that are not installed on your computer (e.g. Univers) are replaced by "sans-serif"
    textSize(44);
    for (let i = 0; i < fonts.length; i++) {
        textFont(fonts[i] + ", sans-serif");
        text(fonts[i], 40, 80 + i * 56);
    }

    // info text
    textFont("Menlo");
    textSize(12);
    fill(150);
    text("length: " + fonts.length, 40, 540);
    text("C = add Comic Sans, P = add Papyrus, BACKSPACE = remove last, S = sort", 40, 560);
}

function keyPressed() {
    // add elements at the end
    // includes() checks if the element is already in the array, so we don't add it twice
    if (key === "c" && !fonts.includes("Comic Sans MS")) {
        fonts.push("Comic Sans MS");
        console.log("oh no", fonts);
    }

    if (key === "p" && !fonts.includes("Papyrus")) {
        fonts.push("Papyrus");
        console.log("even worse", fonts);
    }

    // remove the last element
    if (key === "Backspace") {
        let removed = fonts.pop();
        console.log("removed", removed, fonts);
    }

    // sort alphabetically
    if (key === "s") {
        fonts.sort();
        console.log("sorted", fonts);
    }

    // ÜBUNG: Add "Impact" with the key "i"
    // ÜBUNG: Remove the first font (Helvetica) with the key "h", use shift()
    // ÜBUNG: Use indexOf() to find the position of "Frutiger" and log it
}

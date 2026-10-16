/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
*/

// global variable to store the loaded data
let data;

// use async in front of setup, p5 waits until setup is finished before draw starts
async function setup() {
    createCanvas(800, 400);

    // use await to wait until the file is loaded
    data = await d3.csv("./data/daten-denkmal.csv");

    // QUIZ: Welches Datenformat zeigt die Konsole an?
    console.log(data);

    // call a custom function
    createViz();
}

// you don't need a draw loop here, just use a function to draw
function createViz(){
    console.log("data in custom function available", data)
}

/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
*/

// global variable to store the loaded data
let data;

// use async in front of setup
async function setup() {
    createCanvas(800, 400);

    // p5 can load JSON as well, use await to wait for the file
    data = await loadJSON("./data/daten-denkmal.json");
    console.log(data);
}

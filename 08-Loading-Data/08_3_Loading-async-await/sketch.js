/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
p5js 2.0 does not have preload() anymore, you need to work with async/await
See here: https://beta.p5js.org/reference/p5/async_await/
*/

let data1;
let data2;

// use async in front of setup
async function setup() {
    createCanvas(800, 400);

    // use await instead of .then
    data1 = await d3.csv("./data/daten-denkmal.csv");
    data2 = await d3.json("./data/daten-denkmal.json");

    console.log(data1, data2);
}

function draw() {
    // draw() starts after setup() is done, so the data is available
    console.log(data1.length, data2.length);
}

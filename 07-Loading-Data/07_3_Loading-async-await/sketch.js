// with the new relase of p5js 2.0 you need to work with async/await
// See here: https://beta.p5js.org/reference/p5/async_await/

let data1;
let data2;

// use async in front of setup
async function setup() {
  createCanvas(800, 400);

  // use await instead of .then
  data1 = await d3.csv("./data/daten-denkmal.csv");
  data2 = await d3.json("./data/daten-denkmal.json")

  console.log(data1, data2)

}

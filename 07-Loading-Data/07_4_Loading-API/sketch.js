// with the new relase of p5js 2.0 you need to work with async/await
// See here: https://beta.p5js.org/reference/p5/async_await/

let data;

// use async in front of setup
async function setup() {
  createCanvas(800, 400);

  data = await d3.json("https://api.attackontitanapi.com/characters")

  console.log(data)
}

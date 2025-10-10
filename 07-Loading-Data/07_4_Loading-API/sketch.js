/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
For more APIs to play with see here: https://www.freepublicapis.com/
*/

let data;

// use async in front of setup
async function setup() {
  createCanvas(800, 400);

  data = await d3.json("https://api.attackontitanapi.com/characters")

  console.log(data)
}

// 07 slider trees reserve 
let trees;
let currentYear;
let startYear;
let endYear;

let slider;

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(500000)

async function setup() {
  trees = await loadJSON("trees.json");

  createCanvas(900, 650);

  // filter out trees with no PFLANZJAHR
  trees.features = trees.features.filter(function (d) {
    return d.properties.PFLANZJAHR != null;
  });

  startYear = d3.min(trees.features, function (d) {
    return d.properties.PFLANZJAHR;
  });

  endYear = d3.max(trees.features, function (d) {
    return d.properties.PFLANZJAHR;
  });

  console.log("startYear", startYear);

  currentYear = startYear;

  slider = createSlider(startYear, endYear);
  slider.position(width - 250, 35);
  slider.size(200);
  slider.input(updateCurrentYear);

  noLoop();
}

function draw() {
  background(0);

  // draw the text labels
  for (let i = 0; i < trees.features.length; i++) {
    let tree = trees.features[i];

    if (tree.properties.PFLANZJAHR < currentYear) {
      let coords = tree.geometry.coordinates;
      let lat = coords[1];
      let lon = coords[0];

      // calculate the x and y position of the tree using projection
      let pos = projection([lon, lat]);
      let x = pos[0];
      let y = pos[1];

      let age = currentYear - tree.properties.PFLANZJAHR;

      let r = age * 1.3;

      stroke(255);
      strokeWeight(15)
      noFill();
      ellipse(x, y, r, r);
    }
  }

  for (let i = 0; i < trees.features.length; i++) {
    let tree = trees.features[i];

    if (tree.properties.PFLANZJAHR < currentYear) {
      let coords = tree.geometry.coordinates;
      let lat = coords[1];
      let lon = coords[0];

      let pos = projection([lon, lat]);
      let x = pos[0];
      let y = pos[1];

      let age = currentYear - tree.properties.PFLANZJAHR;

      let r = age * 1.3;

      fill("lime");
      noStroke();
      ellipse(x, y, r, r);
    }
  }

  // draw the year
  noStroke();
  fill(255);
  textSize(20);
  text(floor(currentYear), 50, 50);


}

function updateCurrentYear() {
  currentYear = slider.value();
  redraw();
}

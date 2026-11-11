let geodata = [];
let projection = d3
  .geoMercator()
  .center([8.227, 46.8181])
  .translate([400, 300])
  .scale(100);

// let projection = d3.geoStereographic()
//   .center([0,0])
//   .rotate([0,0])
//   .translate([400, 300])
//   .scale(100);

let img;
let issdata;

async function setup() {
  createCanvas(800, 600);

  geodata = await loadJSON("world.geojson");
  issdata = await loadJSON("https://api.wheretheiss.at/v1/satellites/25544");

  console.log(issdata);

  setInterval(fetchIssData, 1000);

  noLoop();
}

function draw() {
  background(250);


  let lat = issdata.latitude;
  let lon = issdata.longitude;
  console.log(lat, lon);


  projection.center([0, 0]);

  // draw the countries
  drawCountries(geodata.features);


  // draw the iss
  let xy = projection([lon, lat]); // [x,y]
  fill(0);
  noStroke();
  textSize(32);
  text("🛰️", xy[0], xy[1]);
  // ellipse(xy[0], xy[1], 20, 20);
}

function fetchIssData() {
  console.log("fetchIssData");
  loadJSON("https://api.wheretheiss.at/v1/satellites/25544", function (response) {
    console.log(response);
    issdata = response;

    redraw();
  });
}

function keyTyped() {
  // zoom in and out
  if (key == "q") {
    projection.scale(projection.scale() * 1.5);
  } else if (key == "w") {
    projection.scale(projection.scale() * 0.5);
  }
  else if (key == "f") {
    fetchIssData();
  }

  redraw();
}

function drawCountries(features) {
  // draw countries
  for (let i = 0; i < features.length; i++) {
    let coordinates = features[i].geometry.coordinates;
    let type = features[i].geometry.type;

    if (type == "Polygon") {
      fill(255);
      stroke(0);
      drawPolygon(features[i]);
    }
    else if (type == "MultiPolygon") {
      fill(255);
      stroke(0);
      drawMultiPolygon(features[i]);
    }
  }
}

function drawPolygon(feature) {
  for (let i = 0; i < feature.geometry.coordinates.length; i++) {
    let ring = feature.geometry.coordinates[i];
    beginShape();
    for (let j = 0; j < ring.length; j++) {
      let coord = ring[j];
      let coords = projection(coord);
      let x = coords[0];
      let y = coords[1];
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function drawMultiPolygon(feature) {
  for (let i = 0; i < feature.geometry.coordinates.length; i++) {
    let polygon = feature.geometry.coordinates[i];
    for (let j = 0; j < polygon.length; j++) {
      let ring = polygon[j];
      beginShape();
      for (let k = 0; k < ring.length; k++) {
        let coord = ring[k];
        let coords = projection(coord);
        let x = coords[0];
        let y = coords[1];
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}


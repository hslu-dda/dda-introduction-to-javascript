// ex 02 roads buttons
let roads = [];
let button1;
let button2;
let button3;

let selectedType = "motorway";

var projection = d3
  .geoMercator()
  .center([8.29, 47.0502])
  .translate([400, 400])
  .scale(500000)

async function setup() {
  roads = await loadJSON("roads.json");

  createCanvas(1000, 800);

  button1 = createButton('motorway');
  button1.position(10, 10);
  button1.mousePressed(function () {
    console.log("button1 pressed");
    selectedType = "motorway";
    redraw();
  });

  button2 = createButton('primary');
  button2.position(10, 40);
  button2.mousePressed(function () {
    console.log("button2 pressed");
    selectedType = "primary";
    redraw();
  });

  button3 = createButton('secondary');
  button3.position(10, 70);
  button3.mousePressed(function () {
    console.log("button3 pressed");
    selectedType = "secondary";
    redraw();
  });


  print(roads.features.length);

  noLoop();
}

function draw() {
  background(255);

  noFill();
  stroke(0);

  // draw the roads
  for (let i = 0; i < roads.features.length; i++) {
    let road = roads.features[i];
    let geometryType = road.geometry.type;

    let type = road.properties.highway;

    if (type == selectedType) {
      stroke(255, 0, 0);
      strokeWeight(3);
    }
    else {
      stroke(0, 50);
      strokeWeight(0.5);
    }

    if (geometryType == "LineString") {
      drawLineString(road);
    }

  }

}

function drawLineString(feature) {
  beginShape();
  for (let i = 0; i < feature.geometry.coordinates.length; i++) {
    let coord = feature.geometry.coordinates[i];
    let coords = projection(coord);
    let x = coords[0];
    let y = coords[1];
    vertex(x, y);
  }
  endShape();
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

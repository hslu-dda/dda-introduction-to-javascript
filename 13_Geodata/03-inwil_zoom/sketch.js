let streets = [];
let buildings = [];
let green = [];
let pois = [];
let landuse = [];
let water = [];

let zoomInButton;
let zoomOutButton;
let zoom = 2000000;

var projection = d3
  .geoMercator()
  .center([8.348068862207972, 47.12196109389665])
  .translate([400, 400])
  .scale(zoom);

async function setup() {
  streets = await loadJSON("inwil_roads.geojson");
  buildings = await loadJSON("inwil_buildings.geojson");
  green = await loadJSON("inwil_green.geojson");
  water = await loadJSON("inwil_water.geojson");

  createCanvas(800, 800);

  console.log(streets);

  zoomInButton = createButton("+");
  zoomInButton.position(width - 50, height - 150);
  zoomInButton.mousePressed(doZoomIn);

  zoomOutButton = createButton("–");
  zoomOutButton.position(width - 50, height - 125);
  zoomOutButton.mousePressed(doZoomOut);

  noLoop();
}

function draw() {
  background("#DBF7E3");

  drawGreen();
  drawWater();
  drawStreets();
  drawBuildings();
}

function drawGreen() {
  let features = green.features;

  for (let i = 0; i < features.length; i++) {
    let f = features[i];

    if (f.geometry.type === "MultiPolygon") {
      noStroke();
      fill("#00ff00");
      drawMultiPolygon(f);
    }
  }
}

function drawWater() {
  let features = water.features;

  for (let i = 0; i < features.length; i++) {
    let f = features[i];

    if (f.geometry.type === "LineString") {
      stroke("#A0D8EB");
      strokeWeight(5);
      noFill();
      drawLineString(f);
    }
  }
}

function drawStreets() {
  let features = streets.features;

  for (let i = 0; i < features.length; i++) {
    let f = features[i];
    let highwayProperty = f.properties.highway;

    if (highwayProperty === "motorway") {
      stroke("#768FAF");
      strokeWeight(7);
    } else if (highwayProperty === "primary") {
      stroke("#CED6DE");
      strokeWeight(7);
    } else if (highwayProperty === "secondary") {
      stroke("#CED6DE");
      strokeWeight(5);
    } else if (highwayProperty === "tertiary") {
      stroke("#CED6DE");
      strokeWeight(5);
    } else if (highwayProperty === "unclassified") {
      stroke("#CED6DE");
    } else if (highwayProperty === "residential") {
      stroke("#CED6DE");
      strokeWeight(2);
    } else if (highwayProperty === "service") {
      stroke("#CED6DE");
      strokeWeight(1);
    } else if (highwayProperty === "track") {
      stroke("#CED6DE");
      strokeWeight(1);
    } else if (highwayProperty === "cycleway") {
      noStroke();
    } else if (highwayProperty === "footway") {
      noStroke();
    } else if (highwayProperty === "path") {
      noStroke();
    } else if (highwayProperty === "steps") {
      noStroke();
    } else if (highwayProperty === "platform") {
      noStroke();
    } else {
      stroke("red"); // default color
    }

    noFill();
    drawLineString(f);
  }
}

function drawBuildings() {
  let features = buildings.features;

  for (let i = 0; i < features.length; i++) {
    let f = features[i];

    if (f.geometry.type == "MultiPolygon") {
      noStroke();
      fill(0);
      drawMultiPolygon(f);
    }
  }
}

function drawPoint(feature) {
  let coords = projection(feature.geometry.coordinates);
  let x = coords[0];
  let y = coords[1];
  point(x, y);
}

function drawMultiPoint(feature) {
  for (let i = 0; i < feature.geometry.coordinates.length; i++) {
    let coord = feature.geometry.coordinates[i];
    let coords = projection(coord);
    let x = coords[0];
    let y = coords[1];
    point(x, y);
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

function drawMultiLineString(feature) {
  for (let i = 0; i < feature.geometry.coordinates.length; i++) {
    let line = feature.geometry.coordinates[i];
    beginShape();
    for (let j = 0; j < line.length; j++) {
      let coord = line[j];
      let coords = projection(coord);
      let x = coords[0];
      let y = coords[1];
      vertex(x, y);
    }
    endShape();
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

function doZoomIn() {
  console.log("doZoomIn");
  zoom += 100000;
  projection.scale(zoom);
  redraw();
}

function doZoomOut() {
  console.log("doZoomOut");
  zoom -= 100000;

  projection.scale(zoom);
  redraw();
}

let lastPanX, lastPanY;
function mouseDragged() {
  if (lastPanX === undefined) {
    lastPanX = mouseX;
    lastPanY = mouseY;
    return;
  }

  const scaleFactor = (1 / zoom) * 50; // Scale factor depends on current zoom level
  let dx = (mouseX - lastPanX) * scaleFactor;
  let dy = (mouseY - lastPanY) * scaleFactor;

  // Get current center
  let currentCenter = projection.center();

  // Update center (subtract dy because latitude increases northward)
  projection.center([currentCenter[0] - dx, currentCenter[1] + dy]);

  lastPanX = mouseX;
  lastPanY = mouseY;

  redraw();
}

function mouseReleased() {
  // Reset last positions
  lastPanX = undefined;
  lastPanY = undefined;
}

/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
One function, three datasets: drawChart() is written once
and used for the manga, the weather and the monument data.
*/

let mangaSales;
let weatherTemps;
let monumentDistances;

async function setup() {
    createCanvas(900, 780);
    background(240);

    // Loading data is the topic of the next chapter, for now just use it
    let manga = [
        { title: "One Piece", time: 1997, sales: 516 },
        { title: "Naruto", time: 1999, sales: 250 },
        { title: "Bleach", time: 2001, sales: 120 },
        { title: "Attack on Titan", time: 2009, sales: 140 },
        { title: "Demon Slayer", time: 2016, sales: 150 },
        { title: "Jujutsu Kaisen", time: 2018, sales: 90 },
    ];
    let weather = await d3.json("./data/rdu-weather-history-sorted.json");
    let monuments = await d3.csv("./data/daten-denkmal.csv");

    // Every dataset has a different shape, but a chart only needs an array of numbers
    mangaSales = manga.map((d) => d.sales);
    weatherTemps = weather.map((d) => d.tmax);
    // d3.csv returns everything as strings, the + converts them to numbers
    monumentDistances = monuments.map((d) => +d.Distanz);

    // one function, three charts
    drawChart(mangaSales, "Manga sales (millions)", 50, 40, 800, 200, color(0, 0, 255));
    drawChart(weatherTemps, "Max. temperature (°F)", 50, 290, 800, 200, color(255, 56, 96));
    drawChart(monumentDistances, "Distance to monument (m)", 50, 540, 800, 200, color(0, 150, 100));

    // ÜBUNG: Change something inside drawChart(), e.g. strokeWeight or the shape of the points.
    // All three charts change at once.
}

// values: array of numbers, label: title of the chart
// x, y: top left corner, w, h: size of the chart, col: color
function drawChart(values, label, x, y, w, h, col) {
    let minValue = min(values);
    let maxValue = max(values);

    push();
    translate(x, y);

    // Axes
    stroke(0);
    strokeWeight(1);
    line(0, h, w, h); // x-axis
    line(0, 0, 0, h); // y-axis

    // Line
    noFill();
    stroke(col);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < values.length; i++) {
        let px = map(i, 0, values.length - 1, 0, w);
        let py = map(values[i], minValue, maxValue, h, 0);
        vertex(px, py);
    }
    endShape();

    // Labels
    noStroke();
    fill(0);
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text(label, 0, -8);
    textAlign(RIGHT, CENTER);
    text(maxValue, -8, 0);
    text(minValue, -8, h);

    pop();
}

let data = [
    { title: "One Piece", time: 1997, sales: 516 },
    { title: "Naruto", time: 1999, sales: 250 },
    { title: "Bleach", time: 2001, sales: 120 },
    { title: "Attack on Titan", time: 2009, sales: 140 },
    { title: "Demon Slayer", time: 2016, sales: 150 },
    { title: "Jujutsu Kaisen", time: 2018, sales: 90 },
];

function setup() {
    createCanvas(800, 400);

    background(240);
    textAlign(CENTER, CENTER);

    // draw axes;
    drawAxes();
    // draw dots
    drawDots();
}

function drawAxes(){
    // Axes
    stroke(0);
    line(60, 350, 760, 350); // x-axis
    line(60, 50, 60, 350); // y-axis

    // Labels
    noStroke();
    fill(0);
    textSize(10);
    text("Year of Release", 400, 375);
    push();
    translate(30, 200);
    angleMode(DEGREES)
    rotate(-90);
    text("Sales (millions)", 0, 0);
    pop();
}

function drawDots() {
    // Find ranges
    let minYear = min(data.map((d) => d.time));
    let maxYear = max(data.map((d) => d.time));
    let maxSales = max(data.map((d) => d.sales));

    // Draw points
    data.forEach((d) => {
        let x = map(d.time, minYear, maxYear, 80, 740);
        let y = map(d.sales, 0, maxSales, 350, 60);

        // Circle for each manga
        fill(0, 0, 255);
        noStroke();
        circle(x, y, 12);

        // Label with title
        fill(0);
        textSize(10);
        text(d.title, x, y - 12);
    });
}

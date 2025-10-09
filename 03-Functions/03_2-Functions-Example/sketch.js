function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < 100; i++) {
        drawGras();
    }

    for (let i = 0; i < 100; i++) {
        drawFlower();
    }
}

function drawFlower() {
    // Style the text.
    textAlign(CENTER, CENTER);

    // Use the size parameter.
    textSize(24);

    let x = random(width);
    let y = random(height);

    // Draw a flower emoji.
    text("🌸", x, y);
}

function drawGras() {
    // Style the text.
    textAlign(CENTER, CENTER);

    // Use the size parameter.
    textSize(24);

    let x = random(width);
    let y = random(height);

    // Draw a flower emoji.
    text("🌱", x, y);
}

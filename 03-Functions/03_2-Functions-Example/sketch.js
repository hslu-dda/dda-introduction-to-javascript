function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < 100; i++) {
        drawGras();
    }

    for (let i = 0; i < 100; i++) {
        drawFlower();
    }

    textAlign(CENTER, CENTER);
    textSize(12)
    text("CODING IS LIKE ...", width/2, height/2)
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

// ÜBUNG: Create a third function that logs an emoji
// that expressed your feelings towards code

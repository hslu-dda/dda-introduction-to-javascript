/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
Array functions that create new arrays or values: map, filter, find, reduce
See also: https://www.w3schools.com/js/js_array_methods.asp
*/

// 9 days with their max temperature in celsius
let temps = [12, 18, 25, 31, 22, 28, 15, 33, 19];

// size of the bars, each part is drawn in its own row
let barW = 40;
let gap = 10;
let barMaxH = 70;

function setup() {
    createCanvas(700, 720);
    background(240);
    textAlign(CENTER, CENTER);
    textSize(11);

    /*
    PART I: THE ORIGINAL
    -----------------------------------------------------------------*/
    console.log("original", temps);

    noStroke();
    fill(0);
    textAlign(LEFT, CENTER);
    text("temps", 20, 20);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < temps.length; i++) {
        let x = 20 + i * (barW + gap);
        let barH = map(temps[i], 0, 40, 0, barMaxH);
        fill(0, 0, 255);
        rect(x, 110 - barH, barW, barH);
        fill(0);
        text(temps[i], x + barW / 2, 122);
    }

    /*
    PART II: MAP
    Creates a NEW array with the same length. Every element is changed by the function.
    -----------------------------------------------------------------*/
    // celsius to fahrenheit
    let tempsF = temps.map((t) => t * 1.8 + 32);
    console.log("map", tempsF);

    fill(0);
    textAlign(LEFT, CENTER);
    text("map: to fahrenheit", 20, 155);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < tempsF.length; i++) {
        let x = 20 + i * (barW + gap);
        // fahrenheit values are bigger, so the full bar height is 104 instead of 40
        let barH = map(tempsF[i], 0, 104, 0, barMaxH);
        fill(0, 0, 255);
        rect(x, 245 - barH, barW, barH);
        fill(0);
        text(round(tempsF[i]), x + barW / 2, 257);
    }

    // ÜBUNG: Use map() to double every temperature

    /*
    PART III: FILTER
    Creates a NEW array with only the elements that pass the test (true / false).
    The array gets shorter (or stays the same).
    -----------------------------------------------------------------*/
    let hotDays = temps.filter((t) => t >= 25);
    console.log("filter", hotDays);

    fill(0);
    textAlign(LEFT, CENTER);
    text("filter: hot days (>= 25)", 20, 290);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < hotDays.length; i++) {
        let x = 20 + i * (barW + gap);
        let barH = map(hotDays[i], 0, 40, 0, barMaxH);
        fill(0, 0, 255);
        rect(x, 380 - barH, barW, barH);
        fill(0);
        text(hotDays[i], x + barW / 2, 392);
    }

    // ÜBUNG: Use filter() to get all days below 20

    /*
    PART IV: FIND
    Returns only ONE element: the first one that passes the test.
    If there is none, you get undefined.
    -----------------------------------------------------------------*/
    let firstHeatDay = temps.find((t) => t > 30);
    console.log("find", firstHeatDay);

    fill(0);
    textAlign(LEFT, CENTER);
    text("find: first day > 30", 20, 425);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < temps.length; i++) {
        let x = 20 + i * (barW + gap);
        let barH = map(temps[i], 0, 40, 0, barMaxH);
        // the found value is highlighted in red
        if (temps[i] === firstHeatDay) fill(255, 56, 96);
        else fill(0, 0, 255);
        rect(x, 515 - barH, barW, barH);
        fill(0);
        text(temps[i], x + barW / 2, 527);
    }

    // ÜBUNG: Find the first day below 15. What do you get if you look for a day above 50?

    /*
    PART V: REDUCE
    Boils the whole array down to ONE value.
    sum is the running total (the "accumulator"), t is the current element,
    0 is the start value of the sum.
    -----------------------------------------------------------------*/
    let total = temps.reduce((sum, t) => sum + t, 0);
    let average = total / temps.length;
    console.log("reduce", total, average);

    fill(0);
    textAlign(LEFT, CENTER);
    text("reduce: average", 20, 560);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < temps.length; i++) {
        let x = 20 + i * (barW + gap);
        let barH = map(temps[i], 0, 40, 0, barMaxH);
        fill(0, 0, 255);
        rect(x, 650 - barH, barW, barH);
        fill(0);
        text(temps[i], x + barW / 2, 662);
    }

    // line at the average
    let lineY = 650 - map(average, 0, 40, 0, barMaxH);
    stroke(255, 56, 96);
    strokeWeight(2);
    line(10, lineY, 20 + temps.length * (barW + gap), lineY);

    noStroke();
    fill(0);
    textAlign(LEFT, CENTER);
    text("sum: " + total + "   average: " + round(average, 1), 20, 690);

    // ÜBUNG: Use reduce() to find the highest temperature

    /*
    BONUS: CHAINING
    Every function returns a new array, so you can call the next function directly on it.
    -----------------------------------------------------------------*/
    let hotDaysInF = temps.filter((t) => t >= 25).map((t) => t * 1.8 + 32);
    console.log("filter + map", hotDaysInF);
}

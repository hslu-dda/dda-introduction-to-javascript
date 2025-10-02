// global variable to store the loaded data
let data;

function setup() {
    createCanvas(800, 400);
    d3.csv("./data/DDA25_Daten_Denkmal_Yael_Luis_Jony.csv").then((response) => {
        // QUIZ: Welches Datenformat zeigt die Konsole an?
        console.log(response);
        // save the response in your global variable
        data = response;
        // call a custom function
        createViz();
    })
}

function draw() {
    // when is the data available?
    console.log("data, are you here?", data)

    // be sure the data is available
    if (data && data.length) {
        console.log("yes, I'm here :)", data)
    }
}

// if you don't need the draw loop, just use a function to draw
function createViz(){
    // this is called within the d3.csv when response/data is available
    console.log("data in custom function available", data)
}

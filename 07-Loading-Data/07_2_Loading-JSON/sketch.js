// global variable to store the loaded data
let rawData;
let data;

function preload(){
    rawData = loadJSON("./data/daten-denkmal.json");
}

function setup() {
    createCanvas(800, 400);
    
    console.log(rawData);
    data = Object.values(rawData);
    console.log(data)    
}

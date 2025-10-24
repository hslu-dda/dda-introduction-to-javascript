/*
Data Design + Art, HSLU Lucerne
Introduction to p5
-----------------------------------------------------------------*/

function setup() {
  // eine Leinwand erstellen mit (breite, hoehe)
  createCanvas(400, 400);

  background(220);
  // rechteck:(x,y,breite,hoehe) -> pivotpoint(referenzpunkt) ist die obere,  linke ecke
  rect(10, 10, 60, 40);
  //(x,y,radius) -> pivotpoint ist das zentrum
  ellipse(100, 30, 40, 40); //-> circle(100,30,40);

  //(x1,y1,x2,y2)
  line(130, 50, 190, 10);

  //(x1,y1,x2,y2,x3,y3)
  triangle(200, 50, 230, 10, 260, 50);

  //(x1,y1,w,h,start,stop,mode)
  arc(290, 30, 40, 40, 0, radians(250), PIE);
  arc(340, 30, 40, 40, 0, radians(120), CHORD);
}

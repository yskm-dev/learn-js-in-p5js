//色を変えてみよう
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    //stroke() 線の色
    //fill() 塗りつぶしの色
    //noStroke() 線なし
    //noFill() 塗りつぶしなし
    //strokeWeight() 線の太さ

    /*
    // グレースケール　0~255
    stroke(125);
    noFill();
    ellipse(width/2, height/2, 500, 500);
    */

    /*
    // RGB　0~255
    stroke(255, 125, 100);
    noFill();
    ellipse(width/2, height/2, 500, 500);
    */

    /*
    // RGBA Aは透過度　0~100
    noStroke();
    fill(255, 125, 100, 30);
    ellipse(width/2 + 150, height/2, 500, 500);
    fill(255, 125, 100, 60);
    ellipse(width/2 - 150, height/2, 500, 500);
    */
}

function draw() {
}

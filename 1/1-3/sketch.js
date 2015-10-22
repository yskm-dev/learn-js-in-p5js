//変数を理解しよう
var centerX;
var centerY;

//変数は「=」で値を代入できる
var r = 120;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    //変数はどのタイミングでも値を代入できる
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

function draw() {
    /*
    // 円の中心を変数に置き換えてみる
    stroke(0)
    noFill();
    ellipse(centerX, centerY, 200, 200);
    */

    /*
    // 半径を変数に置き換えてみる
    stroke(0)
    noFill();
    ellipse(centerX, centerY, r, r);
    ellipse(centerX, centerY, r * 2, r * 2);
    ellipse(centerX, centerY, r * 3, r * 3);
    ellipse(centerX, centerY, r * 4, r * 4);
    ellipse(centerX, centerY, r * 5, r * 5);
    */
}

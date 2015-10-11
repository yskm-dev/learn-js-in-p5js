//フローを理解しよう
//setup()の中は最初に一回だけ実行される
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    /*
    ellipse(width/2, height/2, 50, 50);
    */
}

//draw()の中は上から下へ繰り返し実行される
function draw() {
    ellipse(width/2, height/2, 50, 50);
}

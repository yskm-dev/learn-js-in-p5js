//if文を使ってみよう
var centerX;
var centerY;
var r = 400;
var colorR = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

function draw() {
    /*
    // if(条件式){ 文 }
    // 条件式が正しければ中の文が実行される
    //
    stroke(colorR, 0, 0);
    noFill();
    ellipse(centerX, centerY, r, r);
    colorR += 1;
    if(colorR > 255){
        colorR = 0;
    }
    */


    /*
    ifの条件式が正しくない場合はelseのあとの文が実行される。
    if(条件式){
        文1
    } else if(条件式) {
        文2
    } else {
        文3
    }
    */
}

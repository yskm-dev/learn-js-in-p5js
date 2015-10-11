//フローを理解して、図形を変化させてみよう
var centerX;
var centerY;
var r = 120;

//step()の中身は最初に一回だけ実行される
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(60);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

//draw()の中身は上から下へ何回も繰り返し実行される
//一秒間にframeRate()の数だけ実行される : 初期値は60
function draw() {
    /*
    // hoge += ◯ : hogeに対して◯をプラスする
    // hoge = hoge + ◯ と同じ
    stroke(0);
    noFill();
    ellipse(centerX, centerY, r, r);
    r += 1;
    console.log(r);
    */

    /*
    background(255);
    stroke(0);
    noFill();
    ellipse(centerX, centerY, r, r);
    r += 1;
    console.log(r);
    */

    //console.log(hoge) hogeの値をDeveloperツールのコンソールに表示させる
}

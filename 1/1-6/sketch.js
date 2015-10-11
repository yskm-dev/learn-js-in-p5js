//while文とfor文を使ってみよう
var centerX;
var centerY;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    /*
    // while(条件式){ 文 }
    // ++ => インクリメント: 変数に対して+1する
    var i = 0
    while(i < 50){
        line(centerX, centerY, Math.random() * 400 - 200 + centerX, Math.random() *  400 - 200 + centerY);
        i++;
    }
    */
    /*
    //for(初期化, 条件式, 更新){ 文 }
    for(var i = 0; i < 50; i++){
        line(centerX, centerY, Math.random() * 400 - 200 + centerX, Math.random() *  400 - 200 + centerY);
    }
    */
    // Math.random() => 0 ~ 1の間の数をランダムで返す
    // Math.random() * X => 0 ~ X の数をランダムで返す
    // Math.random() * 2 * X - X => -X ~ X の数をランダムで返す
}

function draw() {
}

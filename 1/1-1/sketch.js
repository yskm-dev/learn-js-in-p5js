//図形を色々書いてみよう
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(5);
    /* 点
    * point(x座標, y座標);
    */
    //point(width/2, height/2);
    /* 線
    * line(始まりのx座標, 始まりのy座標, 終わりのx座標, 終わりのy座標);
    */
    //line(width/2 - 100, height/2, width/2 +100, height/2);
    /* 四角形
    * rect(左上の角のx座標, 左上の角のy座標, 横幅, 縦幅);
    */
    //rect(width/2, height/2, 100, 100); /* 四角形 */
    /* 三角形
    * triangle(x座標1, y座標1, x座標2, y座標2, x座標3, y座標3);
    */
    /* 円
    * ellipse(中点x, 中点y, 横の直径, 縦の直径); 
    */
    //ellipse(width/2, height/2, 50, 50); /* 円 */
}

function draw() {
}

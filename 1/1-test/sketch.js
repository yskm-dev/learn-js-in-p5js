var centerX; //Xの注点
var centerY; //Yの中点

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

function draw() {
    //問１
    //点・線・四角形・三角形・円を使って顔を書いてみよう
    //形はどんなものでもOK

    ellipse(width/2, height/2, 200, 200);
    ellipse(width/2 -40, height/2 -50, 20, 20);
    ellipse(width/2 +30, height/2 -50, 20, 20);
    rect(width/2 -25, height/2, 50, 50);

    //問２
    //縦に並んだ５つの円を書いてみよう
    // * while文を使って書くこと
    /*
    var i = 0
    while(i < 50){
    ellipse(width/2 -100, height/2 -100, 20, 20);
    ellipse(width/2 -100, height/2 -80, 20, 20);
    ellipse(width/2 -100, height/2 -60, 20, 20);
    ellipse(width/2 -100, height/2 -40, 20, 20);
    ellipse(width/2 -100, height/2 -20, 20, 20);
    i++;
    }
    */

    //問３
    //色の違う四角をランダムで５個書いてみよう
    // * for文を使って書くこと
    // Math.random()を使う
    /*
    for(var i = 0; i < 50; i++){
      stroke(0);
      rect(Math.random() * 100 - 200, Math/random() * 400 - 100, 200, 200);
    }
    */

    //問４
    //左から右へ移動する円を書いてみよう
    //円が右はしに消えたら左から出てくるように書く
    // * if文を使うこと

    //問5 (上級問題)
    //１．左から右へ移動する
    //２．円が右はしまでいったら右から左へ移動するように変更
    //３. 円が左はしまでいったら左から右へ移動するように変更
    // * if文を使うこと
    // ヒント：いま右に動いているのか左に動いているのかを判断するための変数を用意しよう
  }

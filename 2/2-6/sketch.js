function hoge(index){
    console.log('hoge');
    index = index - 1;
    if(index >= 0){
        hoge(index);
    }
}

hoge(10);


// function circle(x, y, r, index){
//     ellipse(x, y, r, r);
//     index = index - 1;
//     if(index >= 0){
//         circle(x, y, r - 20, r - 20);
//     }
// }
//
//
// function setup(){
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//     stroke(255);
//     noFill();
//     circle(windowWidth / 2, windowHeight / 2, 500, 500);
// }

//上のを参考にして、四角のなかに小さな四角が書かれる関数を作ってみよう

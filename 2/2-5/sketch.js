var x = 1;

function hoge(){
    var y = 2;
    console.log('xは' + x);
    console.log('yは' + y);
}
hoge();
console.log('xは' + x);
console.log('yは' + y);


//問題 以下のコンソールがそれぞれどんな値になるか考えてみよう
/*
var x = 1;
function hoge(){
    var y = 2;
    function fuga(){
        var = z = 3;
        // console.log('xは' + x);
        // console.log('yは' + y);
        // console.log('zは' + z);
    }
    fuga();
    // console.log('xは' + x);
    // console.log('yは' + y);
    // console.log('zは' + z);
}
hoge();
// console.log('xは' + x);
// console.log('yは' + y);
// console.log('zは' + z);
*/

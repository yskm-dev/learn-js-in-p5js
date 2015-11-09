# 2. ディベロッパーツールの使い方と関数

## 2-1 console.log()とalert()
ディベロッパーツールは開発の時には欠かせないものです。  
command + option + i で開くことができます。  

sourceのタブを開くと自分が書いたコードを確認することができます。  
consoleのタブを開くとエラーメッセージや、console.log()の値を確認できます。  

デバッグの際にはconsole.log()とalert()は覚えておくと良いでしょう。  

```javascript  
var msg = 'hello';
console.log(msg); //コンソールに値を表示する
alert(msg); //アラートを表示する
```

## 2-2 関数を使ってみよう

関数とは簡単に言うと機能をまとめたものです。  
関数は以下のように定義をします。  

```javascript
function 関数名(){
    なんらかの処理
}
```

関数を実行する際は、関数名のあとに`()`をつけます。

```javascript
function hoge(){
    alert('!');
}

hoge();
```

これでhogeの中身が実行されます。  
また関数は変数の中に入れることもできます。

```javascript
var hoge = function (){
    alert('!');
}

hoge();
```

## 2-3 引数を使ってみよう
関数には引数を渡すことができます。  

```javascript
function 関数名(引数){
    なんらかの処理
}
```


```javascript
function say(msg){
    alert(msg);
}

say('hello');
```

## 2-4 戻り値を使ってみよう

```javascript
function add(x){
    return x + 1;
}

console.log(add(1));
```

引数は複数設定することができます。  

```javascript
function add(x, y){
    return x + y;
}

console.log(add(1, 2));
```

## 2-5 スコープについて学ぼう
以下を実行すると関数内では、xとy両方とも取得できますが、関数の外ではxしか取得することができません。  

```javascript
var x = 1;

function hoge(){
    var y = 2;
    console.log('xは' + x);
    console.log('yは' + y);
}
hoge();
console.log('xは' + x);
console.log('yは' + y);
```

スコープとは変数の有効範囲のことです。  
関数の外にあるスコープをグローバルスコープ、関数の中にあるスコープをローカルスコープと言います。


```javascript
var x = 1;

function hoge(){
    function huga(){

    }
}
hoge();
console.log('xは' + x);
console.log('yは' + y);
```

```javascript
function add(x, y){
    return x + y;
}

console.log(add(1, 2));
```


## 2-6 再帰関数を使ってみよう
再帰関数とは関数の中でもう一度関数を呼び出す方法です。  

```javascript
function hoge(index){
    console.log('hoge');
    index = index - 1;
    if(index >= 0){
        hoge(index);
    }
}

hoge(10);
```

これはhogeという関数の中でhogeを呼び出してます。  
このように関数の中で自分の関数を呼び出すことを再帰関数と呼びます。  

再帰関数の考え方はフラクタルという図形を描く時に使われます。  

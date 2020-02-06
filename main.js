//ハンバーガーメニューの出現
/*
const toggleMenu = document.getElementById('js-toggleMenu')
//cf. const toggleBtn = document.querySelector('#js-toggleMenu')
//ボタンを取得

// 下記は配列ライクな形式で返ってくる
const 
// const menu  = document.getElementsByClassName('menu')[0]

// ↓を使用すれば、クラスを指定しても最初の一つだけ取得できる
const menu = document.querySelector('.menu')
//動かす要素（出現するham)
//querySelector→CSSでのセレクタ指定。cssと同じ書き方
//querySelectorAllだと、複数指定できる("")

toggleMenu.addEventListener('click', () => {
    // activeがすでにmenuに付いていればactiveを削除
    // ついていなければ追加
    menu.classList.toggle('active')

    menu.classList.remove("active")
    menu.classList.add("active")
    //表示のオンオフ
})
*/

function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-ham');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();










//スムーススクロール
//クリックされた場所を特定する→（）の中にeを入れる
document.addEventListener('click', (e) => {
    //e.targetでイベントの発生の発生元を特定できる！
    const　element =e.target
    console.log(element.hash);
    
    //aタグのデフォルトの挙動をストップする
    e.preventDefault()

    //ジャンプ先の要素を取得する
    //docment.querySelector('#first')
    const jumpToSection = document.querySelector(element.hash)
    //console.log(element, 'がクリックされた！')　

    //const targetSection =

    //scrollIntoView関数を用いて特定の要素までスムーススクロールする
    //ジャンプ先の要素.scrollIntoView()
    jumpToSection.scrollIntoView({
        //スムーズにスクロールする
    　　behavior: "smooth",
    　　//先頭までスクロール
        block: "start"
    })
})
// jsを記述する際はここに記載していく


// 写真のスライドショー
$('#slider').slick({
  autoplay:true,//自動的に動き出すか。初期値はfalse。
  infinete:true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow:3,//スライドを画面に3枚見せる
  SlidesToScroll:3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow:'<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow:'<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots:true,//下部ドットナビゲーションの表示
  responsive:[
    {
     breakpoint:769,
        settings:{
        slidesToShow:2,//スライドを画面に2枚見せる
        slidesToScroll:2,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings:{
          slidesToShow: 1,//スライドを画面に1枚見せる
          slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        } 
    }
  ]
});

// アコーディオンメニュー
$(function () {
  //質問をクリックすると
  $(".js-label").on("click",
function () {
  //クリックした次の要素を開閉
  $(this).next().slideToggle(300);
  //タイトルにopenクラスをつけ外しして矢印の向きを変更
  $(this).toggleClass("open", 300);
 });
});

// 要素をフェードインさせる

$(function(){
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin');
      }
    });
  });
});


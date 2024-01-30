//ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function(){ //ボタンをクリックしたとき
    //「is-checkd」クラスを付け外して、ボタンの画像を切り替える
    $(this).toggleClass("is-checked"); 

    // ドロワー画面をスライドで表示・非表示を切り替え
    $("#js-drawer").slideToggle(); 
    
    //「is-fixed」クラスを付け外して、スクロールを無効
    $("body").toggleClass("is-fixed"); 
    
});


//アコーディオン FAQ
$(function () {
    $(".js-title").on("click", function() {
      $(this).next().slideToggle(200);
      $(this).toggleClass("open",200);
    });
  });


//トップへするすると戻るボタン
jQuery(function(){
  // ボタン要素の取得
    var pagetop = jQuery('#js-button-to-top');
  
  //デフォルトでボタン非表示
    pagetop.hide();
  
    jQuery(window).scroll(function () {
        // トップから80pxスクロールしたら
        if (jQuery(this).scrollTop() > 80) {
          // 300秒かけてフェードイン
            pagetop.fadeIn(300);
        } else {
          // ページトップにいるときは非表示
            pagetop.fadeOut(300);
        }
    });
    pagetop.on("click", function () {
      // ボタンを押したら500ms（0.5秒）かけてページトップへ戻る
      jQuery('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });

  //下からふわっと表示
  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });
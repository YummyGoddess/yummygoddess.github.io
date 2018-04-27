$(document).ready(function() {
  $('.jumbotron').scroll(function() {
    parallax();
  })

  function parallax() {

    var jumboScroll = $('.jumbotron').scrollTop();
    console.log('hello');
  }

  // function changeImage(img) {
  //   // $('.crups').click(function(){
  //   //     var src = $(this).attr('../img/crups2.png')
  //   //     // ? 'crup2.png'
  //   //     // : 'crups2.png';
  //   //   $(this).attr('src', src);
  //   //   }
  //   // });
  var dogPic2 = 0;
    $('.crups').click(function() {
      console.log("It worked, maybe?")
      if(dogPic2===0){
        var dogPic = $(this).attr('data-alt-src');
        dogPic2 = 1;
      }
      else {
        var dogPic =$(this).attr('data-alt-src2');
        dogPic2 = 0;
      }
      $(this).attr('src', dogPic);
    });
    var spaceBroom = 0;
      $('.tesla').hover(function() {
        console.log("It worked, maybe?")
        if(spaceBroom===0){
          var tesla = $(this).attr('data-alt-src');
          spaceBroom = 1;
        }
        else {
          var tesla =$(this).attr('data-alt-src2');
          spaceBroom = 0;
        }
        $(this).attr('src', tesla);
      });
  // }
});

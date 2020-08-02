$(document).ready(function() {
  $("#jump-top").css({"visibility": "hidden"});
  $(".wrapper").hide();

  var flag = 0 ;
  $(".go-down-container").on('click', function(e) {
    e.preventDefault();
    if(flag == 0){
      $(".wrapper").show("slow");
      $(".slideshow-container").css({"height": "95%"});
      $(".dot-container").css({"top": "95%"});
      $(".go-down-container").css({"position": "relative"});
      $(".go-down-container").css({"top": "930px"});
      $(".go-down").css({"background-image": "url('images/go-up.png')"});
      $("#jump-top").css({"visibility": "visible"});

      $("body,html").animate({
        scrollTop: $("#experience").offset().top - 600
      },1200);
      flag ++;
    }else {
        $(".wrapper").hide("slow");
        $(".slideshow-container").css({"height": "85%"});
        $(".dot-container").css({"top": "85%"});
        $(".go-down").css({"background-image": "url('images/go-down.png')"});
        $(".go-down-container").css({"position": "fixed"});
        $(".go-down-container").css({"top": "90%"});
        $("#jump-top").css({"visibility": "hidden"});

        flag -- ;
    }

  });
});

$(document).ready(function() {
  $("a[href^='#']").click(function(e) {
    if(this.className != "nav-item"){
      e.preventDefault();
      var position = $($(this).attr("href")).offset().top;

      $("body, html").animate({
        scrollTop: position
      } ,1200);
    }

  });
});

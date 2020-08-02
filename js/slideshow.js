var slideIndex = 0;
var slides = $(".mySlides");
var t;

var show = function (index) {
  slideIndex = index;
  showSlides(index);

  if (index === slides.length - 1) {
    index= 0;
  } else {
    index += 1;
  }

  t = setTimeout(show, 2000, index);
};


var showSlides = function (index) {

  var slides = $(".mySlides");
  var dots = $(".dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index].style.display = "block";
  dots[index].className += " active";
}


show(slideIndex);


$(".prev").click(
  function (){

    if (slideIndex == 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex --;
    }
    clearTimeout(t);
    show(slideIndex);
    clearTimeout(t);
  }
)

$(".next").click(
  function (){

    if (slideIndex == slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex ++;
    }
    clearTimeout(t);
    show(slideIndex);
    clearTimeout(t);

  }
)

$(".dot").click(
  function (){
    clearTimeout(t);
    show(parseInt(this.id));
  }
)

$(".slideshow-container").hover(
  function(){
    clearTimeout(t);
  }
)
$(".slideshow-container").mouseleave(
  function(){
    show(slideIndex);
  }
)

$(".next").mousedown(
  function(e) {
    if(e.which == 1){
      $(".next").animate({"left": "-10px"},1);
      $(".next").css({"background-color": "#aa7799"});
    }
  }
)

$(".next").mouseup(
  function(e) {
    if(e.which == 1){
      $(".next").animate({"left": "0px"},1);
      $(".next").css({"background-color": "inherit"});
    }
  }
)

$(".prev").mousedown(
  function(e) {
    if(e.which == 1){
      $(".prev").animate({"right": "-10px"},1);
      $(".prev").css({"background-color": "#aa7799"});
    }
  }
)

$(".prev").mouseup(
  function(e) {
    if(e.which == 1){
      $(".prev").animate({"right": "0px"},1);
      $(".prev").css({"background-color": "transparent"});
    }
  }
)

$(".prev").mouseenter(
  function(e) {
      $(".prev").css({"background-color": "#f1f1f1"});
  }
)
$(".prev").mouseleave(
  function(e) {
      $(".prev").css({"background-color": "transparent"});
  }
)
$(".next").mouseenter(
  function(e) {
      $(".next").css({"background-color": "#f1f1f1"});
  }
)
$(".next").mouseleave(
  function(e) {
      $(".next").css({"background-color": "transparent"});
  }
)

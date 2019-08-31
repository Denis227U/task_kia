$(".burger-menu ").on("click",".bar",function(){

  $(".menu").slideToggle();
  $(".bar").toggleClass('change');
  // $(".menu a").slide('right');

 });



 $(document).ready(function() {
    $(".menu, .columnsItem").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});

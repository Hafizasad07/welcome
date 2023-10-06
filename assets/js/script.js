
jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 20, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:4
      }
    }
});

$(".product-detail .whistlist").click(function(){
  $(this).addClass("active");
})

$("input[name='paymethod']").change(function(){
  var parent = $(this).parent().parent().parent();
  console.log(parent);
  if (!$(parent).hasClass("active")) {
    $(".payment-method-select").removeClass("active");    
    $(parent).addClass("active");
  }
})
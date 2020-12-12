$('.slidersPic').slick({
  nextArrow : $('.next'),
  prevArrow : $('.prev'),
});
$('.toolSlider').slick({
  nextArrow : $('.nextTool'),
  prevArrow : $('.prevTool'),
  slidesToShow: 4,
  slidesToScroll:1,
  responsive: [
    {
        breakpoint: 1110,
        settings: {
            slidesToShow:3,
        }
    },
    {
      breakpoint: 800,
      settings: {
          slidesToShow:2,
      }
  },
  {
    breakpoint: 460,
    settings: {
        slidesToShow:1,
    }
}
] 
});
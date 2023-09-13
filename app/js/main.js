$(function () {

  $('.auto__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  
});
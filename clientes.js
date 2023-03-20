$(document).ready(function(){
  $(".owl-carousel").slick({
      dots: true, // mostra as bolinhas de navegação
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      appendDots: $('.carousel-dots'), // seleciona o elemento para adicionar as bolinhas
      customPaging: function(slider, i) { // personaliza a aparência das bolinhas
          return '<button class="carousel-dot"></button>';
      },
      prevArrow: '<button class="carousel-arrow prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button class="carousel-arrow next"><i class="fas fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});

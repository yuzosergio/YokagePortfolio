
   $(document).ready(function(){
      $('.image-container').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         adaptiveHeight: true
      });

      $('#prevBtn').click(function(){
         $('.image-container').slick('slickPrev');
      });

      $('#nextBtn').click(function(){
         $('.image-container').slick('slickNext');
      });
   });



  $(document).ready(function () {
    // Adiciona evento de clique ao botão de toggle
    $("#mobile-menu").click(function () {
        // Alterna a exibição dos menus à direita
        $(".right-menu").slideToggle();
    });
});

    $(document).ready(function(){
        // Adiciona o comportamento de rolagem suave a todos os links que começam com #
        $('a[href^="#"]').on('click', function(event) {
            var target = $($(this).attr('href'));

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000); // Ajuste a velocidade conforme necessário
            }
        });
    });

   

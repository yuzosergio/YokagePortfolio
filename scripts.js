
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

    document.addEventListener('DOMContentLoaded', function () {
        const apiKey = 'AIzaSyDY3b3_UyuPnoCI0UymOKcDrxruUp5VWlM'; // Substitua pela sua chave de API
        const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

        function translate(event) {
            const button = event.target;
            const sourceLanguage = button.dataset.sourceLang;
            const targetLanguage = button.dataset.targetLang;
            const inputId = `input-${sourceLanguage}-${targetLanguage}`;
            const outputId = `output-${sourceLanguage}-${targetLanguage}`;

            const inputText = document.getElementById(inputId).value;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: inputText,
                    source: sourceLanguage,
                    target: targetLanguage,
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const translatedText = data.data.translations[0].translatedText;
                document.getElementById(outputId).innerText = translatedText;
            })
            .catch(error => console.error('Error:', error));
        }

        // Adiciona os event listeners usando addEventListener
        document.getElementById('translate-en-pt').addEventListener('click', translate);
        document.getElementById('translate-pt-en').addEventListener('click', translate);
        document.getElementById('translate-ja-pt').addEventListener('click', translate);
    });

    const prompt = "Pergunta ou mensagem para o modelo.";

fetch('/sua-rota-no-servidor', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: prompt }),
})
.then(response => response.json())
.then(data => {
    // Manipule a resposta do modelo aqui
    console.log(data.answer);
});
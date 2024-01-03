const languages = {
    pt: {
        home: "Página Inicial",
        portfolio: "Portfólio",
        commission: "Comissão"
        // Adicione outras strings conforme necessário
    },
    en: {
        home: "Home",
        portfolio: "Portfolio",
        commission: "Commission"
        // Adicione outras strings conforme necessário
    },
    ja: {
        home: "ホームページ",
        portfolio: "ポートフォリオ",
        commission: "手数料"
        // Adicione outras strings conforme necessário
    }
};

let currentLanguage = 'pt'; // Defina o idioma padrão

function changeLanguage(language) {
    currentLanguage = language;
    updatePageContent();
}

function updatePageContent() {
    Object.keys(languages[currentLanguage]).forEach(function (key) {
        $(`#${key}`).text(languages[currentLanguage][key]);
    });
}

// Executa a atualização inicial ao carregar a página
$(document).ready(function () {
    updatePageContent();
});
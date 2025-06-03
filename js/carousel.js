// Array para armazenar as imagens do carrossel
let carouselArr = [];

// Classe Carousel
class Carousel {

    // Construtor para criar objetos com img, title e url
    constructor(img, title, url) {
        this.img = img;
        this.title = title;
        this.url = url;
    }

    // Variáveis estáticas da classe
    static _sequence = 0; // posição atual do carrossel
    static _size = 0;     // quantidade total de itens
    static _interval = null; // intervalo do autoplay
    static indicatorsContainer = null; // referência aos indicadores visuais

    // Método Start - inicia o carrossel
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            carouselArr = arr;

            // Cria os indicadores visuais (as bolinhas)
            Carousel.indicatorsContainer = document.getElementById("carouselIndicators");
            Carousel.createIndicators();

            // Mostra o primeiro item
            Carousel.Next();

            // Inicia o autoplay (troca a cada 5 segundos)
            Carousel._interval = setInterval(() => {
                Carousel.Next();
            }, 3000);

            // Adiciona eventos nos botões
            document.getElementById("prevBtn").addEventListener("click", () => {
                // clearInterval(Carousel._interval); // Para o autoplay
                Carousel.Prev(); // Volta uma imagem
            });

            document.getElementById("nextBtn").addEventListener("click", () => {
                // clearInterval(Carousel._interval); // Para o autoplay
                Carousel.Next(); // Avança uma imagem
            });
        } else {
            throw "Method Start needs a valid Array.";
        }
    }

    // Método Prev - volta para a imagem anterior
    // Método Prev - volta para a imagem anterior
    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.showCurrent(); // Mostra a imagem sem alterar a sequência novamente
    }

    // Novo método para exibir a imagem atual
    static showCurrent() {
        let item = carouselArr[Carousel._sequence];

        if (!item) {
            console.error("Item not found in carousel array at index: " + Carousel._sequence);
            return;
        }

        document.getElementById("carousel-title").innerHTML = item.title;

        document.getElementById("carousel").innerHTML = `
        <a href="${item.url}">
            <img src="${item.img}" alt="${item.title}">
        </a>
    `;

        Carousel.updateIndicators();
    }
    // Método Next - avança para a próxima imagem
    static Next() {
        let item = carouselArr[Carousel._sequence];

        // Verifica se o item existe
        if (!item) {
            console.error("Item not found in carousel array at index: " + Carousel._sequence);
            return;
        }

        // Atualiza título
        document.getElementById("carousel-title").innerHTML = item.title;

        // Atualiza imagem com link
        document.getElementById("carousel").innerHTML = `
            <a href="${item.url}">
                <img src="${item.img}" alt="${item.title}">
            </a>
        `;

        // Atualiza indicadores visuais
        Carousel.updateIndicators();

        // Incrementa sequência
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }



    // Método createIndicators - cria os pontinhos embaixo
    static createIndicators() {
        Carousel.indicatorsContainer.innerHTML = ""; // Limpa antes de criar

        for (let i = 0; i < Carousel._size; i++) {
            const indicator = document.createElement("span");

            // Adiciona evento de clique para pular para essa imagem
            indicator.addEventListener("click", () => {
                // clearInterval(Carousel._interval); // Para o autoplay
                Carousel._sequence = i; // Define nova posição
                Carousel.Next(); // Atualiza tela
            });

            // Adiciona na página
            Carousel.indicatorsContainer.appendChild(indicator);
        }

        // Destaca o primeiro como ativo
        Carousel.updateIndicators();
    }

    // Método updateIndicators - destaca o ponto ativo
    static updateIndicators() {
        const indicators = Carousel.indicatorsContainer.querySelectorAll("span");

        indicators.forEach((dot, index) => {
            dot.classList.remove("active"); // Remove todos os ativos
            if (index === Carousel._sequence) {
                dot.classList.add("active"); // Adiciona active no atual
            }
        });
    }
}
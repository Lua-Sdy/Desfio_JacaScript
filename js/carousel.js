
//carousel

//Array storage class
//Array para amostrar as imagens do carrrousel
let carouselArr = [];


//classe Carousel
class Carousel {

    constructor(img, title, url) { // construtor da classe Carousel liga a imagem, título e URL,
        this.img = img;
        this.title = title;
        this.url = url;
    }

    

    // Método estático Start, que inicia o carrossel com um array
    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                //Carousel._size = 0;                // posição inicial
                Carousel._size = arr.length;      // tamanho do array 
                carouselArr = arr;                 // armazena o array 

                Carousel.indicatorsContainer = document.getElementById("carousel-indicators"); // pega o container de indicadores
                Carousel.indicatorsContainer(); // chama o método para criar os indicadores

                Carousel.Next();                    //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);   // chama o método Next a cada 5 segundos

                //eventos dos botoes
                document.getElementById("prevBtn").addEventListener("click", () => {
                    clearInterval(Carousel._interval); // Para o autoplay
                    Carousel.Prev();
                });

                document.getElementById("nextBtn").addEventListener("click", () => {
                    clearInterval(Carousel._interval); // Para o autoplay
                    Carousel.Next();
                });

            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }


    // Método estático Next, que troca as imagens/títulos
    static Next() {
        // Aqui vai a lógica para mudar a imagem e o texto na tela

        let item = carouselArr[Carousel._sequence]; // pega o item atual do array

        if (!item) {
            console.error("Item not found in carousel array at index: " + Carousel._sequence);
            return; // Se o item não existir, não faz nada
        }


        document.getElementById("carousel-title").innerHTML = item.title; // troca o texto

        document.getElementById("carousel").innerHTML = `<a href="${item.url}"><img src="${item.img}" alt="${item.title}"></a>`; // troca a imagem com link

        console.log(`Exibindo item ${Carousel._sequence}: ${item.title}`);// imprime no console o item atual

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size; // incrementa a posição



    }
};

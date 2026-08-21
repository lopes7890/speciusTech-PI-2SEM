const aboutImages = [
    "img/Equipe-trabalhando.webp",
    "img/IA.jpeg",
    "img/dsm.jpeg",
    "img/random.jpeg"
];

const aboutSlider = document.getElementById("about-slider");
const currentImage = document.getElementById("current-image");
const totalImages = document.getElementById("total-images");

let aboutIndex = 0;


// MOSTRA QUANTAS IMAGENS EXISTEM




// FUNÇÃO PARA TROCAR A IMAGEM

function changeAboutImage() {

    // começa a desaparecer
    aboutSlider.classList.add("fade");


    setTimeout(() => {

        // próxima imagem
        aboutIndex++;


        // volta para a primeira
        if (aboutIndex >= aboutImages.length) {
            aboutIndex = 0;
        }


        // altera a imagem
        aboutSlider.src = aboutImages[aboutIndex];


        // atualiza contador



        // aparece novamente
        aboutSlider.classList.remove("fade");

    }, 800);
}


// TROCA A CADA 5 SEGUNDOS

setInterval(changeAboutImage, 5000);
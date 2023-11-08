const menuHamburger = document.querySelector('.menu-hamburguer');

/*  ******* importante !!!
A pasta que fica os arquivos ativos do sistema, o ideal é que
a estrutura seja desacoplada, então sugiro nos próximos criar por exemplo:
assets -> img , videos, gifs, todos os filhos dentro de assets 
 ******* importante !!!
*/

// function createSwiper(container, pagination, nextButton, prevButton) {
//     return new Swiper(container, {
//     slidesPerView: handleWidth(),
//     spaceBetween: 30,
//     pagination: {
//         el: "swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//   });
// }

// function handleWidth() {
//     let getWidth = window.innerWidth || document.documentElement.clientWidth;
//     let slideShow = 3;
  
//     if (getWidth < 1001) {
//       slideShow = 2;
//     }
  
//     if (getWidth < 700) {
//       slideShow = 1;
//     }
  
//     return slideShow
//   }
  
//   menuHamburguer.addEventListener('click', () => {
//     nav.classList.toggle('active');
//   });
  
//   links.forEach(item => {
//     item.addEventListener('click', () => {
//       nav.classList.toggle('active');
//     })
//   })
  
//   window.addEventListener('resize', () => {
//     swiper.params.slidesPerView = handleWidth();
//     swiper.update();
//   })

  // Variável para controlar o estado de reprodução do vídeo, para evitar que o carrousel ande enquanto um vídeo está sendo reproduzido.
var videoPlaying = false;

// Adicione mais vídeos conforme necessário nesse array de objetos de vídeos
const videos = [
    {
        src: "./img/videos/video1.mp4",
        description: "Desta maneira, o comprometimento entre as equipes afeta positivamente a correta previsão das condições inegavelmente apropriadas."
    },
    {
        src: "./img/videos/video2.mp4",
        description: "Todavia, a constante divulgação das informações cumpre um papel essencial na formulação dos relacionamentos verticais entre as hierarquias."
    },
    {
        src: "./img/videos/video3.mp4",
        description: "Por outro lado, a execução dos pontos do programa promove a alavancagem das diretrizes de desenvolvimento para o futuro."

    },
     {
        src: "./img/videos/video2.mp4",
        description: "Caros amigos, a hegemonia do ambiente político oferece uma interessante oportunidade para verificação das condições inegavelmente apropriadas."
    },
    {
        src: "./img/videos/video3.mp4",
        description: "O empenho em analisar a necessidade de renovação processual cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas."
    },
     {
        src: "./img/videos/video2.mp4",
        description: "É importante questionar o quanto o surgimento do comércio virtual acarreta um processo de reformulação e modernização das regras de conduta normativas."
    },
    {
        src: "./img/videos/video3.mp4",
        description: "No mundo atual, a competitividade nas transações comerciais cumpre um papel essencial na formulação das novas proposições."
    },
];

const videoSlider = document.getElementById("video-slider");

function createVideoElement(video) {
    var videoSlide = document.createElement("div");
    videoSlide.className = "swiper-slide card-videos";

    var videoElement = document.createElement("div");
    videoElement.className = "videos";

    var videoTag = document.createElement("video");
    videoTag.src = video.src;
    videoTag.controls = true;
    videoTag.width = 300; //Largura do vídeo
    videoTag.height = 300; //Altura do vídeo

    var videoDescription = document.createElement("p");
    videoDescription.textContent = video.description;

    // Um vídeo está sendo reproduzido, pausa a rolagem automática!
    videoTag.addEventListener("play", function() {
        videoPlaying = true;
        mySwiper.autoplay.stop();
    });

    // O vídeo foi pausado, verifica se todos os vídeos estão pausados e continua o carrossel 
    videoTag.addEventListener("pause", function() {
        videoPlaying = false;
        checkIfAllVideosPaused();
    });

    videoElement.appendChild(videoTag);
    videoElement.appendChild(videoDescription);

    videoSlide.appendChild(videoElement);
    videoSlider.appendChild(videoSlide);
}

// Verifica se todos os vídeos estão pausados
function checkIfAllVideosPaused() {
    if (!videoPlaying) {
        // Nenhum vídeo está sendo reproduzido, retoma a rolagem automática
        mySwiper.autoplay.start();
    }
}

//percorra o array videos, passando o método de criação
videos.forEach(createVideoElement);

// Inicialização do Swiper
var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 3, //quantidade de videos exibindo no carrossel, altere pra menos ou mais.
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000, // 5 segundos entre os vídeos
    },
});
  



  
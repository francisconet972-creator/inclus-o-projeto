/* =========================================
   ANIMAÇÕES DE ENTRADA
========================================= */

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach((elemento) => {

    observer.observe(elemento);

});


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");


menuToggle.addEventListener("click", () => {

    const menuAberto =
        nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );

});


/* Fecha o menu quando clicar em algum link */

const linksMenu =
    document.querySelectorAll(".nav a");


linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   ANIMAÇÃO DOS QUEBRA-CABEÇAS
========================================= */

const saibaMais =
    document.querySelector("#saibaMais");

const transicao =
    document.querySelector("#puzzleTransition");


saibaMais.addEventListener("click", () => {

    /*
        Ativa os quebra-cabeças
        que cobrem a tela.
    */

    transicao.classList.add("active");


    /*
        Depois da animação,
        leva para a seção principal.
    */

    setTimeout(() => {

        document
            .querySelector("#sobre")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 680);


    /*
        Remove a camada depois
        que a transição terminou.
    */

    setTimeout(() => {

        transicao.classList.remove("active");

    }, 1450);

});


/* =========================================
   EFEITO DE LUZ DO MOUSE
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "pointermove",
    (event) => {

        /*
            Só ativa o efeito
            em dispositivos com mouse.
        */

        if (
            window.matchMedia(
                "(pointer:fine)"
            ).matches
        ) {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        }

    }
);


/* =========================================
   PODCAST
========================================= */

const audio =
    document.querySelector("#podcastAudio");

const ondas =
    document.querySelector(".sound-wave");


audio.addEventListener("play", () => {

    ondas.classList.add("playing");

});


audio.addEventListener("pause", () => {

    ondas.classList.remove("playing");

});


audio.addEventListener("ended", () => {

    ondas.classList.remove("playing");

});


/* =========================================
   VÍDEO
========================================= */

const video =
    document.querySelector("#inclusionVideo");

const fallback =
    document.querySelector(".video-fallback");


video.addEventListener("loadeddata", () => {

    fallback.style.display = "none";

});


video.addEventListener("error", () => {

    fallback.style.display = "grid";

});


/* =========================================
   ACESSIBILIDADE
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
            ESC fecha o menu mobile.
        */

        if (event.key === "Escape") {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
/* =========================================
   ANIMAÇÕES DE ENTRADA
========================================= */

const elementos =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

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


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const menuAberto =
                nav.classList.toggle("open");


            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );

        }
    );


    const linksMenu =
        document.querySelectorAll(".nav a");


    linksMenu.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                nav.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================
   BOTÃO SAIBA MAIS
========================================= */

const saibaMais =
    document.querySelector("#saibaMais");


if (saibaMais) {

    saibaMais.addEventListener(
        "click",
        () => {

            document
                .querySelector("#sobre")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================
   EFEITO DE LUZ DO MOUSE
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener(
        "pointermove",
        (event) => {

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

}


/* =========================================
   PODCAST
========================================= */

const audio =
    document.querySelector(
        "#podcastAudio"
    );


const ondas =
    document.querySelector(
        ".sound-wave"
    );


if (audio && ondas) {

    audio.addEventListener(
        "play",
        () => {

            ondas.classList.add(
                "playing"
            );

        }
    );


    audio.addEventListener(
        "pause",
        () => {

            ondas.classList.remove(
                "playing"
            );

        }
    );


    audio.addEventListener(
        "ended",
        () => {

            ondas.classList.remove(
                "playing"
            );

        }
    );

}


/* =========================================
   VÍDEO
========================================= */

const video =
    document.querySelector(
        "#inclusionVideo"
    );


const fallback =
    document.querySelector(
        ".video-fallback"
    );


if (video && fallback) {

    video.addEventListener(
        "loadeddata",
        () => {

            fallback.style.display =
                "none";

        }
    );


    video.addEventListener(
        "error",
        () => {

            fallback.style.display =
                "grid";

        }
    );

}
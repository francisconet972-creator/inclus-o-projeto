/* =========================================
   ANIMAÇÕES DE ENTRADA
========================================= */

const elementos = document.querySelectorAll(".reveal");

if (elementos.length > 0) {

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

}



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
                String(menuAberto)
            );

        }
    );


    const linksMenu =
        nav.querySelectorAll("a");


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

}



/* =========================================
   ESC FECHA MENU
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav &&
            menuToggle
        ) {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



/* =========================================
   BOTÃO SAIBA MAIS
========================================= */

const saibaMais =
    document.querySelector("#saibaMais");


if (saibaMais) {

    saibaMais.addEventListener(
        "click",
        () => {

            const sobre =
                document.querySelector("#sobre");


            if (sobre) {

                sobre.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}



/* =========================================
   PODCAST
========================================= */

const audio =
    document.querySelector("#podcastAudio");


const transcriptText =
    document.querySelector("#transcriptText");


const transcript = [

    {
        start: 0,
        end: 16,
        text:
            "Olá! Seja muito bem-vindo ao nosso podcast especial da Semana da Inclusão. Hoje vamos falar sobre um assunto cada vez mais importante: a sensibilidade na tecnologia."
    },

    {
        start: 16,
        end: 37,
        text:
            "Quando pensamos em tecnologia, normalmente pensamos em computadores, celulares, inteligência artificial e inovação. Mas existe algo que nenhuma tecnologia pode deixar de lado: as pessoas."
    },

    {
        start: 37,
        end: 62,
        text:
            "Uma tecnologia realmente boa não deve apenas funcionar. Ela precisa ser pensada para diferentes pessoas, diferentes necessidades e diferentes formas de interagir com o mundo."
    },

    {
        start: 62,
        end: 91,
        text:
            "Por exemplo, legendas em vídeos ajudam pessoas surdas ou com dificuldade auditiva. Leitores de tela permitem que pessoas com deficiência visual utilizem sites e aplicativos."
    },

    {
        start: 91,
        end: 115,
        text:
            "Contrastes adequados, fontes acessíveis e navegação pelo teclado também podem fazer uma enorme diferença. E isso mostra que inclusão não significa criar algo separado para algumas pessoas."
    },

    {
        start: 115,
        end: 139,
        text:
            "Significa criar soluções que possam ser utilizadas pelo maior número possível de pessoas."
    },

    {
        start: 139,
        end: 161,
        text:
            "Mas a sensibilidade na tecnologia vai além da acessibilidade. Ela também significa escutar. Escutar quem utiliza uma ferramenta, entender suas dificuldades."
    },

    {
        start: 161,
        end: 185,
        text:
            "E perceber que uma solução que parece simples para uma pessoa pode ser complicada para outra."
    },

    {
        start: 185,
        end: 214,
        text:
            "Quando desenvolvedores, designers e empresas colocam a empatia no processo de criação, a tecnologia deixa de ser apenas uma ferramenta e passa a ser uma forma de aproximar pessoas."
    },

    {
        start: 214,
        end: 241,
        text:
            "Por isso, falar sobre sensibilidade na tecnologia é falar sobre responsabilidade. Cada aplicativo, site ou sistema que criamos pode facilitar a vida de alguém ou criar uma barreira."
    },

    {
        start: 241,
        end: 263,
        text:
            "A escolha está em como decidimos desenvolver essas tecnologias."
    },

    {
        start: 263,
        end: 285,
        text:
            "No final, inovar não é apenas criar algo novo, é criar algo que realmente faça diferença na vida das pessoas."
    },

    {
        start: 285,
        end: 315,
        text:
            "Obrigado por ouvir este episódio da Semana da Inclusão. E lembre-se: uma tecnologia melhor começa quando aprendemos a ouvir melhor."
    }

];


let trechoAtual = -1;

let timerDigitacao = null;



/* =========================================
   ESCREVER TRANSCRIÇÃO
========================================= */

function escreverTexto(texto) {

    if (!transcriptText) {
        return;
    }


    if (timerDigitacao !== null) {

        clearTimeout(timerDigitacao);

        timerDigitacao = null;

    }


    transcriptText.textContent = "";

    transcriptText.classList.add("typing");


    let indice = 0;


    function digitar() {

        if (!transcriptText) {
            return;
        }


        if (indice >= texto.length) {

            transcriptText.classList.remove(
                "typing"
            );

            timerDigitacao = null;

            return;

        }


        transcriptText.textContent +=
            texto.charAt(indice);


        indice++;


        timerDigitacao =
            setTimeout(
                digitar,
                22
            );

    }


    digitar();

}



/* =========================================
   ENCONTRAR TRECHO
========================================= */

function encontrarTrecho(tempo) {

    for (
        let i = 0;
        i < transcript.length;
        i++
    ) {

        if (
            tempo >= transcript[i].start &&
            tempo < transcript[i].end
        ) {

            return i;

        }

    }

    return -1;

}



/* =========================================
   CONTROLE DO PODCAST
========================================= */

if (audio) {

    audio.addEventListener(
        "play",
        () => {

            document.body.classList.add(
                "podcast-playing"
            );

        }
    );


    audio.addEventListener(
        "pause",
        () => {

            document.body.classList.remove(
                "podcast-playing"
            );

        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            const tempoAtual =
                audio.currentTime;


            const indice =
                encontrarTrecho(
                    tempoAtual
                );


            if (
                indice !== -1 &&
                indice !== trechoAtual
            ) {

                trechoAtual = indice;

                escreverTexto(
                    transcript[indice].text
                );

            }

        }
    );


    audio.addEventListener(
        "seeked",
        () => {

            const indice =
                encontrarTrecho(
                    audio.currentTime
                );


            if (indice !== -1) {

                trechoAtual = indice;

                escreverTexto(
                    transcript[indice].text
                );

            }

        }
    );


    audio.addEventListener(
        "ended",
        () => {

            document.body.classList.remove(
                "podcast-playing"
            );


            trechoAtual = -1;


            if (timerDigitacao !== null) {

                clearTimeout(
                    timerDigitacao
                );

                timerDigitacao = null;

            }


            if (transcriptText) {

                transcriptText.classList.remove(
                    "typing"
                );

            }

        }
    );

}



/* =========================================
   ACORDEÃO DA LEGENDA
========================================= */

const accordionButtons =
    document.querySelectorAll(
        ".accordion-button"
    );


accordionButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const item =
                button.closest(
                    ".accordion-item"
                );


            if (!item) {
                return;
            }


            const content =
                item.querySelector(
                    ".accordion-content"
                );


            const estaAberto =
                item.classList.contains(
                    "active"
                );


            /* FECHA OS OUTROS */

            document
                .querySelectorAll(
                    ".accordion-item.active"
                )
                .forEach((outroItem) => {

                    if (
                        outroItem !== item
                    ) {

                        outroItem.classList.remove(
                            "active"
                        );


                        const outroButton =
                            outroItem.querySelector(
                                ".accordion-button"
                            );


                        const outroContent =
                            outroItem.querySelector(
                                ".accordion-content"
                            );


                        if (outroButton) {

                            outroButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                        if (outroContent) {

                            outroContent.style.maxHeight =
                                null;

                        }

                    }

                });


            /* FECHA O ATUAL */

            if (estaAberto) {

                item.classList.remove(
                    "active"
                );


                button.setAttribute(
                    "aria-expanded",
                    "false"
                );


                if (content) {

                    content.style.maxHeight =
                        null;

                }

                return;

            }


            /* ABRE O ATUAL */

            item.classList.add(
                "active"
            );


            button.setAttribute(
                "aria-expanded",
                "true"
            );


            if (content) {

                content.style.maxHeight =
                    content.scrollHeight + "px";

            }

        }
    );

});



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
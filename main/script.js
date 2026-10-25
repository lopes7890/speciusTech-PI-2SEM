const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.30
});

elementos.forEach((elemento) => {
    observer.observe(elemento);
});


document.querySelectorAll(".projeto-galeria").forEach((galeria) => {
    const principal = galeria.querySelector(
        ".projeto-imagem-principal img"
    );

    const miniaturas = galeria.querySelectorAll(
        ".miniatura-projeto"
    );

    miniaturas.forEach((miniatura) => {
        const imagem = miniatura.querySelector("img");

        // Permite selecionar a miniatura pelo teclado
        miniatura.setAttribute("role", "button");
        miniatura.setAttribute("tabindex", "0");

        const selecionarImagem = () => {
            if (principal.src === imagem.src) {
                miniaturas.forEach((item) => {
                    item.classList.toggle("ativa", item === miniatura);
                });
                return;
            }

            // Inicia a transição
            principal.style.opacity = "0";

            setTimeout(() => {
                principal.src = imagem.src;
                principal.alt = imagem.alt;

                principal.onload = () => {
                    principal.style.opacity = "1";
                };

                // Caso a imagem já esteja em cache
                if (principal.complete) {
                    principal.style.opacity = "1";
                }
            }, 150);

            // Atualiza a miniatura selecionada
            miniaturas.forEach((item) => {
                item.classList.toggle("ativa", item === miniatura);
            });
        };

        miniatura.addEventListener("click", selecionarImagem);

        miniatura.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                selecionarImagem();
            }
        });
    });
});

const hero = document.querySelector(".hero-section");
const form = document.querySelector(".contato-informacoes");
const integrates = document.querySelector(".integrantes-section");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (hero) {
        hero.style.backgroundPositionY = `${scroll * 0.6}px`;
    }
    if (form) {
        form.style.backgroundPositionY = `${scroll * 0.6}px`;
    }
    if (footer) {
        footer.style.backgroundPositionY = `${scroll * 0.6}px`;
    }
    if (integrates) {
        integrates.style.backgroundPositionY = `${scroll * 0.6}px`;
    }
}, { passive: true });


//MENU

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

function fecharMenu() {
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
}

menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    const menuAberto = navbar.classList.toggle('active');

    menuToggle.classList.toggle('active', menuAberto);
    menuToggle.setAttribute('aria-expanded', String(menuAberto));
    menuToggle.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    );
});

// Fecha ao clicar em uma opção
navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
});

// Fecha ao clicar fora da navbar
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        fecharMenu();
    }
});

// Fecha com a tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fecharMenu();
    }
});

// Fecha o menu se a tela voltar ao tamanho desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        fecharMenu();
    }
});


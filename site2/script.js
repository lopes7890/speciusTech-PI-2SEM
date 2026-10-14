// Função para entrada estilizada na página

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("O elemento está visível na tela!");
    }
  });
});

observer.observe(document.querySelector("#ascend"));


/* =========================================
   SPECIUSTECH - INTERAÇÃO DOS PROJETOS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".projeto-icone");
    const numero = document.getElementById("projeto-numero");
    const titulo = document.getElementById("projeto-titulo");
    const descricao = document.getElementById("projeto-descricao");
    const topicos = document.getElementById("projeto-topicos");
    const imagemPrincipal = document.getElementById(
        "projeto-imagem-principal"
    );
    const miniaturas = document.querySelector(".projeto-miniaturas");
    const detalhes = document.querySelector(".projeto-detalhes");

    // Se a seção não estiver presente na página, não executa o código.
    if (
        !botoes.length ||
        !numero ||
        !titulo ||
        !descricao ||
        !topicos ||
        !imagemPrincipal ||
        !miniaturas ||
        !detalhes
    ) {
        return;
    }

    // Informações dos projetos.
    // Troque os textos e os caminhos das imagens quando precisar.
    const projetos = [
        {
            titulo: "EEG e alterações de paladar pós-COVID-19",

            descricao:
                "Investigar se o cérebro de pessoas com alterações de paladar após a COVID-19 apresenta padrões mensuráveis por EEG durante estímulos gustativos e utilizar esses padrões para desenvolver um modelo computacional capaz de auxiliar na triagem de possíveis casos de hipogeusia e ageusia.",

            topicos: [
                {
                    titulo: "Análise cerebral",
                    descricao: "Padrões no EEG"
                },
                {
                    titulo: "Estímulos gustativos",
                    descricao: "Avaliação do paladar"
                },
                {
                    titulo: "Modelo computacional",
                    descricao: "Auxílio à triagem"
                }
            ],

            imagem: "",

            miniaturas: ["", "", ""]
        },

        {
            titulo: "Título do segundo projeto",

            descricao:
                "Substitua este texto pela descrição do segundo projeto, explicando o problema estudado, a solução proposta e os resultados esperados.",

            topicos: [
                {
                    titulo: "Objetivo",
                    descricao: "Meta do projeto"
                },
                {
                    titulo: "Tecnologia",
                    descricao: "Recursos utilizados"
                },
                {
                    titulo: "Resultados",
                    descricao: "Benefícios esperados"
                }
            ],

            imagem: "",

            miniaturas: ["", "", ""]
        },

        {
            titulo: "Título do terceiro projeto",

            descricao:
                "Adicione aqui a descrição da terceira iniciativa, apresentando sua metodologia e sua contribuição.",

            topicos: [
                {
                    titulo: "Pesquisa",
                    descricao: "Tema investigado"
                },
                {
                    titulo: "Desenvolvimento",
                    descricao: "Solução proposta"
                },
                {
                    titulo: "Impacto",
                    descricao: "Benefícios esperados"
                }
            ],

            imagem: "",

            miniaturas: ["", "", ""]
        },

        {
            titulo: "Título do quarto projeto",

            descricao:
                "Apresente aqui outra iniciativa da equipe, explicando sua finalidade e sua aplicação.",

            topicos: [
                {
                    titulo: "Objetivo",
                    descricao: "Meta do projeto"
                },
                {
                    titulo: "Inovação",
                    descricao: "Diferencial"
                },
                {
                    titulo: "Aplicação",
                    descricao: "Uso da solução"
                }
            ],

            imagem: "",

            miniaturas: ["", "", ""]
        }
    ];

    // Cria um espaço reservado ou uma imagem real.
    function criarImagem(caminho, textoAlternativo) {
        if (caminho) {
            const img = document.createElement("img");
            img.src = caminho;
            img.alt = textoAlternativo;
            return img;
        }

        const placeholder = document.createElement("div");
        placeholder.className = "projeto-placeholder";

        const tituloPlaceholder = document.createElement("span");
        tituloPlaceholder.textContent = textoAlternativo;

        const descricaoPlaceholder = document.createElement("small");
        descricaoPlaceholder.textContent =
            "Adicione uma imagem quando ela estiver disponível.";

        placeholder.append(tituloPlaceholder, descricaoPlaceholder);

        return placeholder;
    }

    function mostrarProjeto(indice) {
        const projeto = projetos[indice];

        if (!projeto) return;

        // Atualiza o ícone selecionado.
        botoes.forEach(function (botao, i) {
            const selecionado = i === indice;

            botao.classList.toggle("ativo", selecionado);
            botao.setAttribute("aria-pressed", String(selecionado));
        });

        // Atualiza título, número e descrição.
        numero.textContent = "PROJETO " + (indice + 1);
        titulo.textContent = projeto.titulo;
        descricao.textContent = projeto.descricao;

        // Atualiza os tópicos sem inserir HTML diretamente.
        topicos.replaceChildren();

        projeto.topicos.forEach(function (item) {
            const bloco = document.createElement("div");

            const tituloTopico = document.createElement("strong");
            tituloTopico.textContent = item.titulo;

            const descricaoTopico = document.createElement("span");
            descricaoTopico.textContent = item.descricao;

            bloco.append(tituloTopico, descricaoTopico);
            topicos.appendChild(bloco);
        });

        // Atualiza a imagem principal.
        imagemPrincipal.replaceChildren(
            criarImagem(
                projeto.imagem,
                projeto.imagem
                    ? "Imagem do " + projeto.titulo
                    : "Imagem principal do projeto"
            )
        );

        // Atualiza as três imagens complementares.
        miniaturas.replaceChildren();

        projeto.miniaturas.forEach(function (caminho, i) {
            const miniatura = document.createElement("div");

            if (caminho) {
                miniatura.appendChild(
                    criarImagem(
                        caminho,
                        "Imagem complementar " + (i + 1)
                    )
                );
            } else {
                miniatura.textContent = "Imagem " + (i + 1);
            }

            miniaturas.appendChild(miniatura);
        });

        // Reinicia a animação ao trocar de projeto.
        detalhes.style.animation = "none";
        void detalhes.offsetWidth;
        detalhes.style.animation = "";
    }

    // Liga os cliques aos respectivos projetos.
    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const indice = Number(botao.dataset.projeto);
            mostrarProjeto(indice);
        });
    });

    // Exibe o primeiro projeto ao abrir a página.
    mostrarProjeto(0);
});

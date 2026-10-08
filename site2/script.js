// Função para entrada estilizada na página

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("O elemento está visível na tela!");
    }
  });
});

observer.observe(document.querySelector("#ascend"));

// Função para entrada estilizada na página
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const obj = document.getElementsByClassName("ascend");
    if (entry.isIntersecting) {
        obj.classList.add('aparecer')
    }
  });
});


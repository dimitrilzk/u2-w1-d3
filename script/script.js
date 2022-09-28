let numeroDiPagina = 0;
const tutteLePagine = document.getElementsByClassName("slider-item");

const avanti = function () {
  for (let i = 0; i < tutteLePagine.length; i++) {
    tutteLePagine[i].classList.remove("mostra");
  }
  numeroDiPagina++;
  console.log(numeroDiPagina);
  if (numeroDiPagina >= tutteLePagine.length) {
    numeroDiPagina = 0;
  }
  const paginaCorrente = tutteLePagine[numeroDiPagina];
  paginaCorrente.classList.add("mostra");
};

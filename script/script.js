// function avantiImmagine() {
//   let im1 = document.getElementById("im1");

//   let im2 = document.getElementById("im2");

//   let im3 = document.getElementById("im3");

//   let im4 = document.getElementById("im4");

//   let im5 = document.getElementById("im5");
// }
let numeroDiPagina = 0;
function mostraImmagine() {
  numeroDiPagina = numeroDiPagina + 1;
  let immagineCorrente = document.getElementById("im" + numeroDiPagina);
  immagineCorrente.style.display = "flex";
  //   let im1 = document.getElementById("im1");
  //   im1.style.display = "flex";
  //   let im2 = document.getElementById("im2");
  //   im2.style.display = "flex";
}

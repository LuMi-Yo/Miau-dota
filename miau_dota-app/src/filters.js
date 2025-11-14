import "./style.css";
import pets from "./pets.js";
import { createPet } from "./main.js";
import { petcard } from "./main.js";
import { buttons } from "./buttons.js";

//Mostrar pop-up
const popup = document.getElementById("popup");
const btnFiltrar = document.getElementById("filtrar");

btnFiltrar.addEventListener("click", (event) => {
  popup.style.display = "flex";
  btnFiltrar.style.backgroundColor = "#e58233";
  btnFiltrar.style.border = "none";
  btnFiltrar.style.color = "white";
});

//Fechar pop-up
const fechar = document.getElementById("fechar");
fechar.addEventListener("click", (event) => {
  popup.style.display = "none";
  btnFiltrar.style.backgroundColor = "transparent";
  btnFiltrar.style.color = "black";
  btnFiltrar.style.border = "1px solid #a3a1a0";
});

//Array para acumular os filtros selecionados
let selecionados = [];

//Selecionar botão e o adicionar a um array
function selecionarBtn(btn) {
  btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "#e58233";
    btn.style.color = "white";
    btn.style.border = "none";
    selecionados.push(btn);
  });
}

//Percorre cada elemento de buttons.js e o associa ao evento de clique
buttons.forEach((b) => selecionarBtn(b.element));

//Armazenar parâmetros para a função filtrarPets em lista (Cria um array de arrays)
function arrayFiltros() {
  let lista_filtros = [];

  selecionados.forEach((selecionado) => {
    buttons.forEach((b) => {
      if (selecionado === b.element) {
        lista_filtros.push([b.chave, b.opcao]);
      }
    });
  });
  return lista_filtros;
}

function filtrarPets(lista) {
  //Objeto para armazenar os filtros por tipo
  const grupos = {};
  //Agrupa filtros da mesma chave
  lista.forEach((item) => {
    if (grupos[item[0]] === undefined) {
      grupos[item[0]] = [];
    }
    grupos[item[0]].push(item[1]);
  });
  console.log("Objeto grupos:", grupos);

  const filtrados = pets.filter((pet) => {
    for (let chave in grupos) {
      const opcoes = grupos[chave];

      if (opcoes.includes(pet[chave])) {
        continue; //passou nesse grupo, vai testar o próximo
      } else {
        return false; //se falhar em algum grupo, o pet é descartado
      }
    }
    //se o pet chegou aqui, passou em todos os grupos
    return true;
  });

  //join junta cards sem vírgula entre eles
  petcard.innerHTML = filtrados.map(createPet).join("");
} 

//Buscar
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", (event) => {
  filtrarPets(arrayFiltros());
  popup.style.display = "none";
});

//Limpar
const limpar = document.getElementById("limpar");

limpar.addEventListener("click", () => {
  selecionados = [];
  buttons.forEach((b) => {
    const btn = b.element;
    btn.style.backgroundColor = "transparent";
    btn.style.color = "black";
    btn.style.border = "1px solid #c4c1c1";
  });

  petcard.innerHTML = "";
  pets.forEach((pet) => {
    petcard.innerHTML += createPet(pet);
  });
});

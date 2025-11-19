import vets from "./vets"
// Pega a string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

const id_vet = urlparams.get('id')

const vet = vets.find(a => a.id == id_vet)

if (vet) {
    document.getElementById('vet-image').src = vet.image
    document.getElementById('vet-name').textContent = vet.name;
    document.getElementById('vet-desc').textContent = vet.description;
    document.getElementById('vet-specialty').textContent = vet.specialty
    document.getElementById('vet-location').textContent = vet.location;
  } else {
    document.body.innerHTML = '<h1 style="color: black;" class="vet-não-encontrado">Veterinário não encontrado!</h1>';
  }

//---------------------------------------botão de consulta-------------------------------------------------//

const btn = document.getElementById("btnAgendar");

let marcado = localStorage.getItem("Agendar") === "true";

atualizarbotao();

btn.addEventListener("click", () => {

  // Ele vai alterar de true/false
  marcado = !marcado;

  // Vao salvar a mudança no localStorage
  localStorage.setItem("Agendar", marcado)

  // Vai atualizar o botao
  atualizarbotao();
});

function atualizarbotao() {
  if(marcado){
    btn.textContent = "Desmarcar Consulta";
    btn.style.backgroundColor = "teal";
  }
  else {
    btn.textContent = "Agendar Consulta";
    btn.style.backgroundColor = "";
  }
}
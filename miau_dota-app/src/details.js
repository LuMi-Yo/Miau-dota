import pets from "./pets"
// Pega a string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

const id_pet = urlparams.get('id')

const pet = pets.find(a => a.id == id_pet)

if (pet) {
    document.getElementById('pet-image').src = pet.image
    // document.getElementById('pet-imagem').alt = pet.nome;
    document.getElementById('pet-name').textContent = pet.name;
    document.getElementById('pet-desc').textContent = pet.desc;
    document.getElementById('pet-sexo').textContent = pet.sexo
    document.getElementById('pet-age').textContent = pet.age;
  } else {
    document.body.innerHTML = '<h1 class="pet-não-encontrado">Pet não encontrado!</h1>';
  }


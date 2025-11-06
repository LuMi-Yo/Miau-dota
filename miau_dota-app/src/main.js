import './style.css'
import pets from './pets'

function createPet(pets){
    return `
    <div>
        <img src="${pets.image}">
        <p class="name">${pets.name}</p>
        <p class="infos-pet">${pets.age} | ${pets.sexo}</p>
        <img src="src/imgs/Itens miaudota/pata1.png" alt="pata1" id="pata1">
    </div>`
           
};

const petcard = document.querySelector('.pets');

pets.forEach((pets) => {
    let card = createPet(pets);
    petcard.insertAdjacentHTML('beforeend', card);
});

const btnSexo = document.getElementById('btnSexo');
const opcoesSexo = document.getElementById('opcoesSexo');
const btnFemea = document.getElementById('btnFemea');
const btnMacho = document.getElementById('btnMacho');

btnSexo.addEventListener('mouseover', event => {
    opcoesSexo.style.display = 'flex';
    btnFemea.style.backgroundColor = '#FCF9F3';
    btnFemea.style.color = '#452824';
    btnMacho.style.backgroundColor = '#FCF9F3';
    btnMacho.style.color = '#452824';
});

dropdownSexo.addEventListener('mouseover', event => {
    opcoesSexo.style.display = 'flex';
});

opcoesSexo.addEventListener('mouseleave', event => {
    opcoesSexo.style.display = 'none';
});

function filtrarPets(filtro, opcao) {
    petcard.innerHTML = '';
    const filtrados = pets.filter(pet => pet[filtro] === opcao);
    filtrados.forEach(pet => {
        petcard.innerHTML += createPet(pet);
    });
};

btnFemea.addEventListener('click', event => {
    filtrarPets('sexo', 'femea');
    btnFemea.style.color = '#e58233';
});

btnMacho.addEventListener('click', event => {
    filtrarPets('sexo', 'macho');
    btnMacho.style.color = '#e58233';
});
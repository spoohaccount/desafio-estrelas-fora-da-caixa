const nome1 = document.querySelector('.NomeDoPersonagem1');
const nome2 = document.querySelector('.NomeDoPersonagem2');
const nome3 = document.querySelector('.NomeDoPersonagem3');
const nome4 = document.querySelector('.NomeDoPersonagem4');

const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');

const local1 = document.querySelector('.Localizacao1');
const local2 = document.querySelector('.Localizacao2');
const local3 = document.querySelector('.Localizacao3');
const local4 = document.querySelector('.Localizacao4');

const status1 = document.querySelector('.Status1');
const status2 = document.querySelector('.Status2');
const status3 = document.querySelector('.Status3');
const status4 = document.querySelector('.Status4');

const personagensAleatorios = 671;

var i = 0;

var imagems = [image1, image2, image3, image4];
var nomes = [nome1, nome2, nome3, nome4];
var localizacao = [local1, local2, local3, local4];
var vstatus = [status1, status2, status3, status4];



GerarPersonagemAleatorio = () => {
    return Math.floor(Math.random() * personagensAleatorios);
}
PegarPersonagem = (NomeAPI, ImagemAPI, LocalizacaoAPI, StatusAPI) => {

    const id = GerarPersonagemAleatorio(); 
    return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) =>{
        NomeAPI.innerHTML = `<span>Name:</span> ${data.name}`;
        ImagemAPI.src = data.image;
        LocalizacaoAPI.innerHTML = `<span>Location:</span> ${data.location.name}`;
        StatusAPI.innerHTML = `<span>Status:</span> ${data.status}`;
    })
}
for(i = 0; i < 4; i++){
    PegarPersonagem(nomes[i], imagems[i], localizacao[i], vstatus[i]);
}


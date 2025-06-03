const botoes = document.querySelectorAll (".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    console.log(i);
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05"); 
const tempoObjetivo2 = new Date("2025-10-05"); 
const tempoObjetivo3 = new Date("2025-10-05"); 
const tempoObjetivo4 = new Date("2025-10-05"); 


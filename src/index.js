import { top10, buscar } from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

const arrPkmn = dataPkmn.pokemon;
const top10Pkmn = top10(arrPkmn)
//Pokemon en Top 10
for (let i=0 ; i<top10Pkmn.length; i++){
  const pkmTop10 = document.getElementById(`${'img'+(i+1)}`);
  pkmTop10.setAttribute("src", top10Pkmn[i].img);  
  const pkmNameTop10 = document.getElementById(`${'name'+(i+1)}`);
  pkmNameTop10.innerHTML = top10Pkmn[i].name.toUpperCase();

}
//ABRIR VENTANA MODAL
const trs = document.querySelectorAll('.tr-hover')
const trModal = document.getElementById('trModal')
trs.forEach(tr => {
  tr.addEventListener('click', (e) =>{
    trModal.style.display = "block";
    const idPkm=e.target.parentNode.classList[2];

    buscar(idPkm, top10Pkmn);
    const resultadoArr = buscar(idPkm, top10Pkmn)
    console.log(resultadoArr)
    const trName = document.querySelector('.tr-name');
    trName.innerHTML = resultadoArr[0].name;
    const trNum = document.querySelector('.tr-num');
    trNum.innerHTML = resultadoArr[0].num;
    const trImg = document.querySelector('.tr-img');
    trImg.setAttribute("src", resultadoArr[0].img);

  })
})
//CERRAR VENTANA MODAL
const close = document.querySelector('.close')
close.addEventListener('click',() =>{
  trModal.style.display = "none";
})



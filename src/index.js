import { top10 } from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

const arrPkmn = dataPkmn.pokemon;
const top10Pkmn = top10(arrPkmn)
//Pokemon en Top 10
for (let i=0 ; i<top10Pkmn.length; i++){
  const pkmTop10 = document.getElementById(`${'img'+(i+1)}`);
  pkmTop10.setAttribute("src", top10Pkmn[i].imgTop);  
  const pkmNameTop10 = document.getElementById(`${'name'+(i+1)}`);
  pkmNameTop10.innerHTML = top10Pkmn[i].nameTop.toUpperCase();
}



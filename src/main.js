import { top10, topPkmnSlice } from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon en Top 10
for (let i=0 ; i<topPkmnSlice.length; i++){
  const pkmTop10 = document.getElementById(`${'img'+(i+1)}`);
  pkmTop10.setAttribute("src", topPkmnSlice[i].imgTop);  
  const pkmNameTop10 = document.getElementById(`${'name'+(i+1)}`);
  pkmNameTop10.innerHTML = topPkmnSlice[i].nameTop.toUpperCase();
}



/* const pigdeyImg = document.getElementById('img11');
const imgOne = dataPkmn.pokemon[0].img;
pigdeyImg.setAttribute("src", imgOne);
 */
//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);

//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);     normal
//const prueba = data.top10(dataPkmn);

//console.log(prueba);
//console.log(example, dataPkmn);





//console.log(top10);
console.log(top10, dataPkmn);

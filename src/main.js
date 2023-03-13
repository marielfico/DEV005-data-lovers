import { top10, listPkmn } from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';


//Pokemon - listado
const template = document.querySelector('template');
const dataList = document.querySelector('.dataList');
for (let i=0; i<listPkmn.length; i++){
  const dataListClone = template.content.cloneNode(true);
  dataListClone.querySelector('.container-num').innerHTML =listPkmn[i].numList;
  dataListClone.querySelector('.container-img').setAttribute("src", listPkmn[i].imgList);
  dataListClone.querySelector('.container-name').innerHTML =listPkmn[i].nameList.toUpperCase();
  if(listPkmn[i].typeList.length>1){
    dataListClone.querySelector('.container-type1').setAttribute("class", `container-type1  ${listPkmn[i].typeList[0]}`);
    dataListClone.querySelector('.container-type2').setAttribute("class", listPkmn[i].typeList[1]);
  }else{
    dataListClone.querySelector('.container-type1').setAttribute("class", listPkmn[i].typeList[0]);
  }
  dataList.appendChild(dataListClone);
} 





//Imprimir el valor de N°pokedex
const numero251 = document.getElementById('numero251');
/* const menorPokedex = document.getElementById('menor'); */
const mayor = document.getElementById('mayor');
mayor.addEventListener('click', function(){
  numero251.textContent = 'aaa';
});



/* const pigdeyImg = document.getElementById('img11');
const imgOne = dataPkmn.pokemon[0].img;
pigdeyImg.setAttribute('src', imgOne);
 */
//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);

//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);     normal
//const prueba = data.top10(dataPkmn);

//console.log(prueba);
//console.log(example, dataPkmn);





//console.log(top10);
console.log(top10, dataPkmn);

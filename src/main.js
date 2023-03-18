import {listPkmn, filtrarRegion, ordenado, filtrarTipo, filtrarRareza, filtrarCp} from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon - listado
const template = document.querySelector('template');
const dataList = document.querySelector('.dataList');
function pintar(datosAPintar){
  dataList.innerHTML='';
  for (let i=0; i<datosAPintar.length; i++){
    const dataListClone = template.content.cloneNode(true);
    dataListClone.querySelector('.container-num').innerHTML =datosAPintar[i].num;
    dataListClone.querySelector('.container-img').setAttribute("src", datosAPintar[i].img);
    dataListClone.querySelector('.container-name').innerHTML =datosAPintar[i].name.toUpperCase();
    if(datosAPintar[i].type.length>1){
      dataListClone.querySelector('.container-type1').setAttribute("class", `container-type1  ${datosAPintar[i].type[0]}`);
      dataListClone.querySelector('.container-type2').setAttribute("class", datosAPintar[i].type[1]);
    }else{
      dataListClone.querySelector('.container-type1').setAttribute("class", datosAPintar[i].type[0]);
    }
    dataList.appendChild(dataListClone);
  } 
}
pintar(listPkmn);
//n° pokedex
const selectPokedex = document.getElementById('selectPokedex')
const changeOptionPokedex = () => {
  const valor=selectPokedex.value;
  if(valor==='menor'){
    const dataMenor=ordenado('menor');
    pintar(dataMenor);
  }else if(valor==='mayor'){
    const dataMayor=ordenado('mayor');
    pintar(dataMayor);
  }else if(valor===''){
    pintar(listPkmn);  
  }
};
selectPokedex.addEventListener('change', changeOptionPokedex)

//region
const selectRegion = document.getElementById('selectRegion')
const changeOptionRegion = () => {
  const optionRegion = selectRegion.options[selectRegion.selectedIndex].value;
  if(optionRegion === 'kanto'){
    const dataKanto=filtrarRegion('kanto');
    pintar(dataKanto)
  }else if(optionRegion === 'johto'){
    const dataJohto=filtrarRegion('johto');
    pintar(dataJohto)
  }else if(optionRegion === ''){
    pintar(listPkmn);
  }
};
selectRegion.addEventListener('change', changeOptionRegion)
//FILTRAR POR TIPO
const selectType=document.getElementById('selectType');
const changeOptionType=()=>{
  const tipo=selectType.value;
  if(tipo===''){
    pintar(listPkmn);
  }else {
    const filterType=filtrarTipo(tipo);
    pintar(filterType);
  }
}
selectType.addEventListener('change', changeOptionType)

//FILTRAR POR RAREZA
const selectRareza=document.getElementById('selectRareza');
const changeOptionRareza=()=>{
  const rareza=selectRareza.value;
  if(rareza===''){
    pintar(listPkmn);
  }else{
    const filterRareza=filtrarRareza(rareza);
    pintar(filterRareza);
  }
}
selectRareza.addEventListener('change', changeOptionRareza);
//FILTRAR POR CP
const selectPC=document.getElementById('selectPC');
const changeOptionCP=()=>{
  const cp=selectPC.value;
  if(cp===''){
    pintar(listPkmn);
  }else{
    const filterCP=filtrarCp(cp);
    pintar(filterCP);
  }
}
selectPC.addEventListener('change', changeOptionCP);




console.log(dataPkmn);

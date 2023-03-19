import {listPkmn, filtrarRegion, filtrarOrden, filtrarTipo, filtrarRareza, filtrarCp} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
//import dataPkmn from './data/pokemon/pokemon.js';

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
function changeOptionPokedex  ()  {
  const valor=selectPokedex.value;
  if(valor===''){
    pintar(listPkmn);
  }else{
    const orden=filtrarOrden(valor);
    pintar(orden)
  }
}
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
//BUSCAR POKÉMON
//Limitar caracteres en input
const busquedapkmn=document.getElementById('busquedapkmn');
busquedapkmn.addEventListener('keydown', (e)=>{
  if((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90) && e.keyCode !==8 && e.keyCode !==37 && e.keyCode !== 39 && e.keyCode !== 46)
    e.preventDefault();
})

const keyUp=document.getElementById('busquedapkmn')
keyUp.addEventListener('keyup', (e)=>{
  const inputBuscar=e.target.value.toLowerCase();  
  listPkmn.forEach(pokemon =>{
    const coincidencia=pokemon.name.match(inputBuscar);
    const containterPkm=document.querySelectorAll('.container');
    if (coincidencia!==null){
      const divNamePkm=document.querySelectorAll('.container-name');
      divNamePkm.forEach(nombre =>{
        if (nombre.textContent.toLowerCase=== coincidencia.input){
          containterPkm.classList.add('ocultar');
        }
      })
      console.log(coincidencia.input);

    
    
    }
  })
  
  //pintar(listPkmn);
  //console.log(inputBuscar);
})

import {buscar, filtrarRegion, filtrarOrden, filtrarTipo, filtrarRareza, filtrarCp} from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

const arrPkmn = dataPkmn.pokemon;

//LISTAR POKEMON
const template = document.querySelector('.template1');
const dataList = document.querySelector('.dataList');
function pintar(datosAPintar){
  dataList.innerHTML='';
  for (let i=0; i<datosAPintar.length; i++){
    
    /* //LLENAR VENTANA MODAL
    const dataModalClone = template2.content.cloneNode(true);
    dataModalClone.querySelector('.modal-name').innerHTML=datosAPintar[i].name.toUpperCase();
    dataModalClone.querySelector('.modal-img').setAttribute("src", datosAPintar[i].img);
    dataModalClone.querySelector('.modal-num').innerHTML=datosAPintar[i].num;
    dataModal.appendChild(dataModalClone); */

    //LLENAR LISTADO
    const dataListClone = template.content.cloneNode(true);
    dataListClone.querySelector('.container-num').innerHTML =datosAPintar[i].num;
    dataListClone.querySelector('.container').setAttribute('class', `container containter${[i]} ${datosAPintar[i].num}`);
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
pintar(arrPkmn);
//FILTRAR POR N°POKEDEX
const selectPokedex = document.getElementById('selectPokedex')
function changeOptionPokedex  ()  {
  const valor=selectPokedex.value;
  if(valor===''){
    pintar(arrPkmn);
  }else{
    const orden=filtrarOrden(valor, arrPkmn);
    pintar(orden)
  }
}
selectPokedex.addEventListener('change', changeOptionPokedex)
//FILTRAR POR REGION
const selectRegion = document.getElementById('selectRegion')
const changeOptionRegion = () => {
  const optionRegion = selectRegion.options[selectRegion.selectedIndex].value;
  if(optionRegion === 'kanto'){
    const dataKanto=filtrarRegion('kanto', arrPkmn);
    pintar(dataKanto)
  }else if(optionRegion === 'johto'){
    const dataJohto=filtrarRegion('johto', arrPkmn);
    pintar(dataJohto)
  }else if(optionRegion === ''){
    pintar(arrPkmn);
  }
};
selectRegion.addEventListener('change', changeOptionRegion)
//FILTRAR POR TIPO
const selectType=document.getElementById('selectType');
const changeOptionType=()=>{
  const tipo=selectType.value;
  if(tipo===''){
    pintar(arrPkmn);
  }else {
    const filterType=filtrarTipo(tipo, arrPkmn);
    pintar(filterType);
  }
}
selectType.addEventListener('change', changeOptionType)
//FILTRAR POR RAREZA
const selectRareza=document.getElementById('selectRareza');
const changeOptionRareza=()=>{
  const rareza=selectRareza.value;
  if(rareza===''){
    pintar(arrPkmn);
  }else{
    const filterRareza=filtrarRareza(rareza, arrPkmn);
    pintar(filterRareza);
  }
}
selectRareza.addEventListener('change', changeOptionRareza);
//FILTRAR POR CP
const selectPC=document.getElementById('selectPC');
const changeOptionCP=()=>{
  const cp=selectPC.value;
  if(cp===''){
    pintar(arrPkmn);
  }else{
    const filterCP=filtrarCp(cp, arrPkmn);
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
//buscar pokémon
const keyUp=document.getElementById('busquedapkmn')
keyUp.addEventListener('keyup', (e)=>{
  const inputBuscar=e.target.value.toLowerCase();  
  const arrayBuscar= arrPkmn.filter(pokemon =>{
    const coincidencia=pokemon.name.match(inputBuscar);
    if (coincidencia!==null){
      return true;
    }
  } )
  pintar(arrayBuscar);
})
//boton reiniciar pokedex
const btn = document.querySelector('.lupa');
btn.addEventListener('click', limpiar)
function limpiar(){
  window.location.reload();
}
//ABRIR VENTANA MODAL
const containers = document.querySelectorAll('.container')
const modal = document.getElementById('modal')
containers.forEach(container => {
  container.addEventListener('click', (e) =>{
    const idPkm=e.target.parentNode.classList[2];
    modal.style.display = "block";
    buscar(idPkm, arrPkmn);
    const resultadoArr = buscar(idPkm, arrPkmn)
    console.log(resultadoArr[0].name);
    const modalName = document.querySelector('.modal-name');
    modalName.innerHTML = resultadoArr[0].name;
    const numName = document.querySelector('.modal-num');
    numName.innerHTML = resultadoArr[0].num;
    const imgName = document.querySelector('.modal-img');
    imgName.setAttribute("src", resultadoArr[0].img);

  })
})
//CERRAR VENTANA MODAL
const close = document.querySelector('.close')
close.addEventListener('click',() =>{
  modal.style.display = "none";
})


import {buscar, filtrarRegion, filtrarOrden, filtrarTipo, filtrarRareza, filtrarCp} from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';

const arrPkmn = dataPkmn.pokemon;

//LISTAR POKEMON
const template = document.querySelector('.template1');
const dataList = document.querySelector('.dataList');
function pintar(datosAPintar){
  dataList.innerHTML='';
  for (let i=0; i<datosAPintar.length; i++){
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
  //ABRIR VENTANA MODAL
  const containers = document.querySelectorAll('.container')
  const modal = document.getElementById('modal')
  containers.forEach(container => {
    container.addEventListener('click', (e) =>{
      modal.style.display = "block";
      const idPkm=e.target.parentNode.classList[2];
      buscar(idPkm, arrPkmn);
      const resultadoArr = buscar(idPkm, arrPkmn)
      //console.log(resultadoArr[0].name);
      //datos en modal-region
      const modalRegion = document.querySelector('.modal-region');
      const reg = resultadoArr[0].generation.name
      if(reg === 'kanto'){
        modalRegion.setAttribute('src', 'img/kanto.png');
      }else{
        modalRegion.setAttribute('src', 'img/johto.png');
      }
      //datos en modal-number
      const modalNum = document.querySelector('.modal-num');
      modalNum.innerHTML = `N° ${resultadoArr[0].num}`;
      //datos en modal-name
      const modalName = document.querySelector('.modal-name');
      modalName.innerHTML = resultadoArr[0].name.toUpperCase();
      //datos en modal-about
      const modalAbout = document.querySelector('.modal-about');
      modalAbout.innerHTML = resultadoArr[0].about;
      //datos en modal-weight
      const modalWeight = document.querySelector('.modal-weight');
      modalWeight.innerHTML = `<strong>PESO:</strong> ${resultadoArr[0].size.weight}<br><strong>ALTURA:</strong> ${resultadoArr[0].size.height}`;
      //datos en modal-encounter
      const modalEncounter = document.querySelector('.modal-encounter');
      modalEncounter.innerHTML = `<ul><strong>ENCUENTRO:</strong> 
                                    <li>Vel. de huída: ${resultadoArr[0].encounter['base-flee-rate']}</li>
                                    <li>Vel. de captura: ${resultadoArr[0].encounter['base-capture-rate']}</li>
                                  </ul>`;
      //datos en modal-spawn
      const modalSpawn = document.querySelector('.modal-spawn');
      modalSpawn.innerHTML = `<strong>PROB. APARICIÓN:</strong> ${resultadoArr[0]['spawn-chance']}`;
      //datos en modal-table-atack
      const modalTableAttack = document.querySelector('.modal-table-attack');
      modalTableAttack.innerHTML =`
      <tr>
      <th>◓◓◓</th>
      <th>MOV. RÁPIDO</th>
      <th>ATAQ. ESPECIAL</th>
      </tr>
      <tr>
      <td><strong>NOMBRE</strong></td>
      <td>${resultadoArr[0]['quick-move'][0].name}</td>
      <td>${resultadoArr[0]['special-attack'][0].name}</td>
      </tr>
      <tr>
      <td><strong>TIPO</strong></td>
      <td>${resultadoArr[0]['quick-move'][0].type}</td>
      <td>${resultadoArr[0]['special-attack'][0].type}</td>
      </tr>
      <tr>
      <td><strong>B.DAÑO</strong></td>
      <td>${resultadoArr[0]['quick-move'][0]['base-damage']}</td>
      <td>${resultadoArr[0]['special-attack'][0]['base-damage']}</td>
      </tr>
      <tr>
      <td><strong>ENERGÍA</strong></td>
      <td>${resultadoArr[0]['quick-move'][0].energy}</td>
      <td>${resultadoArr[0]['special-attack'][0].energy}</td>
      </tr>
      <tr>
      <td><strong>TIEMPO</strong></td>
      <td>${resultadoArr[0]['quick-move'][0]['move-duration-seg']}</td>
      <td>${resultadoArr[0]['special-attack'][0]['move-duration-seg']}</td>
      </tr>
      `
      //datos en modal-rarity
      const modalRarity = document.querySelector('.modal-rarity');
      const rare = resultadoArr[0]['pokemon-rarity'];
      if(rare === 'normal'){
        modalRarity.setAttribute('src', 'img/pokebola_normal.gif');
      }else if(rare === 'mythic'){
        modalRarity.setAttribute('src', 'img/pokebola_mitico.gif');
      }else{
        modalRarity.setAttribute('src', 'img/pokebola_legendario.gif');
      }
      //datos en modal-preEvol-nextEvol
      //const modalPreEv = document.querySelector('.modal-evL');
      
      //datos en modal-table-atack
      const modalTableIcon = document.querySelector('.modal-table-icon');
      modalTableIcon.innerHTML =`
      <tr>
      <th>RESISTENCIA</th>
      <th>DEBILIDAD</th>
      </tr>
      <tr>
      <td>aa</td>
      <td>aa</td>
      </tr>
      <tr>
      <td>aa</td>
      <td>aa</td>
      </tr>
      <tr>
      <td>aa</td>
      <td>aa</td>
      </tr>
      <tr>
      <td>aa</td>
      <td>aa</td>
      </tr>
      <tr>
      <td>aa</td>
      <td>aa</td>
      </tr>
      `
      //datos en modal-img
      const imgName = document.querySelector('.modal-img');
      imgName.setAttribute("src", resultadoArr[0].img);
      //datos en modal-name2
      const modalName2 = document.querySelector('.modal-name2');
      modalName2.innerHTML = resultadoArr[0].name.toUpperCase();


    })
  })
  //CERRAR VENTANA MODAL
  const close = document.querySelector('.close')
  close.addEventListener('click',() =>{
    modal.style.display = "none";
  })
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



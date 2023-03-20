import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon en Top 10
const topPkmn = dataPkmn.pokemon.map((x) => {
  return {
    nameTop: x.name,
    cpTop: x.stats['max-cp'],
    imgTop: x.img
  } 
});

topPkmn.sort((a, b) => {
  const cpA = a.cpTop;
  const cpB = b.cpTop;
  return cpB - cpA;
});

export const topPkmnSlice = topPkmn.slice(0, 10);

//Pokemon en lista
export const listPkmn = dataPkmn.pokemon.map((y) => {
  return {
    num: y.num,
    name: y.name,
    type: y.type,
    img: y.img,
    pc: y.stats,
    rarity: y['pokemon-rarity'],
    region: y.region
  }
});
//Filtrar por region
export function  filtrarRegion(region){
  const arrayRegion=dataPkmn.pokemon.filter(pkm =>{
    if(pkm.generation.name===`${region}`){
      return true
    }
  })
  return arrayRegion;
}

//FILTRAR POR TIPO:
export function filtrarTipo(tipo){
  const tipoPkm=dataPkmn.pokemon.filter(pkm=>
    pkm.type[0]===tipo || pkm.type[1]===tipo)
  return tipoPkm;
}

//FILTRAR POR ORDEN 

export function filtrarOrden(ascDesc){
  const ordenAscDesc=dataPkmn.pokemon.sort(function(a,b){
    if(ascDesc==='menor'){ 
      return a.num-b.num;
    }else{if(ascDesc==='mayor'){
      return b.num-a.num;
    }
    }   
  })
  return ordenAscDesc;
}
//FILTRAR POR RAREZA:
export function filtrarRareza(rareza){
  const rarezaPkm=dataPkmn.pokemon.filter(pkm=>
    pkm['pokemon-rarity']===rareza)
  return rarezaPkm;
}
//FILTRAR POR MAX-CP:
export function filtrarCp(cp){
  const cpPkm=dataPkmn.pokemon.sort((a,b)=>{
    return b.stats['max-cp']-a.stats['max-cp']
  })
  if(cp === 'maximo'){
    return cpPkm
  }else if(cp ==='minimo'){
    return cpPkm.reverse()
  }
}
//BUSCAR PKM POR NUM
export function buscar(id){
  const idPokemon=dataPkmn.pokemon.filter(pkm=>{
    if(pkm.num===id){
      return true;
    }
  })
  return idPokemon;
}


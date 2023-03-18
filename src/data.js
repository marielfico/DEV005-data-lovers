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
export function ordenado(orden){
  if (orden==='menor'){
    return dataPkmn.pokemon
  }else if(orden==='mayor'){
    const pkmOrdenado=dataPkmn.pokemon.reverse();
    return pkmOrdenado 
  }
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



  









/* function ordernarPokedex(numero){
  const arrayOrden = dataPkmn.pokemon
  if(numero === 'menor'){
    return 
  }
}
 */

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */
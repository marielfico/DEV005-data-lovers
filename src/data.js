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

export function filtrarTipo(tipo){
  const arrayTipo=dataPkmn.pokemon.filter(pkm=>{
    pkm.type===`${tipo}`
    return true
  })
  return arrayTipo;
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
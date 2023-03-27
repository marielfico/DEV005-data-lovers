import { filtrarRegion, filtrarTipo, filtrarOrden, filtrarRareza, filtrarCp, buscar, top10} from '../src/data.js';

const arrTest = [
  {"num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "pokemon-rarity": "normal",
    "stats": {
      "max-cp": "1115"
    }
  },
  {"num": "251",
    "name": "celebi",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "pokemon-rarity": "mythic",
    "type": [
      "psychic",
      "grass"
    ],
    "stats": {
      "max-cp": "3265"
    }
  },
  {"num": "144",
    "name": "articuno",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "legendary",
    "type": [
      "ice",
      "flying"
    ],
    "stats": {
      "max-cp": "3051"
    }
  }
]


describe('filtrarRegion', () => {
  it('is a function', () => {
    expect(typeof filtrarRegion).toBe('function');
  });

  it('filtrarRegion, debería retornar los pokemon que sean de Kanto', () => {
    expect(filtrarRegion('kanto', arrTest)).toStrictEqual([
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      },
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      }
    ]);
  });
  it('filtrarRegion, debería retornar los pokemon que sean de Johto', () => {
    expect(filtrarRegion('johto', arrTest)).toStrictEqual([{"num": "251",
      "name": "celebi",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "pokemon-rarity": "mythic",
      "type": [
        "psychic",
        "grass"
      ],
      "stats": {
        "max-cp": "3265"
      }
    }])
  })
});


describe('filtrarTipo', ()=>{
  it ('is a function', ()=>{
    expect(typeof filtrarTipo).toBe('function');
  });

  it ('filtrarTipo, debería retornar los pokémos que sean de tipo flying', ()=>{
    expect(filtrarTipo('flying', arrTest)).toStrictEqual([
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      }    
    ])
  })
});

describe('filtrarRareza', ()=>{
  it ('is a function', ()=>{
    expect(typeof filtrarOrden).toBe('function');
  });

  it ('filtrarOrden, debería retornar los pokémon ordenados de forma descendente', ()=>{
    expect(filtrarOrden('mayor', arrTest)).toStrictEqual([
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      },
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      },
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      }  
    ])
  })

  it ('filtrarOrden, debería retornar los pokémon ordenados de forma ascendente', ()=>{
    expect(filtrarOrden('menor', arrTest)).toStrictEqual([
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      }, 
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      },
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      }
    ])
  })
});

describe('filtrarRareza', ()=>{
  it ('is a function', ()=>{
    expect(typeof filtrarRareza).toBe('function');
  });

  it ('filtrarRareza, debería retornar los pokémon de rareza normal', ()=>{
    expect(filtrarRareza('normal', arrTest)).toStrictEqual([
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      }           
    ])
  }),
  it ('filtrarRareza, debería retornar los pokémon de rareza mythic', ()=>{
    expect(filtrarRareza('mythic', arrTest)).toStrictEqual([
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      }          
    ])
  }),
  it ('filtrarRareza, debería retornar los pokémon de rareza legendary', ()=>{
    expect(filtrarRareza('legendary', arrTest)).toStrictEqual([
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      }        
    ])
  })
});

describe('filtrarCp', () => {
  it('is a function', () => {
    expect(typeof filtrarCp).toBe('function');
  });
  it('filtrarCp, debería retornar el pokémon ordenado desde el más alto CP', () => {
    expect(filtrarCp('maximo', arrTest)).toStrictEqual([
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      },
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      },
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      }
    ]);
  })
  it('filtrarCp, debería retornar el pokémon ordenado desde el más bajo CP', () => {
    expect(filtrarCp('minimo', arrTest)).toStrictEqual([
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      },
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      },
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      }
    ]);
  })
})

describe('top10', () => {
  it('is a function', () => {
    expect(typeof buscar).toBe('function');
  });
  it('buscar, debería retornar la información del pokémon celebi', () => {
    expect(buscar('251', arrTest)).toStrictEqual([
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      }
    ]);
  })
})

describe('top10', () => {
  it('is a function', () => {
    expect(typeof top10).toBe('function');
  });
  it('top10, debería retornar los pokémon más fuertes', () => {
    expect(top10(arrTest)).toStrictEqual([
      {"num": "251",
        "name": "celebi",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic",
          "grass"
        ],
        "stats": {
          "max-cp": "3265"
        }
      },
      {"num": "144",
        "name": "articuno",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "legendary",
        "type": [
          "ice",
          "flying"
        ],
        "stats": {
          "max-cp": "3051"
        }
      },
      {"num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ],
        "pokemon-rarity": "normal",
        "stats": {
          "max-cp": "1115"
        }
      }
    ]);
  })
})




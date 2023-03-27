import { filtrarRegion } from '../src/data.js';

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


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

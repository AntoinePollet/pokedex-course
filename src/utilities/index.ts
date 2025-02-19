import bug from '/icons/bug.svg'
import dark from '/icons/dark.svg'
import dragon from '/icons/dragon.svg'
import electric from '/icons/electric.svg'
import fairy from '/icons/fairy.svg'
import fighting from '/icons/fighting.svg'
import fire from '/icons/fire.svg'
import flying from '/icons/flying.svg'
import ghost from '/icons/ghost.svg'
import grass from '/icons/grass.svg'
import ground from '/icons/ground.svg'
import ice from '/icons/ice.svg'
import normal from '/icons/normal.svg'
import poison from '/icons/poison.svg'
import psychic from '/icons/psychic.svg'
import rock from '/icons/rock.svg'
import steel from '/icons/steel.svg'
import water from '/icons/water.svg'

export function pokemonSprite(id: string | number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export function pokemonShinySprite(pokemonId: string | number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`
}

export function firstUppercase(pokemonName: string) {
  return pokemonName[0].toUpperCase() + pokemonName.substring(1, pokemonName.length)
}

export function colorFromType(type: string) {
  const colours: any = {
    normal: { style: 'text-black bg-[#A8A77A]', icon: normal, iconColor: 'black' },
    fire: { style: 'text-white bg-[#EE8130]', icon: fire, iconColor: 'white' },
    water: { style: 'text-white bg-[#6390F0]', icon: water, iconColor: 'white' },
    electric: { style: 'text-black bg-[#F7D02C]', icon: electric, iconColor: 'black' },
    grass: { style: 'text-black bg-[#7AC74C]', icon: grass, iconColor: 'black' },
    ice: { style: 'text-black bg-[#96D9D6]', icon: ice, iconColor: 'black' },
    fighting: { style: 'text-white bg-[#C22E28]', icon: fighting, iconColor: 'white' },
    poison: { style: 'text-white bg-[#A33EA1]', icon: poison, iconColor: 'white' },
    ground: { style: 'text-black bg-[#E2BF65]', icon: ground, iconColor: 'black' },
    flying: { style: 'text-black bg-[#A98FF3]', icon: flying, iconColor: 'black' },
    psychic: { style: 'text-white bg-[#F95587]', icon: psychic, iconColor: 'white' },
    bug: { style: 'text-white bg-[#A6B91A]', icon: bug, iconColor: 'white' },
    rock: { style: 'text-black bg-[#B6A136]', icon: rock, iconColor: 'black' },
    ghost: { style: 'text-white bg-[#735797]', icon: ghost, iconColor: 'white' },
    dragon: { style: 'text-white bg-[#6F35FC]', icon: dragon, iconColor: 'white' },
    dark: { style: 'text-white bg-[#705746]', icon: dark, iconColor: 'white' },
    steel: { style: 'text-white bg-[#B7B7CE]', icon: steel, iconColor: 'white' },
    fairy: { style: 'text-black bg-[#D685AD]', icon: fairy, iconColor: 'black' },
  }
  if (type) {
    return colours[type]
  }
  else {
    return colours
  }
}

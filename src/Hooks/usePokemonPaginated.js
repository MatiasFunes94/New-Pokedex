import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../Api/pokemonApi';

const usePokemonPaginated = (deletelist) => {

  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])
  const pokemonsToFetch = 'https://pokeapi.co/api/v2/pokemon?limit=1200'

  const loadPokemons = async () => {
    const resp = await pokemonApi.get(pokemonsToFetch);
    mapPokemonList(resp.data.results)
  }

  const mapPokemonList = (pokemonsToMap) => {
    const newPokemonList = pokemonsToMap.map((pokemon) => {
      const {
        name,
        url
      } = pokemon;
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, picture }
    })
    // setPokemonList(() => [{id: 'left-spacer-1'}, {id: 'left-spacer-2'}, {id: 'left-spacer-3'}, ...newPokemonList])
    setPokemonList(() => [{id: 'left-spacer'}, ...newPokemonList])
    setIsLoading(false);
  }
  
  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    isLoading,
    pokemonList,
    loadPokemons,
  }
}

export default usePokemonPaginated;
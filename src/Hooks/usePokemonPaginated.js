import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../Api/pokemonApi';

const usePokemonPaginated = (deletelist) => {

  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=10')

  const loadPokemons = async () => {
    if (deletelist) {
      setPokemonList([]);
      nextPageUrl.current = 'https://pokeapi.co/api/v2/pokemon?limit=10';
      setIsLoading(false);
      return;
    }
    const resp = await pokemonApi.get(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results)
  }

  const mapPokemonList = (pokemonList) => {
    const newPokemonList = pokemonList.map((pokemon) => {
      const {
        name,
        url
      } = pokemon;
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, picture }
    })
    setPokemonList([...newPokemonList])
    setIsLoading(false);
  }
  
  useEffect(() => {
    loadPokemons();
  }, [deletelist])

  return {
    isLoading,
    pokemonList,
    loadPokemons,
  }
}

export default usePokemonPaginated;
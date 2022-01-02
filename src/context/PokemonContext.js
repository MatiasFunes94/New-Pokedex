import React, { createContext, useState } from 'react';
import usePokemonPaginated from '../Hooks/usePokemonPaginated';

export const PokemonContext = createContext({});

export const PokemonProvider = ({children}) => {

  const { pokemonList, loadPokemons } = usePokemonPaginated(coverStatus);
  const [ coverStatus, setCoverStatus ] = useState(true);

  return (
    <PokemonContext.Provider value={{
      pokemonList,
      loadPokemons,
      coverStatus,
      setCoverStatus
    }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
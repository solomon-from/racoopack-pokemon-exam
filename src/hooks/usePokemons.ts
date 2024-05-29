// src/hooks/usePokemons.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonSprites {
  front_default: string;
}

interface PokemonDetails {
  [x: string]: any;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}

interface Pokemon {
  name: string;
  url: string;
  details?: PokemonDetails;
}

const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  const pokemons = response.data.results;

  // Fetch detailed information for each Pokémon
  const detailedPokemons = await Promise.all(
    pokemons.map(async (pokemon: Pokemon) => {
      const detailsResponse = await axios.get(pokemon.url);
      return {
        ...pokemon,
        details: detailsResponse.data,
      };
    })
  );

  return detailedPokemons;
};

export const usePokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  });
};

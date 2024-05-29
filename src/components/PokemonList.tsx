import React, { useState, useEffect } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Stack, Text, } from '@tamagui/core';
import { useNavigation } from '@react-navigation/native';
import { usePokemons } from '../hooks/usePokemons';
import CustomSpinner from './CustomSpinner';
import SearchBox from './SearchBox';
import { YStack } from '@tamagui/stacks';
import { typeColors } from '../types/colors';
import { capitalizeFirstLetter, formatNumberWithLeadingZeros } from '../utils/string';





const PokemonList = () => {
  const navigation = useNavigation();
  const { data, error, isLoading } = usePokemons();
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <Text>Error loading data...</Text>;
  }

  return (<>
    <YStack flex={.2} zIndex={99} backgroundColor="#EAE8A6" alignItems="center" justifyContent="center">
      <SearchBox onSearch={handleSearch} />
    </YStack>
    <YStack flex={1} zIndex={99} backgroundColor="#FFF" alignItems="center" justifyContent="center">
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', { details: item.details, name: capitalizeFirstLetter(item.name + ' ' + formatNumberWithLeadingZeros(item.details.id))  })}>
            <ImageBackground
              resizeMode="cover"
              source={require('../images/pokemonbg.png')} // Change this path to your actual image path
              style={styles.itemContainer}
              imageStyle={styles.backgroundImage}
            >
              {item.details?.sprites.front_default && (
                <Image
                  source={{ uri: item.details.sprites.front_default }}
                  style={styles.image}
                />
              )}
              <Stack>
                <Text style={styles.textPokemonName}>
                  {capitalizeFirstLetter(item.name)}

                </Text>
                <Text style={styles.textPokemonID}>
                {formatNumberWithLeadingZeros(item.details.id)}
                </Text>
                {item.details && item.details.types.map((type, index) => (
                  <TouchableOpacity  style={ { backgroundColor: typeColors[type.type.name] || '#FFF', borderRadius: 10, alignContent:'center', alignSelf:'center', alignItems:'center', paddingLeft:10, paddingRight: 10, width: 130, }}>
                      <Text
                      key={index}
                      style={styles.textPokemonType}
                    >
                    
                    </Text>
                    <Text
                      key={index}
                      style={styles.textPokemonType}
                    >
                      {capitalizeFirstLetter(type.type.name)}
                      {index < item.details.types.length - 1 ? ' ' : ''}
                    </Text>
                  </TouchableOpacity>
                ))}
              </Stack>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </YStack>
  </>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 16,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 200,
    backgroundColor: '#EAE8A6',
    borderRadius: 15,
  },
  image: {
    width: 96,
    height: 96,
    marginRight: 10,

  },
  backgroundImage: {
    marginLeft: -100,
    marginTop: 30,
    height: 210,
    opacity: .5,
    width: 230,

  },
  textPokemonName: {
    fontSize: 30,
    color: '#02385A',
    fontWeight: 700,
    fontFamily: 'Roboto_400Regular', // Apply Roboto font
  },  
  
  textPokemonType: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 700,
    fontFamily: 'Roboto_400Regular', // Apply Roboto font
    marginTop: -5
  },  
  textPokemonID: {
    fontSize: 22,
    color: '#000',
    fontWeight: 700,
    fontFamily: 'Roboto_400Regular', // Apply Roboto font
  },
});

export default PokemonList;

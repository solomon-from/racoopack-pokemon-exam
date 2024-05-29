import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Stack, Text } from '@tamagui/core';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import About from './PokemonDetailsTabs/About';
import BaseStats from './PokemonDetailsTabs/BaseStats';
import Evolutions from './PokemonDetailsTabs/Evolutions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from '../utils/string';
import { typeColors } from '../types/colors';

const Tab = createMaterialTopTabNavigator();

const PokemonDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { details, name } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);


  return (
    <Stack flex={1} padding="$md">
      {details.sprites?.front_default && (
        <Image
          source={{ uri: details.sprites.front_default }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
      )}

      { details &&  details.types.map((type, index) => (
        <TouchableOpacity style={{ backgroundColor: typeColors[type.type.name] || '#FFF', borderRadius: 10, alignContent: 'center', alignSelf: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, width: 130, }}>
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
            {index <  details.types.length - 1 ? ' ' : ''}
          </Text>
        </TouchableOpacity>
      ))}
      <Tab.Navigator>
        <Tab.Screen name="About">
          {() => <About details={details} />}
        </Tab.Screen>
        <Tab.Screen name="Base Stats">
          {() => <BaseStats details={details} />}
        </Tab.Screen>
        <Tab.Screen name="Evolutions">
          {() => <Evolutions details={details} />}
        </Tab.Screen>
      </Tab.Navigator>
    </Stack>
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

export default PokemonDetails;

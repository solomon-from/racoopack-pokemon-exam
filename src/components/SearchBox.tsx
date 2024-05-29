import { YStack } from '@tamagui/stacks';
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
 
const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <YStack space="$md" padding="$md" flexDirection="row" alignItems="center" >
    <TextInput
        style={styles.input}
        placeholder="Search Pokédex"
        placeholderTextColor="#999"
      />
   
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
 
  },
  input: {
    flex: 1,
    borderWidth: 2,
    width: 343, 
    height: 44, 
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderRadius: 60,  
    marginTop: 40,
    backgroundColor: '#fff'
  },
});

export default SearchBox;

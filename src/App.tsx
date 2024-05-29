// src/App.tsx
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet } from 'react-native';
import PokemonList from './components/PokemonList';
import queryClient from './queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <PokemonList />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider, Text } from '@tamagui/core';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import PokemonList from './src/components/PokemonList';
import PokemonDetails from './src/components/PokemonDetails';
import queryClient from './src/queryClient';
import config from './tamagui.config';
import { YStack } from '@tamagui/stacks';

const StackNavigator = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <NavigationContainer>
          <YStack flex={1} zIndex={99} backgroundColor="#EAE8A6">
            <StackNavigator.Navigator>
              <StackNavigator.Screen
                name="PokemonList"
                component={PokemonList}
                options={{ headerShown: false }}
              />
              <StackNavigator.Screen name="PokemonDetails" component={PokemonDetails} />
            </StackNavigator.Navigator>
          </YStack>
        </NavigationContainer>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}

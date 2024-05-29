import React from 'react';
import { Text } from '@tamagui/core';
import { View } from 'react-native';

const About = ({ details }) => {
  return (
    <View>
      <Text fontSize={18} color="$text">
        Name: {details.name}
      </Text>
      <Text fontSize={18} color="$text">
        Height: {details.height}
      </Text>
      <Text fontSize={18} color="$text">
        Weight: {details.weight}
      </Text>
      <Text fontSize={18} color="$text">
        Types: {details.types.map((type) => type.type.name).join(', ')}
      </Text>
    </View>
  );
};

export default About;

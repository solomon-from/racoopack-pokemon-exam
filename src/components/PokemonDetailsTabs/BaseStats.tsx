import React from 'react';
import { Text } from '@tamagui/core';
import { View } from 'react-native';

const BaseStats = ({ details }) => {
  return (
    <View>
      {details.stats.map((stat, index) => (
        <Text key={index} fontSize={18} color="$text">
          {stat.stat.name}: {stat.base_stat}
        </Text>
      ))}
    </View>
  );
};

export default BaseStats;


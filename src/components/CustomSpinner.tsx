// src/components/CustomSpinner.tsx
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Stack } from '@tamagui/core';

const CustomSpinner = () => {
  return (
    <Stack alignItems="center" justifyContent="center" flex={1}>
      <ActivityIndicator size="large" color="#00f" />
    </Stack>
  );
};

export default CustomSpinner;


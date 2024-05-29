// tamagui.config.ts
import { createTamagui, createTokens } from '@tamagui/core';

const tokens = createTokens({
  colors: {
    primary: '#00f',
    secondary: '#0f0',
    text: '#000',
    background: '#fff',
  },
  space: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
  },
  fontSizes: {
    small: 14,
    medium: 18,
    large: 24,
  },
});

const themes = {
  light: {
    background: tokens.colors.background,
    text: tokens.colors.text,
    primary: tokens.colors.primary,
    secondary: tokens.colors.secondary,
  },
  dark: {
    background: '#000',
    text: '#fff',
    primary: tokens.colors.primary,
    secondary: tokens.colors.secondary,
  },
};

const config = createTamagui({
  tokens,
  themes,
  defaultTheme: 'light',
});

export default config;

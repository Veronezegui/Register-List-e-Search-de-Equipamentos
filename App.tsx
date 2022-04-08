import React from 'react';
import Apploading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'


import theme from './src/global/styles/theme'
import { EquipTi } from './src/pages/EquipTI';
import { ListEquip } from './src/pages/ListEquip';
import { Search } from './src/pages/SearchEquips';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <Apploading />
  }
  return (
    <ThemeProvider theme={theme}>
        <Search/>
    </ThemeProvider>
  );
}

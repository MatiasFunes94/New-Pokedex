import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PokemonProvider} from './src/context/PokemonContext';
import Home from './src/screens/Home';

const AppState = ({children}) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Home />
      </AppState>
    </NavigationContainer>
  );
};

export default App;

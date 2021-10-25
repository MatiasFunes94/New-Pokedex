import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Center from './src/components/Center/Center';
import Cover from './src/components/Cover/Cover';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import usePokemonPaginated from './src/Hooks/usePokemonPaginated';

const App = () => {

  const [coverStatus, setCoverStatus] = useState(true)

  const { pokemonList } = usePokemonPaginated(coverStatus);

  const dimensions = useWindowDimensions();

  const translationCover = useSharedValue(0);
  const turnOnScreen = useSharedValue(0);
  const showTitlePokedex = useSharedValue(0);
  const showPokemons = useSharedValue(0);

  const coverStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationCover.value}],
    };
  });

  const screenOnStyle = useAnimatedStyle(() => {
    return {
      opacity: turnOnScreen.value,
    }
  })

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: showTitlePokedex.value,
    }
  })

  const showPokemonsStyle = useAnimatedStyle(() => {
    return {
      opacity: showPokemons.value,
    }
  })

  const toggleCover = () => {
    if (translationCover.value === 0) {
      setCoverStatus(false)
      translationCover.value = withTiming(dimensions.width, {duration: 500}, () => {
        turnOnScreen.value = withTiming(1, {duration: 500}, () => {
          showTitlePokedex.value = withTiming(1, {duration: 350}, () => {
            showTitlePokedex.value = withTiming(0, {duration: 350}, () => {
              showPokemons.value = withTiming(1, {duration: 500})
            })
          })
        })
      });
    } else {
      setCoverStatus(true)
      translationCover.value = withTiming(0, {duration: 500}, () => {
        turnOnScreen.value = withTiming(0, {duration: 500}, () => {
          showTitlePokedex.value = withTiming(0, {duration: 350}, () => {
            showTitlePokedex.value = withTiming(1, {duration: 350}, () => {
              showPokemons.value = withTiming(0, {duration: 250})
            })
          })
        })
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Cover
          coverStyle={coverStyle}
          toggleCover={toggleCover}
          showPokemons={showPokemons}
          turnOnScreen={turnOnScreen}
        />
        <Center
          screenOnStyle={screenOnStyle}
          titleStyle={titleStyle}
          pokemonList={pokemonList}
          showPokemonsStyle={showPokemonsStyle}
        />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
});

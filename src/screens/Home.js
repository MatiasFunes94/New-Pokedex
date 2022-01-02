import React, { useContext, useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  SafeAreaView,
  Animated as RNAnimated,
} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { PokemonContext } from '../context/PokemonContext';
import Center from '../components/Center/Center';
import Cover from '../components/Cover/Cover';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Home = () => {

  const { pokemonList, loadPokemons, setCoverStatus } = useContext(PokemonContext)

  const dimensions = useWindowDimensions();

  const translationCover = useSharedValue(0);
  const turnOnScreen = useSharedValue(0);
  const showTitlePokedex = useSharedValue(0);
  const showPokemons = useRef(new RNAnimated.Value(0)).current

  const currentIndex = useRef(0);
  const flatlistRef = useRef(null);

  const coverStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationCover.value}],
    };
  });

  const screenOnStyle = useAnimatedStyle(() => {
    return {
      opacity: turnOnScreen.value,
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: showTitlePokedex.value,
    };
  });
  
  const toggleCover = () => {
    if (translationCover.value === 0) {
      setCoverStatus(false);
      translationCover.value = withTiming(
        dimensions.width,
        {duration: 500},
        () => {
          turnOnScreen.value = withTiming(1, {duration: 500}, () => {
            showTitlePokedex.value = withTiming(1, {duration: 350}, () => {
              showTitlePokedex.value = withTiming(0, {duration: 750});
            });
          });
        },
      );
    } else {
      setCoverStatus(true);
      translationCover.value = withTiming(0, {duration: 500}, () => {
        turnOnScreen.value = withTiming(0, {duration: 500}, () => {
          showTitlePokedex.value = withTiming(0, {duration: 350}, () => {
            showTitlePokedex.value = withTiming(1, {duration: 750});
          });
        });
      });
    }
  };

  const handleInitialRender = async () => {
    turnOnScreen.value = withTiming(0, {duration: 250})
    toggleCover();
    setTimeout(() => {
      RNAnimated.timing(
        showPokemons,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        },
      ).start();
    }, 1900);
  }

  const scrollTo = () => {
    flatlistRef.current.scrollToIndex({index: currentIndex.current}) 
  }

  const onPressUp = () => {
    if (currentIndex.current === 0) return;
    currentIndex.current = currentIndex.current - 1
    scrollTo();
  }

  const onPressDown = () => {
    currentIndex.current = currentIndex.current + 1
    scrollTo();
  }

  return (
    <View style={{flex: 1}}>
        <StatusBar hidden />
        <SafeAreaView style={styles.container}>
          <Header />
          <Cover
            coverStyle={coverStyle}
            handleInitialRender={handleInitialRender}
          />
          <Center
            screenOnStyle={screenOnStyle}
            titleStyle={titleStyle}
            showPokemonsStyle={showPokemons}
            pokemonList={pokemonList}
            loadPokemons={loadPokemons}
            flatlistRef={flatlistRef}
          />
          <Footer
            onPressUp={onPressUp}
            onPressDown={onPressDown}
          />
        </SafeAreaView>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
});

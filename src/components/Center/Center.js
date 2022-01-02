import React, {useRef} from 'react';
import {View, Image, Text, Animated as RNAnimated, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

import styles from './styles';

const { height } = Dimensions.get('window');

const HEIGHT_POKEMON = height * 0.08363

const Center = ({
  screenOnStyle,
  titleStyle,
  pokemonList,
  loadPokemons,
  showPokemonsStyle,
  flatlistRef,
}) => {

  const uriPokedexTitle =
    'https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png';

    const scrollYAnimated = useRef(new RNAnimated.Value(0)).current;

    const RenderPokemonItem = ({item, index}) => {
      const inputRange = [
        (index - 2) * HEIGHT_POKEMON,
        (index - 1) * HEIGHT_POKEMON,
        (index) * HEIGHT_POKEMON,
      ];
      const opacity = scrollYAnimated.interpolate({
        inputRange,
        outputRange: [0.4, 1, 0.4],
        extrapolate: 'clamp',
      })
      const translateX = scrollYAnimated.interpolate({
        inputRange,
        outputRange: [ 20, -5, 20],
        extrapolate: 'clamp',
      })
    
      // if(item.id.includes('left-spacer')) {
      //   return <View style={{height: HEIGHT_POKEMON }} />
      // }

      if(item.id === 'left-spacer') {
        return <View style={{height: HEIGHT_POKEMON  }} />
      }
    
      return (
        <RNAnimated.View
          key={item.id}
          style={[styles.containerPokemonsScreen, {opacity, transform: [{translateX}]}]}>
          <Image source={{uri: item.picture}} style={{height: 70, width: 70}} />
          <View style={{marginLeft: 10}} />
          <View style={styles.containerPokemonNameId}>
            <Image
              source={require('../../assets/pokeball.png')}
              style={{height: 35, width: 35}}
            />
            <Text style={{color: '#000', fontSize: 18, marginLeft: 5}}>
              {item.id}
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                marginLeft: 5,
                textTransform: 'uppercase',
              }}
              adjustsFontSizeToFit
              numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        </RNAnimated.View>
      );
    };

  return (
    <View style={styles.centerContainer}>
      <View style={styles.centerSquareExt}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.centerSmallGrayButtons} />
          <View style={{...styles.centerSmallGrayButtons, marginLeft: 10}} />
        </View>
        <View style={[styles.centerSquareInt]}>
          <Animated.View style={[styles.centerSquareInt2, screenOnStyle]}>
            <Animated.Image
              source={{uri: uriPokedexTitle}}
              style={[
                {height: 80, width: 250, position: 'absolute'},
                titleStyle,
              ]}
            />
              <RNAnimated.FlatList
                ref={flatlistRef}
                data={pokemonList}
                keyExtractor={(item) => String(item.id)}
                style={[{opacity: showPokemonsStyle}]}
                snapToInterval={HEIGHT_POKEMON}
                snapToEnd={'false'}
                decelerationRate={'fast'}
                onScroll={RNAnimated.event(
                  [{nativeEvent: {contentOffset: {y: scrollYAnimated}}}],
                  {useNativeDriver: true},
                )}
                scrollEventThrottle={16}
                removeClippedSubviews
                maxToRenderPerBatch={10}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                showsVerticalScrollIndicator={false}
                renderItem={RenderPokemonItem}
              />
            </Animated.View>
        </View>
        <View style={styles.containerButtonRedAudio}>
          <View style={styles.centerButtonRed} />
          <View style={styles.centerContainerAudioOut}>
            <View style={styles.centerAudioOut} />
            <View style={styles.centerAudioOut} />
            <View style={styles.centerAudioOut} />
            <View style={styles.centerAudioOut} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Center;

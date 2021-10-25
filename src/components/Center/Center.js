import React from 'react';
import {View, Image, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import styles from './styles';

const Center = ({screenOnStyle, titleStyle, showPokemonsStyle, pokemonList}) => {
  const uriPokedexTitle = 'https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png';
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
            <Animated.ScrollView style={[showPokemonsStyle]} showsVerticalScrollIndicator={false}>
              {pokemonList.map(({name, picture, id}) => {
                return (
                  <Animated.View key={id} style={styles.containerPokemonsScreen}>
                    <Image
                      source={{uri: picture}}
                      style={{height: 70, width: 70}}
                    />
                    <View style={styles.containerPokemonNameId}>
                      <Image
                        source={require('../../assets/pokeball.png')}
                        style={{height: 35, width: 35}}
                      />
                      <Text style={{color: '#000', fontSize: 18, marginLeft: 5}}>{id}</Text>
                      <Text style={{color: '#000', fontSize: 18, marginLeft: 5, textTransform: 'uppercase'}} adjustsFontSizeToFit numberOfLines={1} >{name}</Text>
                    </View>
                  </Animated.View>
                );
              })}
            </Animated.ScrollView>
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

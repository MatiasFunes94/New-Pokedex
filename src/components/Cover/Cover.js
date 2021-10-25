import React from 'react';
import {View, Dimensions, TouchableOpacity } from 'react-native';
import Animated, {withTiming} from 'react-native-reanimated';

import styles from './styles';

const {width} = Dimensions.get('window');

const Cover = ({ coverStyle, toggleCover, showPokemons, turnOnScreen }) => {
  const onPress = () => {
    toggleCover();
    turnOnScreen.value = withTiming(0, {duration: 250})
    showPokemons.value = withTiming(0, {duration: 250})
  }
  return (
    <>
      <View style={{height: 2, width, backgroundColor: '#000'}} />
      <Animated.View
        style={[styles.coverContainer, coverStyle]}>
        <TouchableOpacity style={styles.coverButtonToOpen} onPress={onPress} activeOpacity={0.5} />
        <View style={styles.coverLineBotton} />
      </Animated.View>
    </>
  );
};

export default Cover;

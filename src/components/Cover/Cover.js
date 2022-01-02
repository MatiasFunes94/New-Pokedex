import React from 'react';
import {View, Dimensions, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import styles from './styles';

const {width} = Dimensions.get('window');

const Cover = ({ coverStyle, handleInitialRender }) => {
  return (
    <>
      <View style={{height: 2, width, backgroundColor: '#000'}} />
      <Animated.View
        style={[styles.coverContainer, coverStyle]}>
        <TouchableOpacity style={styles.coverButtonToOpen} onPress={handleInitialRender} activeOpacity={0.5} />
        <View style={styles.coverLineBotton} />
      </Animated.View>
    </>
  );
};

export default Cover;

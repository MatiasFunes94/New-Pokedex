import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBigButtonExt}>
        <View style={styles.headerBigButtonInt} />
      </View>
      <View style={{marginLeft: 40, flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            ...styles.headerItemSmallButton,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            ...styles.headerItemSmallButton,
            backgroundColor: 'yellow',
            marginLeft: 10,
          }}
        />
        <View
          style={{
            ...styles.headerItemSmallButton,
            backgroundColor: 'green',
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Header;

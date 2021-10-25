import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';

import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={{justifyContent: 'space-between', height: 180}}>
        <View style={styles.footerContainerButtonsInput}>
          <View style={styles.footerBlueButton} />
          <View
            style={{
              ...styles.footerSquashButtons,
              backgroundColor: 'green',
              marginLeft: 30,
            }}
          />
          <View
            style={{
              ...styles.footerSquashButtons,
              backgroundColor: 'orange',
              marginLeft: 20,
            }}
          />
        </View>
        <View>
          <TextInput style={styles.footerInput} />
        </View>
      </View>
      <View style={styles.footerContainerRows}>
        <View style={{height: 40, width: 40, backgroundColor: '#000', alignSelf: 'center'}}>
          <Octicon name={'arrow-up'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingTop: 10}} />
        </View>
        <View style={{height: 40, width: '100%', backgroundColor: '#000', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Octicon name={'arrow-left'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingLeft: 10}} />
          <Octicon name={'arrow-right'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingRight: 10}} />
        </View>
        <View style={{height: 40, width: 40, backgroundColor: '#000', alignSelf: 'center'}}>
          <Octicon name={'arrow-down'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingTop: 5}} />
        </View>
      </View>
    </View>
  );
};

export default Footer;

import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';

import styles from './styles';

const Footer = ({onPressUp, onPressDown}) => {
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
        <TouchableOpacity activeOpacity={0.6} style={{height: 40, width: 40, backgroundColor: '#000', alignSelf: 'center'}} onPress={onPressUp}>
          <Octicon name={'arrow-up'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingTop: 10}} />
        </TouchableOpacity>
        <View style={{height: 40, width: '100%', backgroundColor: '#000', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity activeOpacity={0.6} style={{justifyContent: 'center'}}>
            <Octicon name={'arrow-left'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingLeft: 10}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={{justifyContent: 'center'}}>
            <Octicon name={'arrow-right'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingRight: 10}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={{height: 40, width: 40, backgroundColor: '#000', alignSelf: 'center'}} onPress={onPressDown}>
          <Octicon name={'arrow-down'} size={25} color={'#fff'} style={{alignSelf: 'center', paddingTop: 5}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

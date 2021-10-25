import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  coverContainer: {
    position: 'absolute',
    backgroundColor: '#c8333c',
    height,
    width,
    top: 125,
    zIndex: 1,
    justifyContent: 'center',
  },
  coverButtonToOpen: {
    height: 40,
    width: 40,
    backgroundColor: 'orange',
    transform: [{rotate: '45deg'}],
    right: 20,
    bottom: 60,
  },
  coverLineBotton: {
    height: 20,
    width: 300,
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 200
  }
});

export default styles;

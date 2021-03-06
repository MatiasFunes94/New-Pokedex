import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  centerContainer: {
    flex: 0.65,
    width,
    backgroundColor: '#c8333c',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  centerSquareExt: {
    flex: 0.9,
    // height: 420,
    width: 350,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10
  },
  centerSquareInt: {
    flex: 0.95,
    // height: 335,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  centerSquareInt2: {
    // height: 340,
    flex: 1,
    width: 300,
    backgroundColor: '#72bacc',
    borderRadius: 20,
    borderColor: '#000',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSmallGrayButtons: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: 'gray',
    bottom: 10,
  },
  containerPokemonsScreen: {
    // flexWrap: 'wrap',
    // height: height * 0.0838,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerPokemonNameId: {
    backgroundColor: '#eae0a8',
    width: width * 0.5,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
    alignItems: 'center',
  },
  containerButtonRedAudio: {
    height: 40,
    width: 300,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerButtonRed: {
    height: 30,
    width: 30,
    backgroundColor: '#c8333c',
    borderRadius: 30,
    alignSelf: 'flex-end'
  },
  centerContainerAudioOut: {
    height: 35,
    width: 40,
    justifyContent: 'space-around',
    alignSelf: 'flex-end'
  },
  centerAudioOut: {
    height: 2,
    width: 35,
    backgroundColor: '#000',
  },
});

export default styles;

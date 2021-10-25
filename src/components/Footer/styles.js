import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.2,
    // height: 200,
    width,
    backgroundColor: '#c8333c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
  },
  footerContainerButtonsInput: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  footerBlueButton: {
    backgroundColor: '#1a1ae0',
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  footerSquashButtons: {
    height: 10,
    width: 50,
    borderRadius: 10,
  },
  footerInput: {
    backgroundColor: '#efe869',
    width: 230,
    borderRadius: 10,
    bottom: 30,
  },
  footerContainerRows: {
    flex: 0.8,
    height: 120,
    justifyContent: 'flex-end',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    // height: 100,
    backgroundColor: '#c8333c',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerBigButtonExt: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  headerBigButtonInt: {
    height: 55,
    width: 55,
    borderRadius: 40,
    backgroundColor: '#00c9e9',
  },
  headerContainerSmallButtons: {
    marginLeft: 40,
    flex: 1,
    flexDirection: 'row',
  },
  headerItemSmallButton: {
    height: 20,
    width: 20,
    bottom: 20,
    borderRadius: 20,
  },
});

export default styles;

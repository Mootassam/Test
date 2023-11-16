import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: '#fff',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 11,
    gap: 20,
  },
  titleproduct: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    color: '#353840',
    maxHeight: 50,
  },
  product: {
    paddingTop: 4,
    maxWidth: 170,
  },
  vip0: {
    backgroundColor: '#FEE4E4',
    width: 50,
    height: 25,
    position: 'absolute',
    left: 0,
    zIndex: 100,
  },
  textvip: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

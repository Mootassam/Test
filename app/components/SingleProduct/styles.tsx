import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  singleProduct: {
    flexBasis: '47%',
    height: 234,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  vip0: {
    backgroundColor: '#FEE4E4',
    width: 50,
    height: 25,
    position: 'absolute',
    left: 0,
    zIndex: 100,
  },
  vip1: {
    backgroundColor: '#E8AD41',
    width: 50,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  textvip: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  imageProduct: {
    alignSelf: 'center',
    resizeMode: 'center',
  },
  groupProducts: {
    marginBottom: 20,
  },
  productTitle: {
    paddingTop: 10,
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 12,
  },
});

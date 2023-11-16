import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  SingleTransaction: {},
  circleSend: {
    width: 32,
    height: 32,
    backgroundColor: '#E1473D',
  },
  circleReceived: {
    width: 32,
    height: 32,
    backgroundColor: '#E2FEE8',
    borderRadius: 50,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center'
  },
  smalltitle: {
    fontSize: 18,
    color: '#030D25',
  },
  money: {
    color: '#030D25',
    fontSize: 18,
  },

  success: {
    color: '#85BB65',
  },
  cancel: {
    color: '#E1473D',
  },
});

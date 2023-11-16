import {StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  cricle: {
    width: 45,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  notification: {
    width: 45,
    height: 45,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#703DBB',
    borderRadius: 15,
  },
  content: {
    height: '100%',
    width: '100%',
    paddingTop: 58,
  },
  linearGradient: {
    height: '100%',
  },
  amoutncontent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
  },

  availablebalance: {
    color: '#B8B4BE',
    fontSize: 14.3,
    fontWeight: '400',
  },
  amount: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '500',
  },
  quickActions: {
    backgroundColor: '#fff',
    width: 328,
    height: 76,
    paddingTop: 15,
    borderRadius: 14,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
    zIndex: 1,
  },
  allactions: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 27,
    borderRadius: 24,
    paddingTop: 61,
    paddingLeft: 26,

    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 16.1,
    fontWeight: '500',
    color: '#000',
  },
  cadre: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 6,
    maxWidth: 70,
  },

  icon: {
    width: 54,
    height: 54,
    backgroundColor: '#F7F5FA',
    borderRadius: 16,
  },
  text: {
    fontSize: 12,
    marginTop: 8,
    color: '#000',
    maxWidth: 70,
    textAlign: 'center',
  },
  small: {
    width: 26,
    height: 25,
    backgroundColor: '#EDE2FD',
  },
});

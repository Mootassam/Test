import {StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  cricle: {
    width: 45,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
  },
  notification: {
    width: 45,
    height: 45,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#703DBB',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: '100%',
    width: '100%',
    paddingTop: 20,
  },
  linearGradient: {
    height: '100%',
    backgroundColor: '#1EA073',
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
    color: '#000704',
    fontSize: 20,
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
    backgroundColor: '#fff',
    position: 'relative',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
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
    paddingTop: 16,
  },
  icon: {
    padding: 13,
    backgroundColor: '#F7F5FA',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 5,
  },
  text: {
    fontSize: 12,
    marginTop: 8,
    color: '#000',
    maxWidth: 70,
    textAlign: 'center',
    fontWeight: '500',
  },
  small: {
    width: 30,
    height: 25,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  LoginComponenet: {
    paddingTop: 81,
    paddingLeft: 22,
    paddingRight: 22,
    flex: 1,

    justifyContent: 'center',
  },
  successImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#1E232C',
    maxWidth: 280,
    marginTop: 35,
  },
  forgetPassword: {
    fontSize: 16,
    color: '#8391A1',
    maxWidth: 331,
    marginTop: 10,
    lineHeight: 24,
    textAlign: 'center',
  },
  Login: {
    backgroundColor: '#1E232C',
    marginTop: 33,
    height: 50,
    borderRadius: 7,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLogin: {
    color: '#fff',
    textAlign: 'center',
  },
});

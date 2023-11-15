import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  LoginComponenet: {
    paddingTop: 81,
    paddingLeft: 22,
    paddingRight: 22,
  },
  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#1E232C',
    maxWidth: 280,
  },
  ViewInput: {
    display: 'flex',
    flexDirection: 'row',
    gap: 17,
    marginTop: 32,
  },
  inputOtp: {
    height: 60,
    width: 74,
    backgroundColor: '#E8ECF4',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    fontSize: 22,
    color: '#1E232C',
    padding: 18,
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

  forgetPassword: {
    fontSize: 16,
    color: '#8391A1',
    maxWidth: 331,
    marginTop: 10,
    lineHeight: 24,
  },
});

// LoginComponenet
// textWelcome
// forgetPassword
// ViewInput
// Login
// textLogin

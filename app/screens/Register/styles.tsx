import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  LoginComponenet: {
    paddingTop: 43,
    paddingLeft: 22,
    paddingRight: 22,
  },
  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#1E232C',
    maxWidth: 300,
  },
  ViewInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 32,
  },
  input: {
    height: 56,
    width: 'auto',
    backgroundColor: '#F7F8F9',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    fontSize: 15,
    color: '#8391A1',
    padding: 18,
  },
  textForgetPassword: {
    paddingTop: 15,
    color: '#6A707C',
    textAlign: 'right',
    fontSize: 14,
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    color: '#24282C',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 25,
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
  registerNow: {
    color: '#35C2C1',
    letterSpacing: 0.15,
  },
});

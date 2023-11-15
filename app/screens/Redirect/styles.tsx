import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
    position: 'absolute',
    width: '100%',
    bottom: 30,
  },
  Login: {
    backgroundColor: '#1E232C',
    width: '100%',
    height: 50,
    borderRadius: 7,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Register: {
    height: 50,
    width: 'auto',
    borderRadius: 7,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  textLogin: {
    color: '#fff',
    textAlign: 'center',
  },
  textregister: {
    color: '#000',
    textAlign: 'center',
  },

  buttonStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 43,
  },
  contiueGuest: {
    color: '#35C2C1',
    letterSpacing: 0.15,
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  Logo: {
    alignSelf: 'center',
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    paddingLeft: 17,
    paddingRight: 17,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 45,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    paddingTop: 24,
    paddingLeft: 18,
    fontSize: 12,
    color: '#868889',
    fontWeight: '500',
    width: '100%',
    marginTop: 37,
  },
  review: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  smalldescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#868889',
    letterSpacing: 0.45,
    width: 299,
    textAlign: 'center',
    paddingTop: 11,
    marginBottom: 26,
  },
  startRating: {
    bottom: 0,
    width: 'auto',
    backgroundColor: '#000',
    height: 60,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    paddingLeft: 17,
    paddingRight: 17,
    position: 'absolute',
    bottom: 36,
    width: '100%',
  },

  reviewButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

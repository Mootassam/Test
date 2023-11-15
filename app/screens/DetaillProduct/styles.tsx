import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detaillProduct: {
    paddingTop: 26,
    paddingLeft: 16,
  },
  amount: {
    color: '#28B446',
    fontSize: 18,
    fontWeight: '600',
  },
  titleProduct: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    marginTop: 17,
    color: '#868889',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21,
    maxWidth: 330,
  },

  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 9,
  },
  numberReview: {
    color: '#868889',
    fontSize: 12,
    fontWeight: '500',
  },

  start: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
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
    width:'100%'
  },

  review: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

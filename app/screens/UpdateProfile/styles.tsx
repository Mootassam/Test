import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    paddingTop: 34,
    paddingLeft: 17,
    paddingRight: 17,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  singleDetail: {
    paddingTop: 6,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 6,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    gap: 21,
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5,
    marginTop: 13,
    marginBottom: 34,
  },
});

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
    border: 0,
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

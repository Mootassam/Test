import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  boxCategory: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 21,
    paddingLeft: 17,
    paddingRight: 17,
    columnGap: 10,
    rowGap: 14,
    height: '100%',
  },
  singleCategory: {
    backgroundColor: '#F4F5F9',
    flexBasis: '31%',
    height: 120,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    paddingTop: 12,
  },
  circle: {
    width: 66,
    height: 66,
    borderRadius: 50,
    backgroundColor: '#DCF4F5',
  },

  text: {
    color: '#868889',
    fontSize: 10,
    fontWeight: '500',
  },
});

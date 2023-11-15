import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  categories: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'space-between',
  },

  FeautredProduct: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'space-between',
  },

  Textcategories: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  scrollViewContent: {
    gap: 21,
    paddingHorizontal: 16,
    marginTop: 16, // Adjust as needed to add spacing at the beginning and end
  },
  scrollViewproduct: {
    paddingStart: 17, // Padding left
    paddingEnd: 17,
    paddingTop: 21,
  },
  categoriesItem: {
    width: 52,
    height: 52,
    backgroundColor: '#E6F2EA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  categoriesSingle: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    gap: 11,
  },
  catergorytitle: {
    color: '#868889',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: '500',
  },

  listProduct: {
    flexDirection: 'row', // Arrange items horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between',
    gap: 18,
  },
  groupProducts: {
    marginBottom: 20,
  },
  home: {
    marginBottom: 60,
  },

  textInput: {
    backgroundColor: '#fff',
    textAlign: 'left',
  },
});

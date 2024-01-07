import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    margin: 17,
    marginBottom: 70,
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
  boxContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    padding: 20,
  },
  invitationLink: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  shareLink: {
    display: 'flex',
  },
  copyLink: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
  link: {
    color: 'blue',
    width: '80%',
  },
  team: {},
  sharelinks: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  textwhite: {
    color: '#000',
  },
  image: {
    width: '100%',
    height: 35,
    marginTop: 15,
  },

  boxIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: 40,
  },
  iconqf: {width: '100%', height: 70},
  textIcon: {
    maxWidth: 102,
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    gap: 9,
  },
  smallHeader: {
    textAlign: 'center',
    fontSize: 9,
    color: 'black',
    marginBottom: -10,
  },
});

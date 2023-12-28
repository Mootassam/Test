import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    margin: 17,
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

  teamsize: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  detaillteam: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },

  detaillfinance: {
    backgroundColor: '#000',
    color: 'white',
   
  },
  teamnumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },

  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  earning: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

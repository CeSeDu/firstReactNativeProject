import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'grid',
    gap: 20,
    paddingBottom: 50,
  },
  bannerImage: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 2,
  },
  bannerContainer: {
    padding: 0,
    margin:0,
    position: 'relative',
  },
  bannerText:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.4)',
    fontSize:12,
    width: Dimensions.get('window').width / 2,
  },
  appTitle: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 5,

  },
  cardContainer: {
    backgroundColor: '#F2F2F2',
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 2,
    padding: 12,
    marginTop: 20,
    marginBottom: 50,
    margin: 20,
  },
  image: {height: Dimensions.get('window').height / 4},
  title: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 5,
  },
  description: {
    fontSize: '10px',
    padding: 5,
    fontWeight: 'light',
  },
  author: {
    textAlign: 'right',
    fontSize: 10,
  }
});

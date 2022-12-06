import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#76BCAA',
  },
  viewList: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.023,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.152,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'flex-start',

    borderColor: '#565755',
  },
  item: {
    width: Dimensions.get('window').width * 0.58,
  },
  itemTitle: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  listDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'justify',
  },
  image: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').height * 0.15,
    marginRight: -8,
    borderRadius: 5,
  },
});

export default styles;

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
    height: Dimensions.get('window').height * 0.18,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#565755',
  },
  item: {
    width: Dimensions.get('window').width * 0.58,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  listDescription: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.14,
    marginRight: -8,
    marginTop: -10,
    borderRadius: 5,
  },
});

export default styles;

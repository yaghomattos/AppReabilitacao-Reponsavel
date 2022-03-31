import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  background: {
    flex: 1,
  },
  viewList: {
    height: '100%',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.152,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item: {
    width: Dimensions.get('window').width * 0.79,
  },
  itemTitle: {
    fontSize: 20,
    color: '#000',
  },
  image: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').height * 0.148,
    borderRadius: 5,
  },
  button: {
    color: '#000',
    margin: 15,
  },
  add: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '85%',
    left: '80%',
    borderRadius: 20,
    backgroundColor: '#000',
  },
});

export default styles;

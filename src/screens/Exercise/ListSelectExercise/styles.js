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
    height: '96%',
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
    alignItems: 'flex-start',
    borderColor: '#565755',
  },
  item: {
    width: Dimensions.get('window').width * 0.5,
  },
  itemTitle: {
    fontSize: 18,
    color: '#000',
  },
  image: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    color: '#000',
  },
  add: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height * 0.818,
    left: Dimensions.get('window').width * 0.5 - 30,
    backgroundColor: '#000',
  },
});

export default styles;

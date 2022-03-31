import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  viewList: {
    flex: 1,
    marginTop: Dimensions.get('window').height * 0.041,
  },
  item: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.082,
    marginTop: Dimensions.get('window').height * 0.01,
    marginHorizontal: Dimensions.get('window').width * 0.06,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    width: '82%',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  deleteButton: {
    paddingRight: 20,
  },
  add: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height * 0.82,
    left: Dimensions.get('window').width * 0.76,
    borderRadius: 20,
    backgroundColor: '#000',
  },
});

export default styles;

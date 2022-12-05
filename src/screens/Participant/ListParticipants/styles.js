import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {},
  input: {
    width: Dimensions.get('window').width * 0.73,
    height: Dimensions.get('window').height * 0.06,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fefefe',
  },
  add: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  viewList: {
    flex: 1,
    marginTop: Dimensions.get('window').height * 0.031,
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
    fontSize: 18,
    color: '#000',
  },
  deleteButton: {
    paddingRight: 20,
  },
});

export default styles;

import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fefefe',
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
  itemTitle: {
    fontSize: 18,
    color: '#000',
  },
});

export default styles;

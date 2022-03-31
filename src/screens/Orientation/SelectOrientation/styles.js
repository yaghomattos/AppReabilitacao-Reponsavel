import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#76BCAA',
  },
  wrapper: {
    flex: 1,
  },
  viewList: {
    flex: 1,
    marginBottom: Dimensions.get('window').height * 0.02,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    width: '82%',
  },
  itemTitle: {
    fontSize: 18,
    color: '#000',
  },
});

export default styles;

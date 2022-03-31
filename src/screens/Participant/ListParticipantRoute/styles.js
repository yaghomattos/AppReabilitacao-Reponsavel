import { StyleSheet } from 'react-native';

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
    width: '84%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 29,
    borderRadius: 10,
    backgroundColor: '#fefefe',
  },
  viewList: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    width: '84%',
    height: 70,
    marginTop: 6,
    marginHorizontal: '8%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 22,
    color: '#000',
  },
});

export default styles;

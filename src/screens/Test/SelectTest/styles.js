import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3E9ACD',
  },
  viewList: {
    flex: 1,
    paddingTop: 20,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  item: {
    width: 350,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6f6f6f',
  },
  itemTitle: {
    fontSize: 18,
    color: '#fff',
  },
  listDescription: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;

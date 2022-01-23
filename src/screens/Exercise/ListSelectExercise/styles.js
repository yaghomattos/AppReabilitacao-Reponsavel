import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  background: {
    flex: 1,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#f5f5f5',
  },
  viewList: {
    height: '80%',
    paddingTop: 10,
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    width: 340,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#afafaf',
  },
  item: {
    width: 280,
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    color: '#fff',
    margin: 15,
  },
});

export default styles;

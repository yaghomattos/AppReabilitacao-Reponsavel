import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  backgroundList: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  viewList: {
    height: '80%',
    paddingTop: 10,
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  divider: {
    height: 3,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    width: 350,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#afafaf',
  },
  listItem: {
    width: 320,
  },
  listItemTitle: {
    fontSize: 20,
    color: '#fff',
  },
  deleteButton: {
    marginRight: 10,
    alignItems: 'center',
    color: '#fff',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    flexDirection: 'row',
    width: '100%',
    margin: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  icon: {
    color: '#fff',
  },
  input: {
    width: 340,
    height: 45,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
  },
  viewList: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    width: '85%',
    height: 80,
    marginTop: 20,
    marginEnd: 20,
    marginStart: 30,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  itemText: {
    width: '80%',
  },
  itemTitle: {
    fontSize: 22,
    color: '#000',
  },
});

export default styles;

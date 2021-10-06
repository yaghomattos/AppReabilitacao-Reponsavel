import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    width: '100%',
    paddingStart: 20,
    margin: 30,
  },
  back: {
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
    width: '85%',
    height: 60,
    marginTop: 20,
    marginEnd: 20,
    marginStart: 30,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  itemTitle: {
    fontSize: 22,
    color: '#000',
  },
});

export default styles;

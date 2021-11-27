import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#208AEC',
  },
  header: {
    alignItems: 'center',
    height: '20%',
    backgroundColor: '#3E9ACD',
  },
  backView: {
    width: '100%',
    paddingStart: 20,
    margin: 30,
  },
  back: {
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: '10%',
    paddingTop: '5%',
    fontWeight: 'bold',
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
    width: 300,
    height: 80,
    justifyContent: 'space-evenly',
  },
  listItemTitle: {
    fontSize: 22,
    color: '#fff',
  },
  deleteButton: {
    alignItems: 'center',
    color: '#fff',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
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
  item: {
    width: 350,
    height: 60,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#afafaf',
  },
  itemTitle: {
    fontSize: 22,
    color: '#fff',
  },
});

export default styles;

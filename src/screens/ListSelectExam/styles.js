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
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingTop: '10%',
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
    width: 280,
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;

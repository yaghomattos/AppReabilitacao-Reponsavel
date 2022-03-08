import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3E9ACD',
  },
  wrapper: {
    height: '100%',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#fff',
  },
  viewList: {
    height: '82%',
    paddingTop: 20,
    alignItems: 'center',
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
  divider: {
    height: 3,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 18,
    color: '#fff',
  },
  extra: {
    height: '15%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  warning: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DE726A',
  },
  button: {
    width: 100,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;

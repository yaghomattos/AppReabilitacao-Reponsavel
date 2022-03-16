import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  background: {
    flex: 1,
  },
  viewList: {
    height: '100%',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: 342,
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    width: 280,
  },
  itemTitle: {
    fontSize: 20,
    color: '#222222',
  },
  button: {
    color: '#222222',
    margin: 15,
  },
  add: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '85%',
    left: '80%',
    borderRadius: 20,
    backgroundColor: '#222222',
  },
});

export default styles;

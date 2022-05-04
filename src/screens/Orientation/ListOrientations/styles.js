import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    margin: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  icon: {
    color: '#000',
  },
  header_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
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
    width: Dimensions.get('window').width * 0.88,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item: {
    width: Dimensions.get('window').width * 0.79,
  },
  itemTitle: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    color: '#000',
    margin: 15,
  },
  add: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '78%',
    left: '80%',
    borderRadius: 20,
    backgroundColor: '#000',
  },
  footer: {
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#565755',
  },
  tab: {
    width: 100,
    alignItems: 'center',
    textAlign: 'center',
  },
  tab_text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  tab_text_inative: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fefefe',
  },
});

export default styles;

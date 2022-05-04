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
  backgroundList: {
    flex: 1,
  },
  viewList: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    width: '84%',
    height: 70,
    marginTop: 20,
    marginEnd: 20,
    marginHorizontal: '8%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    width: '82%',
  },
  listItemTitle: {
    fontSize: 20,
    color: '#000',
  },
  deleteButton: {
    marginRight: 10,
    alignItems: 'center',
    color: '#000',
  },
  add: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '79%',
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

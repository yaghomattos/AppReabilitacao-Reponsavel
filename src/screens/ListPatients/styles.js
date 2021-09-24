import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '19%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    width: '100%', 
    paddingStart: 20,
    margin: 30,
  },
  back: {
    color: '#000',
  },
  input: {
    width: 340,
    height: 45,
    paddingHorizontal: 20,
    backgroundColor: '#6f6f6f',
    borderRadius: 30,
  },
  viewList: {
    flex: 1,
    paddingTop: 10,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
   
  },
  item: {
    width: 150,
    height: 208,
    marginTop: 20,
    marginEnd: 20,
    marginStart: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor: '#6f6f6f',
  },
  itemTitle: {
    fontSize: 22,
    color: '#000',
  }
});

export default styles;
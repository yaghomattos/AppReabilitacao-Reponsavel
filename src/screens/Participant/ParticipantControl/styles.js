import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    justifyContent: 'space-evenly',
    height: '30%',
  },
  back: {
    paddingLeft: 20,
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: '10%',
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: '#f6f6f6',
  },
  buttons: {
    justifyContent: 'space-evenly',
    height: '40%',
    marginTop: '20%',
  },
});

export default styles;
